import { Link } from "react-router-dom";
import useTourGuide from "../../Hooks/useTourGuide";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const MeetTourGuide = () => {
  // const [guides, isPending] = useTourGuide();
  // console.log("tour guide", guides);

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
      data: bookingCount = []} = useQuery({
      queryKey: ["guideCount", currentPage, itemsPerPage],
      queryFn: async() => {
          const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/guideCount`)
          setCount(data.count) 
          return data
      },
    });


  const  {data:guides=[], isPending, refetch}  = useQuery({
    queryKey: ['guides', currentPage, itemsPerPage],
    queryFn: async () =>{
     const res =await axios.get(`${import.meta.env.VITE_API_URL}/guides?&page=${currentPage}&size=${itemsPerPage}`)
      return res.data
    }
  })


  if(isPending){
    <LoadingSpinner/>
  }

  return (
    <>
      {/* <Helmet>
        <title>My Listings</title>
      </Helmet> */}

      <div className="container mx-auto px-4 sm:px-8">
        <div className="bg-white shadow-md rounded-md overflow-hidden  mx-auto mt-16">
          <div className="bg-gray-100 py-2 px-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Meet Our Guide
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                   SL
                  </th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
               {
                guides.map((item, index)=> <tr key={item._id}>
                    <th>
                     {index+1}
                    </th>
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
                    <th>{item.name}</th>
                    <th>{item.email}</th>
                    <th>
                      <Link to={`/guideDetails/${item._id}`} className="btn btn-sm btn-primary">Details</Link>
                    </th>
                  </tr>)
               }

              </tbody>
            </table>
          </div>
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
    </>
  );
};

export default MeetTourGuide;
