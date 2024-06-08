import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const MyAssignedTours = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
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
      data: tourCount = []} = useQuery({
      queryKey: ["tourCount", user?.displayName, currentPage, itemsPerPage,],
      queryFn: async() => {
          const {data} = await axiosSecure(`/tourCount/${user?.displayName}`)
          setCount(data.count) 
          return data
      },
    });


    const {
        data: assigned= [], isLoading, refetch,
      } = useQuery({
        queryKey: ["my-assignTour", user?.displayName, currentPage, itemsPerPage,],
        queryFn: async () => {
          const { data } = await axiosSecure(
            `/my-assignTour/${user?.displayName}?&page=${currentPage}&size=${itemsPerPage}`
          );
    
          return data;
        },
      });
    //   console.log('assigned',assigned);


    const handleAccept=(_id)=>{
      // console.log("accept",_id);
      // ({status: 'Accepted'})

      axios.patch(`${import.meta.env.VITE_API_URL}/tourAccepted/${_id}`, {status: 'Accepted'})
      .then(res=>{
        if(res.data.modifiedCount > 0){
          toast.success('accepted this tour')
          refetch()
        }
      })
      
    }


    const handleReject=(_id)=>{
      axios.patch(`${import.meta.env.VITE_API_URL}/tourAccepted/${_id}`, {status: 'Rejected'})
      .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount > 0){
          toast.success('reject this tour')
          refetch()
        }
      })
    }

    return (
        <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Package Image</th>
                <th>Package Name</th>
                <th>Tourist Name</th>
                <th>Tour Date</th>
                <th>Price</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             
              {assigned.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.package_image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
  
                  <td>{item.package_name}</td>
                  <td>{item.tourist_name}</td>
                  <td>{new Date(item.tourDate).toLocaleString()}</td>
                  <td>{item.price}</td>
                  <td>{item.status}</td>
                  <td>
                  <button onClick={()=>handleAccept(item._id)} className="btn btn-primary btn-xs mb-2">Accept</button>
                   <button onClick={()=>handleReject(item._id)} className="btn btn-secondary btn-xs ml-2">Reject</button>
                   
                    {/* {
                      item?.status === 'In Review' && <>
                       <button onClick={()=>handleAccept(item._id)} className="btn btn-primary btn-xs mb-2">Accept</button>
                   <button onClick={()=>handleReject(item._id)} className="btn btn-secondary btn-xs ml-2">Reject</button>
                      </>
                    } */}
                 
                      
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

export default MyAssignedTours;