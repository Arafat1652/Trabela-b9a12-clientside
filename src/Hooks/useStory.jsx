import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useStory = () => {
    
        const {data: storys=[], isPending} = useQuery({
            queryKey:['storys'] ,
            queryFn: async()=>{
                const res = await axios(`${import.meta.env.VITE_API_URL}/storys`)
                return res.data
            }
        })
        return [storys, isPending]
   
};

export default useStory;