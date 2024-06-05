import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";


const MyAssignedTours = () => {
    const {user} = useAuth()
    const {
        data: assigned= [], isLoading, refetch,
      } = useQuery({
        queryKey: ["my-assignTour", user?.displayName],
        queryFn: async () => {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/my-assignTour/${user?.displayName}`
          );
    
          return data;
        },
      });
    //   console.log('assigned',assigned);

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
                <th>Tourist Name</th>
                <th>Tour Date</th>
                <th>Price</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
             
              {assigned.map((item, index) => (
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
                  <td>{item.tourist_name}</td>
                  <td>{new Date(item.tourDate).toLocaleString()}</td>
                  <td>{item.price}</td>
                  <td>{item.status}</td>
                  <td>
                  <button className="btn btn-primary btn-xs mb-2">Accept</button>
                   <button className="btn btn-secondary btn-xs ml-2">Reject</button>
                      
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyAssignedTours;