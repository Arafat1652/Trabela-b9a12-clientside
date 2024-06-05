import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Nav from "../Nav/Nav";
import useAuth from "../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useTourGuide from "../../Hooks/useTourGuide";
import axios from "axios";
import Swal from "sweetalert2";

const PackageDetails = () => {
  const loadedPackages = useLoaderData();
  const { user } = useAuth();
  const [guides, isPending] = useTourGuide()
  const [startDate, setStartDate] = useState(new Date());
  // console.log(loadedPackages);

  const {_id ,tour_type ,trip_title ,price, image ,image_1 ,image_2 ,image_3 ,image_4 ,image_5 ,about_tour ,tour_plan ,package_name} = loadedPackages;

  // console.log(startDate);

  const handleBooking =e=>{
    e.preventDefault()
    const form = e.target
    const packageId = _id
    const tourist_email = user?.email
    const tourist_name = user?.displayName
    const tourist_photo = user?.photoURL
    const price = loadedPackages.price
    const tourDate = startDate
    const guide_name = form.guide_name.value
    const package_name = loadedPackages.package_name
    const package_image = loadedPackages.image
    const status = "In Review"
    
    const bookingInfo =  {packageId, tourist_email, tourist_name, tourist_photo, price, tourDate, guide_name, package_name,package_image, status}
        //  console.table(bookingInfo);
        axios.post(`${import.meta.env.VITE_API_URL}/bookings`, bookingInfo)
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user?.displayName} you booked this tour succefully`,
              showConfirmButton: false,
              timer: 1500
            });
            form.reset()
          }
        })
  }

  return (
    <>
      <div className="container mx-auto">
        <Nav />
        <section className="bg-white">
          <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src={image_1}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </a>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                >
                  <img
                    src={image_2}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </a>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <a
                    href=""
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src={image_3}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </a>
                  <a
                    href=""
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src={image_4}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  </a>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src={image_5}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <h3 className="">about tour:{about_tour}</h3>
        <h3 className="">tour Plan:{tour_plan}</h3>
        <h3 className="">package name:{package_name}</h3>
        <h3 className="">tour type: {tour_type}</h3>
        <h3 className="">tour title:{trip_title}</h3>
        <h3 className="">price:$ {price}</h3>

        {/* form */}
        <div className="my-24">
          <form onSubmit={handleBooking}>
            <h2 className=" text-3xl text-center mt-1 font-semibold">
              Book Your Tour
            </h2>
            {/* first row */}
            <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
              {/* tourist name */}
              <div className="w-full  mb-4 mt-6">
                <label className="mb-2 ">Tourist Name</label>
                <input
                  type="text"
                  className="mt-2 p-4 w-full border-2 rounded-lg "
                  defaultValue={user?.displayName}
                  readOnly
                />
              </div>
              {/* tourist email*/}
              <div className="w-full mb-4 lg:mt-6">
                <label className=" ">Tourist Email</label>
                <input
                  type="text"
                  className="mt-2 p-4 w-full border-2 rounded-lg "
                  defaultValue={user?.email}
                 readOnly
                />
              </div>
            </div>
            {/* second row */}
            {/* tourist photo */}
            <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
              <div className="w-full mb-4 lg:mt-6">
                <label className=" ">Tourist PhotoURL</label>
                <input
                  type="text"
                  className="mt-2 p-4 w-full border-2 rounded-lg "
                  defaultValue={user?.photoURL}
                  readOnly
                />
              </div>
              {/* price */}
              <div className="w-full  mb-4 mt-6">
                <label className="mb-2 ">Price</label>
                <input
                  type="number"
                  className="mt-2 p-4 w-full border-2 rounded-lg "
                  defaultValue={price}
                  readOnly
                />
              </div>
            </div>
            {/* third row */}
            <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
              {/*guide Name */}
              <div className="form-control w-full ml-4 ">
              <label className="label">
                <span className="label-text">Guides</span>
              </label>
              <div className="input-group">
                <select
                required
                  name="guide_name"
                  className="select select-bordered w-full"
                >
                  
                  {guides.map((item) => (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                  
                ))}
                </select>
              </div>
              </div>
             {/* tour place name*/}
             <div className="w-full mt-6">
              
              <label className="mr-2">Tour Date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="select select-bordered w-full p-2 rounded-md text-black"
              />

              </div>
            </div>
            {/* fourth row */}
      
            <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
              <button type="submit" className="w-full p-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PackageDetails;


{/* <div className="form-control w-1/2 ml-4 ">
<label className="label">
  <span className="label-text">Category</span>
</label>
<div className="input-group">
  <select
    name="category"
    className="select select-bordered w-full"
  >
    
    <option>Novel</option>
    <option>Thriller</option>
    <option>History</option>
    <option>Drama</option>
    <option>Sci-Fi</option>
  </select>
</div>
</div>

const category = form.category.value;

<div className="w-full  mb-4 mt-6 ">
              <label htmlFor="category" className="block text-gray-600">
                Category
              </label>
              <select
                required
                className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                name="guideName"
              >
                {guides.map((item) => (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div> */}