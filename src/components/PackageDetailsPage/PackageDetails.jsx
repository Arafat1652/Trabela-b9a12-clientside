import { useEffect, useState } from "react";
import {  Link, Navigate, useLoaderData, useLocation, useNavigate, } from "react-router-dom";
import Nav from "../Nav/Nav";
import useAuth from "../../Hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useTourGuide from "../../Hooks/useTourGuide";
import axios from "axios";
import Swal from "sweetalert2";
import Confetti from 'react-confetti'

const PackageDetails = () => {
  const loadedPackages = useLoaderData();
  const { user } = useAuth();
  const [guides, isPending] = useTourGuide();
  const [startDate, setStartDate] = useState(new Date());
  // console.log(loadedPackages);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCount, setBookingCount] = useState(0); // Add state for booking count
  const [canApply, setCanApply] = useState(false); // Add state for apply button
  const [showCongratulations, setShowCongratulations] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();

  const { _id, tour_type, trip_title, price, image, image_1, image_2, image_3, image_4, image_5, about_tour, tour_plan, package_name,} = loadedPackages;

  console.log(startDate);
  useEffect(() => {
    if (user) {
      // Fetch booking count
      axios.get(`${import.meta.env.VITE_API_URL}/counted-booking/${user.email}`)
        .then(res => {
          const count = res.data.count;
          setBookingCount(count);
          if (count > 3) {
            setCanApply(true);
            setShowCongratulations(true); // Show congratulations message
          } else {
            setCanApply(false);
            setShowCongratulations(false);
          } // Enable "Apply" button if bookings > 3
        })
        .catch(error => {
          console.error('Failed to fetch booking count:', error);
        });
    }
  }, [bookingCount, canApply, user]);

  // const  {data, isPending, refetch}  = useQuery({
  //   queryKey: ['counted-booking', user?.email],
  //   queryFn: async () =>{
  //    const res =await axios.get(`${import.meta.env.VITE_API_URL}/counted-booking/${user?.email}`)
  //    setBookingCount(res.data.count);
  //     setCanApply(res.data.count > 3);
  //     return res.data
  //   }
    
  // })
  

  const handleBooking = (e) => {
    

    if (!user) {
      setIsSubmitted(true);
      navigate('/login', { state: { from: location } });
      return;
    }

    const form = e.target;
    const packageId = _id;
    const tourist_email = user?.email;
    const tourist_name = user?.displayName;
    const tourist_photo = user?.photoURL;
    const price = loadedPackages.price;
    const tourDate = startDate;
    const guide_name = form.guide_name.value;
    const package_name = loadedPackages.package_name;
    const package_image = loadedPackages.image;
    const status = "In Review";

    const bookingInfo = {
      packageId,
      tourist_email,
      tourist_name,
      tourist_photo,
      price,
      tourDate,
      guide_name,
      package_name,
      package_image,
      status,
    };
    //  console.table(bookingInfo);
    axios
      .post(`${import.meta.env.VITE_API_URL}/bookings`, bookingInfo)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user?.displayName} you booked this tour succefully`,
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

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
                      <option value={item.name} key={item._id}>
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

            <div className="w-full rounded-lg  mt-4 text-lg font-semibold">
            {
              user?.email ? <label htmlFor="my_modal_7" className="btn w-full bg-blue-700 text-white">
              Submit
            </label> : <Link to="/login" state={location.pathname} htmlFor="my_modal_7" className="btn w-full bg-blue-700 text-white">
              Submit
            </Link> 
            }
              

              {/* modal */}
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <button
                    type="submit"
                    className="w-full p-4 bg-blue-700 text-white"
                  >
                    Confirm Your booking
                  </button>
                  <a href="/dashboard/my-bookings" className="text-primary">
                    {" "}
                    My bookings
                  </a>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
            </div>
          </form>
          {/* apply button */}
          {showCongratulations && (
          <div className="congratulations-container">
            <Confetti tweenDuration={5000} recycle={false}/>
            <h2 className="text-4xl text-center text-green-500 font-bold mt-4">
              Congratulations! You have earned a discount!
            </h2>
          </div>
      )}
          <button className="btn btn-secondary mt-8" disabled={!canApply}>Apply</button>
        </div>
      </div>
    </>
  );
};

export default PackageDetails;
