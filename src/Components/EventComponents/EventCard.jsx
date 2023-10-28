import React, { useEffect } from 'react'
import { MdOutlineDoneAll } from 'react-icons/md';
import { GiSandsOfTime } from 'react-icons/gi';
import { TfiReload } from 'react-icons/tfi';
import { SlLocationPin } from 'react-icons/sl';
import { SlCalender } from 'react-icons/sl';
import { BiTimeFive } from 'react-icons/bi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventCard = (event) => {
    const {    id, type, title, date, time, location, description, image, isDone , isRunning} = event.event;
    console.log(image);
    let buttonBgClass = '';
  let buttonText = '';
   
  if (isDone) {
    buttonBgClass = 'bg-green-600';
    buttonText = 'Finished';
    
  } else if (isRunning) {
    buttonBgClass = 'bg-orange-600';
    buttonText = 'Running';
  } else {
    buttonBgClass = 'bg-blue-600';
    buttonText = 'Upcoming';
  }
  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration in milliseconds
       // Whether animations should only happen once while scrolling down
    });// Initialize AOS in your component if you didn't do it in the main application file
  }, []);
  return (
    <div data-aos="zoom-in" className="card  md:card-side bg-[#212122] shadow-xl">
    <div className= 'w-2/5 h-full'><img className='h-full' src={`${image}`} alt="Album"/></div>
    <div className="card-body">
      <h2 className="card-title text-[#edac07]">{title}</h2>
      
      <div>
        <p className='flex items-center gap-2'><span className='text-[#edac07]'><SlLocationPin/></span>{location}</p>
        <p className='flex items-center gap-2'><span className='text-[#edac07]'><SlCalender/></span>{date}</p>
        <p className='flex items-center gap-2'><span className='text-[#edac07]'><BiTimeFive/></span>{time}</p>
      </div>
      <div className="card-actions justify-end">
        <button className="btn btn-sm btn-outline text-[#edac07]">Details</button>
       
      </div>
    </div>
        <div className={` absolute bottom-0 flex items-center gap-1 btn-sm border-none text-white  ${buttonBgClass}`}><span className='text-2xl'>{buttonText==='Finished'? <MdOutlineDoneAll/>:<p></p>} {buttonText==='Upcoming'? <GiSandsOfTime/>:<p></p>} {buttonText==='Running'? <TfiReload/>:<p></p>}</span>{buttonText}</div>
  </div>
  )
}

export default EventCard