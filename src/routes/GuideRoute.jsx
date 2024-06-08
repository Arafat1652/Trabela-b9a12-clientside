import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import useRole from "../Hooks/useRole";


const GuideRoute = ({children}) => {
    const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'guide') return children
  return <Navigate to='/dashboard' />
};

export default GuideRoute;