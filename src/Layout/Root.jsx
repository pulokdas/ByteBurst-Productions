import { Outlet } from "react-router-dom"
import { Navbar } from "../Components/Header/Navbar"
import { ToastContainer } from "react-toastify"
import Footer from "../Components/footer/Footer"



export const Root = () => {
  return (
  
     <div className="font-Orbitron relative text-white bg-[#1a1a1b] ">
     <div><Navbar />
     
     <Outlet/></div>
   
   </div>
  
  )
}
