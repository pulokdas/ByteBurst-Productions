import React, { createContext, useEffect, useState } from 'react'
import auth from '../../Firebase/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';



export const AuthContext = createContext(null);
export  const Authprovider = ({children}) => {
    const [user, setuser]= useState(null); 
    const [loading , setloading] = useState(true);
    
    
  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setuser(currentUser);
      setloading(false);
      
    });
    return ()=>{
      unSubscribe();
    }
  },[])
  console.log(user);
    const createUser =(email, password)=>{
      setloading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignInUser =(email, password)=>{
        setloading(true)
        toast.success('Login successful', {
          position: 'bottom-right',
          autoClose: 2000, // Close the toast after 2 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
       return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
      setloading(true);
      return signOut(auth);
    }
    
    const Authinfo ={
      user,
      loading,
      createUser,     
      SignInUser,
      logOut
    }
  return (
    <AuthContext.Provider  value={Authinfo} >
      
        {children}
      
    </AuthContext.Provider>
  )
}



