import MenuItem from './MenuItem';
import { FaListCheck } from 'react-icons/fa6';

const GuideMenu = () => {
    return (
        <>

        <MenuItem icon={FaListCheck } label='My Assigned Tours' address='my-assignTour' />

      </>
    );
};

export default GuideMenu;