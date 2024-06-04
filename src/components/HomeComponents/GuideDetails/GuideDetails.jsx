import { FaLocationPin } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { MdPhonelinkRing } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { useLoaderData } from "react-router-dom";

const GuideDetails = () => {
  const loadedGuideDetails = useLoaderData();
  console.log("loaded guide details", loadedGuideDetails);
    const { name,
        photo,
        email,
        education,
        skill,
        experience,
        phone,
        address,
        age } = loadedGuideDetails
  return (
    <div>
     <div className="bg-white flex justify-center items-center w-screen h-screen p-5">
    <div className='flex flex-col items-center justify-between bg-white dark:bg-gray-800 shadow-md shadow-gray-300 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full md:w-8/12 mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>
        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center justify-center px-2 md:px-6'>
                <img className='w-16  rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block' src={photo} alt="" />
                <div className='text-left '>
                    <h4 className='text-lg md:text-2xl lg:text-3xl ease-in-out duration-1000 uppercase'><span className='text-red-500'>{name}</span></h4>
                    <h4 className='text-sm md:text-base font-medium dark:text-gray-200'>{email}</h4>
                </div>
            </div>
            <div className='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
                <p className='text-sm flex items-center gap-2 md:text-base text-gray-800 dark:text-gray-200'>
                    <span><SlLocationPin /></span>{address} </p>
                <p className='text-sm flex items-center gap-2 md:text-base text-gray-800 dark:text-gray-200'>
                <span><FiPhoneCall/></span>{phone}</p>
            </div>
        </div>
        <div className=' p-2'>
           
            <h4 className='text-base text-green-400 font-semibold'>Key Responsibilities</h4>
            <ul className='text-lg list-disc ml-6'>
                <li><span className="font-bold uppercase">education--{'>'}</span> {education}</li>
                <li><span className="font-bold uppercase">experince--{'>'}</span> {experience}</li>
                <li><span className="font-bold uppercase">skills--{'>'}</span>  {skill}</li>
                <li><span className="font-bold uppercase">age--{'>'}</span>  {age}</li>

            </ul>
        </div>
    </div>
</div>

    </div>
  );
};

export default GuideDetails;
