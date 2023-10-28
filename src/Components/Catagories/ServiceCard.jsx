import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const ServiceCard = ({ service }) => {

  const { title, image, price, duration , id } = service;
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
       // Whether animations should only happen once while scrolling down
    });// Initialize AOS in your component if you didn't do it in the main application file
  }, []);
  return (
    <div  data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500" className="card   bg-[#212122] shadow-xl">
      <figure className='bg-black h-48 '><img className='h-full w-full ' src={`${image}`} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className=" card-title text-2xl text-[#edac07] ">{title}</h2>
        <div className=''>
          <p className='opacity-80 text-sm'><span className='font-bold'>Duration:</span> {duration}</p>
          <p className='opacity-80 text-sm'><span className='font-bold '>Price:</span> {price}</p>
        </div>
        <div className="card-actions ">
          <Link to={`services/${id}`}>
            <button className="btn w-full btn-sm btn-outline font-extrabold text-[#edac07] border-[#edac07] hover:bg-[#edac07]">View Details</button>

          </Link>
        </div>
      </div>
    </div>
  )
}
