import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={AiOutlineAppstoreAdd} label='Add Package' address='add-package' />
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
    </>
  )
}

export default AdminMenu