import React from 'react'
import banner from '../../assets/Banner.jpg'
export const Hero = () => {
  return (
    <div className="hero h-full " style={{backgroundImage: `url(${banner})`}}>
    <div className="hero-overlay bg-black bg-opacity-70"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="">
        <h1 className="mb-5 text-5xl font-bold">Game On. Event Up.</h1>
        <p className="mb-5 max-w-md mx-auto">Your Quest for the Ultimate Gaming Experience Starts Here.</p>
        <button className="btn btn-outline font-extrabold text-[#edac07] border-[#edac07] hover:bg-[#edac07]">Level Up Your Events</button>
      </div>
    </div>
  </div>
  )
}
