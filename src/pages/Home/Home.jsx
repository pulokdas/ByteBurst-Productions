import React from 'react'
import { Hero } from '../../Components/Header/Hero'
import { Services } from '../../Components/Catagories/Services'
import { useLoaderData } from 'react-router-dom'
import Footer from '../../Components/footer/Footer'
import { ToastContainer } from 'react-toastify'


export const Home = () => {
  const data  = useLoaderData();
  return (
   <div className='h-screen'>
    <div className=' w-11/12 h-5/6  mx-auto'>
    <Hero/>
    </div>
    <div  className='bg-[#1a1a1b]'>
      <Services  data={data}/>
    </div>
    <Footer/>
    <ToastContainer />
   </div>
  )
}
