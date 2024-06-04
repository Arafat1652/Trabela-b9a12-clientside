import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";


const MyBookings = () => {
    const {user} = useAuth()
    const {
        data: bookings = [], isLoading, refetch,} = useQuery({
        queryKey: ['my-bookings', user?.email],
        queryFn: async () => {
          const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-bookings/${user?.email}`)
    
          return data
        },
      })
      console.log(bookings);

    return (
        <div>
            
        </div>
    );
};

export default MyBookings;