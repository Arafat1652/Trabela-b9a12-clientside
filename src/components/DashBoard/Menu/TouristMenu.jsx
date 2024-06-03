import { BsBookmarks, BsFillSendPlusFill} from 'react-icons/bs'
import MenuItem from './MenuItem';
import { FaBookOpenReader } from 'react-icons/fa6';

const TouristMenu = () => {
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
  
        <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <BsFillSendPlusFill className='w-5 h-5'  />
  
          <span className='mx-4 font-medium'>Request to Admin</span>
        </div>
      </>
    );
};

export default TouristMenu;