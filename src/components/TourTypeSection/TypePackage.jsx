
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const TypePackage = ({item}) => {
    // eslint-disable-next-line react/prop-types
    const {  image, tour_type} = item;
    // console.log('tour typeeeeee', tour_type );

    const {data: signleType=[], isPending} = useQuery({
      queryKey:['types', tour_type] ,
      queryFn: async()=>{
          const res = await axios(`${import.meta.env.VITE_API_URL}/${tour_type}`)
          return res.data
      }
  })

    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/types/${tour_type}`)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         // console.log(data);
    //       });
    //   }, [tour_type]);

      // bg-[#d7edd8]
    return (
        <Link  to={`/tourItem/${tour_type}`} className="  rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
           <div className="p-4">
             <img
               className="rounded-xl lg:h-[250px] md:h-[350px] w-full object-cover object-center"
               src={image}
               alt="Dog"
             />
           </div>
             <h3 className="text-center p-3 text-3xl text-[#3d626c] font-bold">{tour_type}</h3>
         </Link>
    );
};

export default TypePackage;