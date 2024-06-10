import { FaRegHeart } from "react-icons/fa";
import usePackage from "../../Hooks/usePackage";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Nav from "../Nav/Nav";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";

const AllPackages = () => {
  const [packages, isPending] = usePackage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  if (isPending) {
    return <LoadingSpinner />;
  }

  const handleWishlist = (info) => {
    if (user && user?.email) {
      const { _id, package_name, image, price } = info;

      const wishData = {
        wishId: _id,
        email: user?.email,
        package_name,
        image,
        price,
      };
      // console.table(wishData)

      axios
        .post(`${import.meta.env.VITE_API_URL}/wishLists`, wishData)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success(
              `${user?.displayName}! this package add to your Wishlist`
            );
          }
        })
        .catch((error) => {
          toast.success("thie package already in your wishList");
        });
    }
    // if not logged in
    else {
      Swal.fire({
        title: "You are not Logged In?",
        text: "Please login to add to the wishlist",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <>
      <Nav />
      <div className="my-24 container mx-auto">
        <div className="p-2 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((item) => (
            <div
              key={item._id}
              className="w-full lg:w-72 relative bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt="Product"
                className="w-full h-80 lg:w-72 object-cover rounded-t-xl"
              />
              <button
                onClick={() => handleWishlist(item)}
                className="absolute top-0 right-0 text-black rounded-full bg-white p-2 m-2  text-xl font-medium"
              >
                <FaRegHeart className="hover:fill-red-400" />
              </button>

              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {item.tour_type}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {item.trip_title}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                   $ {item.price}
                  </p>

                  <Link to={`/details/${item._id}`} className="ml-auto">
                    <button className="relative inline-block font-medium group py-1.5 px-2.5 ">
                      <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-purple-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span className="absolute inset-0 w-full h-full bg-orange-2 border group-hover:bg-indigo-50"></span>
                      <span className="relative text-white uppercase">View Package</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AllPackages;
