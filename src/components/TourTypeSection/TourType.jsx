import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import TypePackage from "./TypePackage";
import { useEffect, useState } from "react";

const TourType = () => {

    // const {data: types=[], isPending} = useQuery({
    //     queryKey:['types'] ,
    //     queryFn: async()=>{
    //         const res = await axios(`${import.meta.env.VITE_API_URL}/types`)
    //         return res.data
    //     }
    // })
    const [types, setTypes] = useState([])
    // console.log(crafts);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/types`)
        .then(res=>res.json())
        .then(data=>setTypes(data))
    },[])

    // console.log('types',types);
    // if(isPending){
    //    return <LoadingSpinner/>
    // }

    if(!types){
        return <h3>loading</h3>
    }

  return (

    <div className="max-w-7xl mx-auto my-24">
    <h3 className="text-3xl text-center font-bold">Tour Types</h3>
    <p className="lg:w-[650px] mx-auto  mb-10 text-center mt-3">Stories focused on suspense, intrigue, and solving crimes or unraveling secrets, keeping readers on the edge of their seats. </p>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-3 lg:p-0">
    {
        
           types.map(item=> <TypePackage key={item._id} item={item}></TypePackage>)   
        
    }
    </div>
</div>
    

       
        
        


  );
};

export default TourType;
