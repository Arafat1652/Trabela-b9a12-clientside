
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";


const SocialLogin = () => {
    const {signInWithGoogle} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()


    const handleGoogleLogin=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result);
            
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                photo: result.user?.photoURL,
                role: 'user',
                status: 'Verified'
            }
            axios.post(`${import.meta.env.VITE_API_URL}/user`, userInfo)
            .then(res=>{
                console.log(res.data);
                navigate(location?.state ? location.state : '/')
            })
        })
    }

    return (
       
         <div className="flex justify-center space-x-4">
         <button  onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm text-black">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                 <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
             </svg>
         </button>

     </div>
    );
};

export default SocialLogin;
