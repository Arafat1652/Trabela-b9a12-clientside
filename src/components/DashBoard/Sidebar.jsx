import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'

import { AiOutlineBars } from 'react-icons/ai'
import { BsFillHouseAddFill, BsGraphUp } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MdHomeWork } from 'react-icons/md'
import useAuth from '../../Hooks/useAuth'
import logo from '../../assets/logo.png'
import MenuItem from './Menu/MenuItem'
import GuideMenu from './Menu/GuideMenu'
import TouristMenu from './Menu/TouristMenu'
import { CgProfile } from 'react-icons/cg'
import AdminMenu from './Menu/AdminMenu'
import useRole from '../../Hooks/useRole'
import { FaHome } from 'react-icons/fa'

const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)
  const [role, isLoading] = useRole()


  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
            <FaHome size={30}/>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <Link to='/' className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
              
                <FaHome size={30}/>
              
            </Link>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* my profile common*/}
              <MenuItem label='My Profile' address='/dashboard' icon={CgProfile}/>

              {/* Add Room */}
              {role=== 'user' && <TouristMenu/>}
              {role=== 'guide' && <GuideMenu/>}
              {role=== 'admin' && <AdminMenu/>}  

              {/* My Listing */}

            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          
          {/* <button
            onClick={logOut}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button> */}
        </div>
      </div>
    </>
  )
}

export default Sidebar