import axios from "axios";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const GuideDetails = () => {
  const loadedGuideDetails = useLoaderData();
  const {user} = useAuth()
//   console.log("loaded guide details", loadedGuideDetails);
  const { name, photo, email, education, skill, experience, phone, address, age,
  } = loadedGuideDetails;

  const {data:comments, isLoading, refetch} = useQuery({
    queryKey: ['comment', email],
    queryFn: async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${email}`)
        return data
    }
})

if(isLoading){
    return <LoadingSpinner/>
}

// console.log(comments);

  const handleComment =(e)=>{
    e.preventDefault()
    const form = e.target
    const rating = form.rating.value
    const comment = form.comment.value
    const date = new Date()
    const userName = user?.displayName
    const userPhoto = user?.photoURL

    const commentData = {rating, comment, date, userName, userPhoto, name, email}
    // console.log(commentData);

    axios.post(`${import.meta.env.VITE_API_URL}/comments`, commentData)
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `your comment is posted`,
              showConfirmButton: false,
              timer: 1500
            });
            form.reset()
            refetch()
          }
        })

  }
  

  return (
    <div>
      <div className="bg-white flex justify-center items-center  p-5">
        <div className="flex flex-col items-center justify-between bg-white dark:bg-gray-800 shadow-md shadow-gray-300 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full md:w-8/12 mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center justify-center px-2 md:px-6">
              <img
                className="w-16  rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block"
                src={photo}
                alt=""
              />
              <div className="text-left ">
                <h4 className="text-lg md:text-2xl lg:text-3xl ease-in-out duration-1000 uppercase">
                  <span className="text-red-500">{name}</span>
                </h4>
                <h4 className="text-sm md:text-base font-medium dark:text-gray-200">
                  {email}
                </h4>
              </div>
            </div>
            <div className="text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500">
              <p className="text-sm flex items-center gap-2 md:text-base text-gray-800 dark:text-gray-200">
                <span>
                  <SlLocationPin />
                </span>
                {address}{" "}
              </p>
              <p className="text-sm flex items-center gap-2 md:text-base text-gray-800 dark:text-gray-200">
                <span>
                  <FiPhoneCall />
                </span>
                {phone}
              </p>
            </div>
          </div>
          <div className=" p-2">
            <h4 className="text-base text-green-400 font-semibold">
              Key Responsibilities
            </h4>
            <ul className="text-lg list-disc ml-6">
              <li>
                <span className="font-bold uppercase">education--{">"}</span>{" "}
                {education}
              </li>
              <li>
                <span className="font-bold uppercase">experince--{">"}</span>{" "}
                {experience}
              </li>
              <li>
                <span className="font-bold uppercase">skills--{">"}</span>{" "}
                {skill}
              </li>
              <li>
                <span className="font-bold uppercase">age--{">"}</span> {age}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* profile end  */}
      {/* comment start */}
      <div className="bg-gray-100 p-6">
        <div className="flex flex-col space-y-4">
          <div className="border border-gray-300 p-4 rounded-lg w-1/2 mx-auto mt-40">
            <h2 className="text-lg font-medium mb-2">Leave a comment</h2>
            <form onSubmit={handleComment}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                 
                >
                  Rating
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                  id="name"
                  name="rating"
                  type="number"
                  max={5}
                  min={1}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                 
                >
                  Comment
                </label>
                <textarea
                name="comment"
                  rows="4"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                  id="comment"
                  placeholder="Enter your comment"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <input
                type='submit'
                  className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  value="Post Comment"
                />
                 
               
              </div>
            </form>
          </div>
          {/* comments */}
          <h2 className="text-lg font-bold mb-4">Comments</h2>

          {
                comments.map(comment=> <div key={comment._id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex gap-3 items-center">
                  <img
                    src={comment.userPhoto}
                    className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400"
                  />
    
                  <div>
                  <h3 className="font-bold">{comment.userName}</h3>
                  <p className="text-gray-700 text-sm mb-2">
                  Posted on : {new Date(comment.date).toLocaleString()}
                </p>
                  </div>
                </div>
                <p><Rating
                style={{ maxWidth: 80 }}
                value={comment.rating}
                readOnly
              />
                </p>
               
                <p className="text-gray-700">
                  {comment.comment}
                </p>
              </div>)
          }
          

        </div>
      </div>
    </div>
  );
};

export default GuideDetails;
