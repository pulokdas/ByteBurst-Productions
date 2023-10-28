import { Link } from "react-router-dom";
import { ServiceCard } from "./ServiceCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const Services = ({data}) => {
    const {services} = data;
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
         // Whether animations should only happen once while scrolling down
      });// Initialize AOS in your component if you didn't do it in the main application file
    }, []);
  return (
    <div data-aos="zoom-in" className="" >
      <h1 data-aos="fade-up" className="text-4xl text-center mt-5 mb-4 ">Our Services</h1>
      <div className=" w-2/3 mx-auto  rounded-lg">
      <div className=" py-6 grid  grid-cols-3 gap-6 w-11/12 mx-auto  ">
      {
        services.slice(3, 9).map(service=> <ServiceCard service={service} />)
      }
    </div>
    <div  className="card-actions justify-center">
<Link to='/services'>
<button  className="btn  mb-4 bg-[#edac07] font-extrabold text-white border-[#edac07] hover:bg-[#edac07] hover:border-[#edac07]">More Services</button>
</Link>
    </div>
    
      </div>
    </div>
  )
}
