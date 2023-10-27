import React, { useContext } from 'react'
import { AuthContext } from '../Components/provider/Authprovider'
import { Navigate } from 'react-router-dom';

const Privaterout = ({children}) => {
    const {user , loading}= useContext(AuthContext);
if(loading){
    return <div className='h-screen flex justify-center items-center'><div  className="loading loading-spinner loading-xs "></div></div>
}
if(user){
    return children;
}
  return <Navigate to="/login" > </Navigate>
}

export default Privaterout