import { createContext,  useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import axios from "axios";


const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser =(email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const updateUserProfile=(name, image)=>{
     return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }
    

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign in google 
 
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    } 
    // sign in with github
    const signInWithGitHub=()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    // logout or signout
    const logOut = ()=>{
        setLoading(true)
         signOut(auth)
        .then(()=>console.log('sign out succesfully'))
        .catch(error=>console.error(error))
    }

    // save a user in mongodb
    // const saveUser = async user =>{
    //     const currentUser = {
    //       email: user?.email,
    //       name: user?.displayName,
    //       role: 'user',
    //       status: 'In Review'
    //     }
    //     const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/user`, currentUser)
    //     return data
    //   }
    
    // observe auth state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('onchanged auth provider in side use effect',currentUser)
            if(currentUser){
                // get token and store client
                const userInfo = {email: currentUser.email}
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, userInfo)
                .then(res =>{
                    setLoading(false)
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else{
                // ToDo: remove token (if token stored in the client side Local storage, caching , in memory)
                localStorage.removeItem('access-token')
                setLoading(false)
            }

        });
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {user, createUser, signInUser, logOut, loading ,signInWithGoogle,signInWithGitHub, updateUserProfile, setUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;