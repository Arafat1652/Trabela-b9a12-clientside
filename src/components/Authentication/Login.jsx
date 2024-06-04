import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Helmet } from "react-helmet-async";
import Nav from "../Nav/Nav";
import useAuth from "../../Hooks/useAuth";
import toast from 'react-hot-toast';
import SocialLogin from "./SocialLogin";


const Login = () => {
    const {signInUser} = useAuth()
    const location = useLocation()
    // console.log(location,'location in the ')
    const navigate = useNavigate()
    const [loginError, setLoginError] = useState('')
    const [successLogin, setSuccessLogin] = useState('')

    const { register,handleSubmit,formState: { errors },} = useForm()
    const onSubmit = (data) => {
      const {email, password} = data

      setLoginError('')
      setSuccessLogin('')
        if(!/@gmail\.com$/.test(email)){
            return toast.error ('give a valid email')
           
        }

      signInUser(email, password)
      .then(result=>{
          console.log(result.user)
          toast.success('Logged in succesfully')
          navigate(location?.state ? location.state : '/')
          
      })
    //   console.log(e,'e')
    //   e.target.reset()

      .catch(error=>{
          console.error(error)
          toast.error(error.code)
      })

    } 
    // const handleGoogleLogIn=()=>{
    //     signInWithGoogle()
    //     .then(result=>{
    //         console.log(result.user)
    //         toast('Logged in succesfully')
    //         navigate(location?.state ? location.state : '/')
            
    //     })
  
    //     .catch(error=>{
    //         toast.error(error.code)
    //     })
    // }

    // const handleGitHubSignIn=()=>{
    //     signInWithGitHub()
    //     .then(result=>{
    //         console.log(result.user)
    //         toast.success('Logged in succesfully')
    //         navigate(location?.state ? location.state : '/')
            
    //     })
  
    //     .catch(error=>{
    //         console.error(error)
    //         toast.error(error.code)
    //     })
    // }

    return (
        
     <div style={{ backgroundImage: `url(${"https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609959468995-0O6J0ZCLAKJYZPGQB4KR/5.jpg"})`}} className="bg-cover bg-center">
        <Helmet>
                <title>Login || Tripadvisor</title>
            </Helmet>
        <Nav></Nav>
        
           <div className="w-full max-w-md my-10 p-8 space-y-3 rounded-xl mx-auto text-gray-100 h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-2xl font-bold text-center ">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">Email</label>
                <input type="text" name="username" id="username" placeholder="Your Email" className="w-full px-4 py-3 rounded-md focus:border-violet-400" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block text-gray-400">Password</label>
                <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-4 py-3 rounded-md focus:border-violet-400" {...register("password", { required: true })}  />
                {errors.password && <span className="text-red-400">This field is required</span>}
                <div className="flex justify-end text-xs text-gray-400">
                    <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                </div>
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-[#13e5c0]">Sign in</button>
        </form>

        <p className="text-green-500">{successLogin}</p>
        <p className="text-red-400">{loginError}</p>

        <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        {/* google Login */}
       <SocialLogin/>
        <p className="text-sm text-center sm:px-6 text-gray-400">Don not have an account?
            <NavLink to='/register' rel="noopener noreferrer" href="#" className="underline text-primary"> Register</NavLink>
        </p>
    </div>
   {/* <Footer></Footer> */}
     </div>
    );
};

export default Login;