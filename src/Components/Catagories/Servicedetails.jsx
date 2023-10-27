import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export const Servicedetails = () => {
    const data = useLoaderData();
    const services = data.services;

    const { id } = useParams();
    const service = services.find(service => service.id == id);
    console.log(service);
    const { title, image, price, description, duration, features } = service;
    return (
        <div className='flex w-11/12 mx-auto gap-10 h-screen items-center'>
            <div className=' w-1/2 h-5/6  mx-auto'>
                <div className='w-auto  h-full'>
                    <img className=' w-auto mx-auto h-full' src={image} alt="" />
                </div>
                </div>
            <div className='w-10/12 mx-auto space-y-7 mb-20'>
                <div className=' text-3xl font-bold text-[#edac07]'>{title}</div>
               <div>
                {description}
               </div>
                
                <div>
                    <h4 className=' text-2xl text-[#edac07] underline'>Features:</h4>
                   <ol>
                   {features.map((feature,index)=><li key={index}>{index+1}. {feature}</li>)}
                   </ol>
                </div>
                <div className=' font-bold   '>
                    <div><span className='text-[#edac07] underline'>Price:</span> {price}</div>
                    <div><span className='text-[#edac07] underline'>duration:</span> {duration}</div>
                </div>
                <button  className="btn btn-sm btn-outline font-extrabold text-[#edac07] border-[#edac07] hover:bg-[#edac07]">Book Now</button>
            </div>
        </div>)
}
