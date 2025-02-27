import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import TypePackage from "./TypePackage";
import { useEffect, useState } from "react";

const TourType = () => {

    const {data: types=[], isPending} = useQuery({
        queryKey:['types'] ,
        queryFn: async()=>{
            const res = await axios(`${import.meta.env.VITE_API_URL}/types`)
            return res.data
        }
    })
    // const [types, setTypes] = useState([])
    // // console.log(crafts);
    // useEffect(()=>{
    //     fetch(`${import.meta.env.VITE_API_URL}/types`)
    //     .then(res=>res.json())
    //     .then(data=>setTypes(data))
    // },[])

    // console.log('types',types);
    // if(isPending){
    //    return <LoadingSpinner/>
    // }

    if(!types){
        return <h3>loading</h3>
    }

  return (

    <div className="max-w-7xl mx-auto my-24">
     <h3 className="mt-24 text-2xl text-orange-2 text-center font-play">Category & Types</h3>
        <h3 className="text-4xl mt-4 text-center font-bold font-mont">Tour Types</h3>
                <p className="lg:w-[650px] text-gray-400 mx-auto text-center mt-3"> Explore comprehensive guides to destinations across the globe. From hidden gems to popular tourist spots, we cover it all with detailed information and local insights.</p>
                <img className="mx-auto mb-10" src="https://roam.qodeinteractive.com/wp-content/plugins/mikado-tours/assets/img/separator.png" alt="" />
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-3 lg:p-0">
    {
        
           types.map(item=> <TypePackage key={item._id} item={item}></TypePackage>)   
        
    }
    </div>
</div>
    

       
        
        


  );
};

export default TourType;
