import { BsBookmarks, BsFillSendPlusFill} from 'react-icons/bs'
import MenuItem from './MenuItem';
import { FaBookOpenReader } from 'react-icons/fa6';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';

const TouristMenu = () => {
  const {user} = useAuth()

  const {
    data: check = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["check-requested", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/check-requested/${user?.email}`);
      return data;
    },
  });
  console.log(check);


  const handleRequest=()=>{
    // console.log('hello request');

    const currentUser = {
      email: user?.email,
      status: 'Requested',
    }
     axios.put(`${import.meta.env.VITE_API_URL}/userStatus/${user?.email}`, currentUser)
     .then(res=>{
      if(res.data.modifiedCount > 0){

        toast.success('Success! Please wait for admin confirmation')
        refetch()
      } else {
        toast.success('Please!, Wait for admin approval👊')
      }
     })
     .catch(err=>{
      console.log(err)
      toast.error(err.message)
     })
     
    }

    if(isLoading){
      <LoadingSpinner/>
    }
      
    
    return (
        <>
        <MenuItem
          icon={FaBookOpenReader}
          label='My Bookings'
          address='my-bookings'
        />
        <MenuItem
          icon={BsBookmarks}
          label='My Wishlist'
          address='my-wishlist'
        />
  
        <button onClick={handleRequest}  className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <BsFillSendPlusFill className='w-5 h-5'  />

          {
            check?.status === "Requested" ?  <span className='mx-4 font-medium'>Requested</span> : <span className='mx-4 font-medium'>Request to Admin</span>
          }
  
          
        </button>
      </>
    );
};

export default TouristMenu;