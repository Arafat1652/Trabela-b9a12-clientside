import { FaRegHeart } from "react-icons/fa";
import usePackage from "../../Hooks/usePackage";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";


const AllPackages = () => {
    const [packages, isPending] = usePackage()
    if(isPending){
        return <LoadingSpinner/>
    }
    return (
        <>
        <Nav/>
        <div className="my-24 container mx-auto">


            <div className="grid grid-cols-4">
                {
                    packages.map(item =><div key={item._id} className="w-72 relative bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    
                    <img src={item.image} alt="Product" className=" h-80 w-72 object-cover rounded-t-xl" />
                    <div className="absolute top-0 right-0 text-black rounded-full bg-white p-2 m-2  text-xl font-medium"><FaRegHeart className="hover:fill-red-400" /></div> 
        
                    <div className="px-4 py-3 w-72">
                        
                        <span className="text-gray-400 mr-3 uppercase text-xs">{item.tour_type}</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">{item.trip_title}</p>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">${item.price}</p>
                            
                            <Link to={`/details/${item._id}`} className="ml-auto">
                            <button className="btn btn-outline btn-sm"> View Package</button>
                            </Link>
                        </div>
                        
                    </div>
               
                    </div>)
                }

            </div>
             
        </div>

        </>
    );
};

export default AllPackages;