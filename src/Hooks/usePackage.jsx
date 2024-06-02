import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const usePackage = () => {
    const {data: packages=[], isPending} = useQuery({
        queryKey:['packages'] ,
        queryFn: async()=>{
            const res = await axios(`${import.meta.env.VITE_API_URL}/packages`)
            return res.data
        }
    })
    return [packages, isPending]
};

export default usePackage;