import { useState } from "react";
import { useLoaderData, } from "react-router-dom";
import Nav from "../Nav/Nav";
import useAuth from "../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PackageDetails = () => {
  const loadedPackages = useLoaderData();
  const {user} = useAuth()
  const [startDate, setStartDate] = useState(new Date());
  console.log(loadedPackages);
  const {
    tour_type,
    trip_title,
    price,
    image_1,
    image_2,
    image_3,
    image_4,
    image_5,
    about_tour,
    tour_plan,
    package_name,
  } = loadedPackages;

  console.log(startDate);

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

        <div className=" grid grid-cols-1 md:grid-cols-3 h-fit w-4/5 md:w-[90%] lg:w-4/5 rounded shadow overflow-hidden text-white">
          {/* form / left div  */}
          <div className="p-2 md:p-4 h-full bg-gray-800 col-span-2">
            <form>
              {/* form top part containing mail icon and heading  */}
              <div className="flex flex-col md:flex-row justify-around items-start md:items-center pt-8 p-4">
                {/* heading  */}
                <h2 className="text-2xl md:text-3xl font-semibold">Book Now</h2>
              </div>

              {/* bottom form with input fields  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 px-4 md:py-12 md:px-8 text-sm">
                {/* name input  */}
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Name <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                    placeholder="Enter Your Name"
                   defaultValue={user?.displayName}
                   readOnly
                    name="name"
                    type="text"
                  />
                </div>

                {/* email input  */}
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Email <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                    placeholder="Enter Your Email"
                    defaultValue={user?.email}
                    readOnly
                    name="email"
                    type="email"
                  />
                </div>

                {/* phone number input  */}
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Image URL <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                    placeholder="Enter Your image url"
                    defaultValue={user?.photoURL}
                    readOnly
                    name="image"
                    type="tel"
                  />
                </div>

                {/* subject input  */}
                <div className="flex flex-col gap-1">
                  <label className="font-semibold">
                    Price <span className="text-red-500">&#42;</span>
                  </label>
                  <input
                    className="border-[1px] border-white bg-gray-800 p-2 rounded-md"
                    placeholder="Price"
                    required
                    defaultValue={price}
                    readOnly
                    type="text"
                  />
                </div>

                {/* message input  */}
                             <div className="flex flex-col gap-2 ">
                                <label className="">
                                  Return Date
                                </label>

                                {/* Date Picker Input Field */}
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} 
                                className="border p-2 rounded-md text-black"
                                />
                              </div>
                {/*for tour guide dropDown */}
                
              </div>
                {/* book submit button */}
              <input
                  type="submit"
                  value="Book"
                  className="btn btn-block text-xl border-none"
                />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageDetails;
