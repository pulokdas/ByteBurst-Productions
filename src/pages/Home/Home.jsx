import React, { useEffect, useState } from 'react'
import { Hero } from '../../Components/Header/Hero'
import { Services } from '../../Components/Catagories/Services'
import { useLoaderData } from 'react-router-dom'
import Footer from '../../Components/footer/Footer'
import { ToastContainer } from 'react-toastify'
import UpcomingEvents from '../../Components/EventComponents/UpcomingEvents'
import Reviews from '../../Components/Review/Reviews'


export const Home = () => {
  const data  = useLoaderData();
  const [eventData , setEventData] = useState([]);
  useEffect(()=>{
    fetch('/events.json')
    .then(res=>res.json())
    .then(events=>{
      setEventData(events)
    })
    .catch(error=>console.log(error))
  },[])
  
  return (
  <div className='bg-[#1a1a1b]'>
     <div className='h-screen '>
    <div className=' w-11/12 h-5/6  mx-auto'>
    <Hero/>
    </div>
    <div  className='bg-[#1a1a1b]'>
      <Services  data={data}/>
    </div>
    <div className='bg-[#1a1a1b] pt-16'>
      <div className='w-10/12 mx-auto'><UpcomingEvents eventData={eventData}/></div>
    </div>
    <div className='bg-[#1a1a1b] py-20'>
      <div className='w-10/12 mx-auto'><Reviews/></div>
    </div>
    <Footer/>
    <ToastContainer />
   </div>
  </div>
  )
}
