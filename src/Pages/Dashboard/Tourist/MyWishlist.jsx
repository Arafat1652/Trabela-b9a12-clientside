import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const MyWishlist = () => {
    const {user} = useAuth()
    const {data: wishData=[], isPending, refetch} = useQuery({
        queryKey:['my-wishlist'] ,
        queryFn: async()=>{
            const res = await axios(`${import.meta.env.VITE_API_URL}/my-wishlist/${user?.email}`)
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
              <tr>
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
      </div>
    );
};

export default MyWishlist;