import React from 'react'
import { Link } from 'react-router-dom';

export const ServiceCard = ({ service }) => {

  const { title, image, price, duration , id } = service;

  return (
    <div className="card   bg-[#212122] shadow-xl">
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
