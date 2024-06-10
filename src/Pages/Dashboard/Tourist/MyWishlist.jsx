import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";


const MyWishlist = () => {
    const {user} = useAuth()
     // for pagination
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [count, setCount] = useState(0)

    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)
  
     //  handle pagination button
     const handlePaginationButton = value => {
      console.log(value)
      setCurrentPage(value)
    }


    const {
      data: wishCount = []} = useQuery({
      queryKey: ["wishCount",user?.email, currentPage, itemsPerPage],
      queryFn: async() => {
          const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/wishCount/${user?.email}`)
          setCount(data.count) 
          return data
      },
    });


    const {data: wishData=[], isPending, refetch} = useQuery({
        queryKey:['my-wishlist', currentPage, itemsPerPage] ,
        queryFn: async()=>{
            const res = await axios(`${import.meta.env.VITE_API_URL}/my-wishlist/${user?.email}?&page=${currentPage}&size=${itemsPerPage}`)
            return res.data
        }
    })

    const handleDelete=(_id)=>{
        // console.log(_id);
        axios.delete(`${import.meta.env.VITE_API_URL}/wishList/${_id}`)
        .then(res=>{
            if(res.data.deletedCount>0){
            refetch()
              toast.success(`${user?.displayName}! package is remove form your wishlist`)
            }
          })
         
    }

    // console.log('wish datas',wishData);

    return (
        <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-red-200">
                <th>#</th>
                <th>Package Image</th>
                <th>Package Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             
              {wishData.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
  
                  <td>{item.package_name}</td>
                  <td>{item.price}</td>
                  <td>
                  <button onClick={()=>handleDelete(item._id)} className="btn btn-primary btn-xs mb-2">Delete</button>
                   <Link to={`/details/${item.wishId}`} className="btn btn-secondary btn-xs ml-2">View Details</Link>
                      
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
    );
};

export default MyWishlist;