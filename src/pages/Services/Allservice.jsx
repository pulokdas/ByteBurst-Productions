import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { ServiceCard } from '../../Components/Catagories/ServiceCard';
import Footer from '../../Components/footer/Footer';

export const Allservice = () => {
    const data  = useLoaderData();
    const {services} = data;
  return (
    <div>
        <div className=" py-6 grid  grid-cols-4 gap-6 w-10/12 mx-auto  ">
      {
        services.map(service=> <ServiceCard service={service} />)
      }
    </div>
    <Footer/>
    </div>
  )
}
