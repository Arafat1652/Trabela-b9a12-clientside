import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Select from 'react-select';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUsers = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
  // for pagination
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(0)
  // for search
  const [search, setSearch] = useState('')
  const [searchText, setSearchText] = useState()
  const [searchType, setSearchType] = useState('name')
// for filter
const [selectedOption, setSelectedOption] = useState( { value: '', label: 'select' });
const options = [
  { value: '', label: 'all' },
  { value: 'guide', label: 'guide' },
  { value: 'user', label: 'user' },
  { value: 'admin', label: 'admin' },
];

  const numberOfPages = Math.ceil(count / itemsPerPage)
  const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

   //  handle pagination button
   const handlePaginationButton = value => {
    console.log(value)
    setCurrentPage(value)
  }

  // handle search
  const handleSearch = e => {
    e.preventDefault()
    setSearch(searchText)
    setCurrentPage(1)
  }

 

const {
  data: userCount = []} = useQuery({
  queryKey: ["userCount", currentPage, itemsPerPage, search, searchType, selectedOption.value],
  queryFn: async() => {
      const {data} = await axiosSecure(`/userCount?filter=${selectedOption.value}&search=${search}&searchType=${searchType}`)
      setCount(data.count) 
      return data
  },
});


  const {
    data: users = [], isLoading, refetch} = useQuery({
    queryKey: ["users", currentPage, itemsPerPage, search, searchType, selectedOption.value],
    queryFn: async() => {
        const {data} = await axiosSecure(`/users?filter=${selectedOption.value}&page=${currentPage}&size=${itemsPerPage}&search=${search}&searchType=${searchType}`)
        return data
    },
  });

  if(isLoading){
    return <LoadingSpinner/>
  }

  // console.log(users);
  const handleMakeAdmin= item =>{
    const roleUpdate = {
      role: "admin",
      status: "Confirmed"
  }

    axios.patch(`${import.meta.env.VITE_API_URL}/users/admin/${item?.email}`, roleUpdate)
    .then(res=> {
        console.log(res.data);
        if(res.data.modifiedCount>0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              });
              
        }
    })


  }


  const handleMakeGuide=item=>{

    const roleUpdate = {
      role: "guide",
      status: "Confirmed"
  }

    axios.patch(`${import.meta.env.VITE_API_URL}/users/admin/${item?.email}`, roleUpdate)
    .then(res=> {
        console.log(res.data);
        if(res.data.modifiedCount>0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item.name} is an Guide Now!`,
                showConfirmButton: false,
                timer: 1500
              });
              
        }else{
          toast(res.data.message)
        }
    })

  }

  console.log(selectedOption)


  return (
    <div>
       <div className="lg:flex items-center gap-8">
          <form onSubmit={handleSearch}>
            <div className='mb-2 flex p-1 overflow-hidden border rounded-lg  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>

            <select
                  className='px-4 py-2 text-gray-700 bg-white border-r outline-none'
                    value={searchType}
                    onChange={e => setSearchType(e.target.value)}
                    >
                    <option value="name">Name</option>
                    <option value="email">Email</option>
              </select>

              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Search'
                aria-label='Search '
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#002369] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
        {/* filter */}
          <div>
          <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
          </div>

          </div>
          

    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>image</th>
            <th>Name</th>
            <th>Email</th>
            <th>role</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
          {users.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>

              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>{item.status}</td>
              <td>
              <button onClick={()=>handleMakeAdmin(item)} disabled={item.email === user.email || item.status === 'Confirmed' || item.role === "admin"}  className="btn btn-primary btn-xs mb-2">Make Admin</button>
               <button onClick={()=>handleMakeGuide(item)} disabled={item.email === user.email || item.status === 'Confirmed'|| item.role === "admin"} className="btn btn-secondary btn-xs ml-2">Make Tour Guide</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Section */}
      <div className='flex justify-center mt-12'>
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'
        >
          <div className='flex items-center -mx-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 16l-4-4m0 0l4-4m-4 4h18'
              />
            </svg>

            <span className='mx-1'>previous</span>
          </div>
        </button>
        {/* Numbers */}
        {pages.map(btnNum => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ? 'bg-blue-500 text-white' : ''
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        {/* Next Button */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'
        >
          <div className='flex items-center -mx-1'>
            <span className='mx-1'>Next</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
  );
};

export default ManageUsers;
