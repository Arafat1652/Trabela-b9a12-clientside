import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageUsers = () => {
  const {user} = useAuth()
  const {
    data: users = [], isLoading, refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async() => {
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/users`)
        return data
    },
  });

  // console.log(users);
  const handleMakeAdmin= item =>{
    const roleUpdate = {
      role: "admin",
      status: "Confirmed"
  }

    axios.patch(`${import.meta.env.VITE_API_URL}/users/admin/${item?.email}`, roleUpdate)
    .then(res=> {
        console.log(res.data);
        if(res.data.modifiedCount>0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              });
              
        }
    })


  }


  const handleMakeGuide=item=>{

    const roleUpdate = {
      role: "guide",
      status: "Confirmed"
  }

    axios.patch(`${import.meta.env.VITE_API_URL}/users/admin/${item?.email}`, roleUpdate)
    .then(res=> {
        console.log(res.data);
        if(res.data.modifiedCount>0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item.name} is an Guide Now!`,
                showConfirmButton: false,
                timer: 1500
              });
              
        }else{
          toast(res.data.message)
        }
    })

  }

  return (
    <div>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>image</th>
            <th>Name</th>
            <th>Email</th>
            <th>role</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         
          {users.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>

              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>{item.status}</td>
              <td>
              <button onClick={()=>handleMakeAdmin(item)} disabled={item.email === user.email || item.status === 'Confirmed' || item.role === "admin"}  className="btn btn-primary btn-xs mb-2">Make Admin</button>
               <button onClick={()=>handleMakeGuide(item)} disabled={item.email === user.email || item.status === 'Confirmed'|| item.role === "admin"} className="btn btn-secondary btn-xs ml-2">Make Tour Guide</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default ManageUsers;
