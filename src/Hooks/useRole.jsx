
import {useQuery} from "@tanstack/react-query"
// import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";
import useAuth from "./useAuth";

const useRole = () => {
    const {user, loading} = useAuth()
    // const axiosSecure = useAxiosSecure()

    const {data:role, isLoading} = useQuery({
        queryKey: ['userRole', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user?.email}`)
            return data.role
        }
    })

    return [role, isLoading]
};

export default useRole;