import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Components/provider/Authprovider';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export const Login = () => {
  const [error , seterror]= useState(null);
  const {SignInUser} = useContext( AuthContext );
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name);
    SignInUser(email, password)
      .then(()=>{
        
        
           
          
            navigate('/');
          
        
      })
      .catch( error=>{
        seterror(error.message);
        
      }   )

  }
  return (
    <div>

    <div className='flex justify-center items-center h-screen'>
      <div class="relative flex flex-col rounded-xl bg-transparent bg-clip-border  text-center  shadow-none">
  <h4 class="text-[#edac07] block font-sans text-2xl font-semibold leading-snug tracking-normal  antialiased">
    LOG IN
  </h4>
  
  <form onSubmit={handleSubmit} class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
    <div class="mb-4 flex flex-col gap-6">
      
      <div class="relative h-11 w-full min-w-[200px]">
        <input
          class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#edac07] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeHolder=" "
          name='email'
        />
        <label class="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#edac07] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#edac07] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#edac07] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Email
        </label>
      </div>
      <div class="relative h-11 w-full min-w-[200px]">
        <input
          type="password"
          class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#edac07] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeHolder=" "
          name='password'
        />
        <label class="text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#edac07] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#edac07] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#edac07] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Password
        </label>
      </div>
      {
        error && <p className=' text-sm text-red-600 text-start'> {error}</p>
      }
    </div>
    
    <button
      class="mt-6 block w-full select-none rounded-lg bg-[#edac07] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#edac07]-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="submit"
      data-ripple-light="true"
    >
      LOG IN
    </button>
    <p class="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-400 antialiased">
      Don't have an account?
      <a
        class="font-medium text-[#edac07] transition-colors hover:text-blue-700"
        href="#"
      >
        Register
      </a>
    </p>
  </form>
</div>

    </div>
  
    </div>
    
  )
}
