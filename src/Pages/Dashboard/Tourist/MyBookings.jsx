import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";

const MyBookings = () => {
  const { user } = useAuth();
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-bookings", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/my-bookings/${user?.email}`
      );

      return data;
    },
  });

  const handleCancelItem=(_id)=>{
    console.log('remove',_id);
    axios.delete(`${import.meta.env.VITE_API_URL}/cancelbook/${_id}`)
    .then(res=>{
        if(res.data.deletedCount>0){
        refetch()
          toast.success(`${user?.displayName}! item is removed`)
        }
      })
     
}

  // console.log(bookings);

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
              <th>Guide Name</th>
              <th>Tour Date</th>
              <th>Price</th>
              <th>status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((item, index) => (
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
                <td>{item.guide_name}</td>
                <td>{new Date(item.tourDate).toLocaleString()}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
                <td>
                {/* {item.status === 'Accepted'? <button className="btn btn-primary btn-xs">Pay</button> : <button className="btn btn-secondary btn-xs ml-2">Cancel</button>} */}

              <button disabled={item.status==="In Review" || item.status==="Rejected"} className="btn btn-primary btn-xs">Pay</button> 

              {item?.status === "In Review" && <button onClick={()=> handleCancelItem(item._id)} className="btn btn-secondary btn-xs ml-2">Cancel</button>} 
                
                    
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
