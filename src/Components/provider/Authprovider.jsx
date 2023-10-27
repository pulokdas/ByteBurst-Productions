import React, { createContext, useEffect, useState } from 'react'
import auth from '../../Firebase/firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";



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
       return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut =()=>{
      return signOut(auth);
      setloading(true);
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



