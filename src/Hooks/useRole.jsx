
import {useQuery} from "@tanstack/react-query"
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const {user, loading} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data:role, isLoading} = useQuery({
        queryKey: ['userRole', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async()=>{
            const {data} = await axiosSecure(`${import.meta.env.VITE_API_URL}/user/${user?.email}`)
            return data.role
        }
    })

    return [role, isLoading]
};

export default useRole;