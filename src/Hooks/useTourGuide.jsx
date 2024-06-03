import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useTourGuide = () => {

    const  {data:guides=[], isPending, refetch}  = useQuery({
        queryKey: ['guides'],
        queryFn: async () =>{
         const res =await axios.get(`${import.meta.env.VITE_API_URL}/guides`)
          return res.data
        }
      })
    return [guides, isPending]
};

export default useTourGuide;