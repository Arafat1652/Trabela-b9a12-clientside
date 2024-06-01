import { NavLink, useNavigate } from "react-router-dom";
import {  useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import toast from 'react-hot-toast';


import { Helmet } from "react-helmet-async";
import Nav from "../Nav/Nav";
import useAuth from "../../Hooks/useAuth";



const Register = () => {
    const {createUser, updateUserProfile} = useAuth()
    const navigate = useNavigate()
    
    const [regError, setRegError] = useState('')
    const [successReg, setSuccessReg] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    
    const { register,handleSubmit,formState: { errors },} = useForm()
      const onSubmit = (data) => {
        const {email, password,image, fullName} = data

        setRegError('')
        setSuccessReg('')
        if(!/@gmail\.com$/.test(email)){
            // setRegError('give a valid email')
            
            return toast.error('give a valid email')
        }
       else if(password.length<6){
            return toast.error('password must be 6 character or longer')
           
        }
        else if(!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)){
            return toast.error('password must have at least one uppercase and one lower case character')
           
        }
      

        createUser(email, password)
        .then(()=>{
           
            toast.success('Your Registration Succesfull')
            updateUserProfile(fullName, image)
            .then(()=>{
                navigate('/')
            })
        })
        .catch(error=>{
            console.error(error)
            toast.error(error.code)
        })
      } 

    return (
        <div style={{ backgroundImage: `url(${"https://img.reintech.io/variants/mg3azhsybzws9pq5qmtj6a7rvm6s/e7b4ce09c703210ab8f75b017c7eaf0951c5a95b737ee8120602845c1c1d944b"})`}} className="bg-cover bg-center">
            <Helmet>
                <title>Register || ARTISAN</title>
            </Helmet>
            <Nav></Nav>
           <div className="w-full max-w-md my-10 p-8 space-y-3 rounded-xl mx-auto text-gray-100 h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h1 className="text-2xl font-bold text-center text-gray-700">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">Name</label>
                <input type="text" name="username" id="username" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-gray-700 text-black focus:border-violet-400" {...register("fullName", { required: true })}  />
                {errors.fullName && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">Email</label>
                <input type="email" name="username" id="username" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" {...register("email", { required: true })} />
                {errors.email && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block text-gray-400">Photo URL</label>
                <input type="text" name="username" id="username" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-700 text-black focus:border-violet-400" {...register("image", { required: true })}/>
                {errors.image && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="space-y-1 text-sm relative">
                <label htmlFor="password" className="block text-gray-400">Password</label>
                <input type={showPassword? 'password': 'text'} name="password" id="password" placeholder="Your Password" className="w-full px-4 py-3 rounded-md border-gray-700  text-black focus:border-violet-400" {...register("password", { required: true })} />
                {errors.password && <span className="text-red-400">This field is required</span>}

                <span className="absolute top-9 right-4 text-black" onClick={()=> setShowPassword(!showPassword)}>{showPassword? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> }</span>
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-[#13e5c0]">Register</button>
        </form>

        <p className="text-green-500">{successReg}</p>
        <p className="text-red-400">{regError}</p>

        <p className="text-sm text-center sm:px-6 text-gray-400">Already have an account?
            <NavLink to='/login' rel="noopener noreferrer" href="#" className="underline text-primary"> Login</NavLink>
        </p>
    </div>
    {/* <Footer></Footer> */}
     </div>
    );
};

export default Register;