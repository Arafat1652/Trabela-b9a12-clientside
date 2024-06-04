import { FaRegHeart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const TourItem = () => {
    const tourType = useLoaderData() 
    // console.log('tour type nana',tourType);
    
    return (
        <div className="grid max-w-7xl my-24 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
            {
                tourType.map(item => <div
                    key={item._id}
                    className="w-72 relative bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                  >
                    <img
                      src={item.image}
                      alt="Product"
                      className=" h-80 w-72 object-cover rounded-t-xl"
                    />
                    <div className="absolute top-0 right-0 text-black rounded-full bg-white p-2 m-2  text-xl font-medium">
                      <FaRegHeart className="hover:fill-red-400" />
                    </div>
        
                    <div className="px-4 py-3 w-72">
                      <span className="text-gray-400 mr-3 uppercase text-xs">
                        {item.tour_type}
                      </span>
                      <p className="text-lg font-bold text-black truncate block capitalize">
                        {item.trip_title}
                      </p>
                      <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">
                          ${item.price}
                        </p>
        
                        <Link to={`/details/${item._id}`} className="ml-auto">
                          <button className="relative inline-block font-medium group py-1.5 px-2.5 ">
                            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-indigo-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border border-indigo-600 group-hover:bg-indigo-50"></span>
                            <span className="relative text-indigo-600">
                             View Package
                            </span>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div> )
            }
            
        </div>
        // <h3>clas</h3>
    );
};

export default TourItem;