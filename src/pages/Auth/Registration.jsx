import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Components/provider/Authprovider';
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, updateProfile } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';
export const Registration = () => {
  const [error, seterror] = useState(null);
  const { createUser  } = useContext(AuthContext);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name);

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    if (!passwordRegex.test(password)) {
      seterror(
        'Password must have at least 6 characters, a capital letter, and a special character.'
      );
      return; // Don't proceed with registration
    }


    createUser(email, password)

      .then(() => {
        toast.success('Registration successful', {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          navigate("/");
        }).catch((error) => {
          seterror(error.message);
        });
      })
      .catch(error => {
        seterror(error.message);

      })

  }

  const handleGoogleSignIn=()=>{
    signInWithPopup(auth, provider)
    .then(() => {
       navigate("/");
      
    }).catch((error) => {
     
    });
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div class="relative flex flex-col rounded-xl bg-transparent bg-clip-border  text-center  shadow-none">
        <h4 class="text-[#edac07] block font-sans text-2xl font-semibold leading-snug tracking-normal  antialiased">
          Sign Up
        </h4>
        <p class="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-100 antialiased">
          Enter your details to register.
        </p>
        <form onSubmit={handleSubmit} class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div class="mb-4 flex flex-col gap-6">
            <div class="relative h-11 w-full min-w-[200px]">
              <input
                class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#edac07] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeHolder=" "
                name='name'
              />
              <label class=" text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#edac07] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#edac07] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#edac07] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Name
              </label>
            </div>
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
          <div class="inline-flex items-center">
            <label
              class="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
              for="checkbox"
              data-ripple-dark="true"
            >
              <input
                type="checkbox"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-[#edac07] checked:before:bg-[#edac07] hover:before:opacity-10"
                id="checkbox"
              />
              <span class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label
              class="mt-px cursor-pointer select-none font-light text-gray-700"
              for="checkbox"
            >
              <p class="flex items-center font-sans text-sm font-normal leading-normal text-gray-400 antialiased">
                I agree the
                <a
                  class="font-medium transition-colors hover:text-[#edac07]"
                  href="#"
                >
                  &nbsp;Terms and Conditions
                </a>
              </p>
            </label>
          </div>
          <button
            class="mt-6 block w-full select-none rounded-lg bg-[#edac07] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#edac07]-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            data-ripple-light="true"
          >
            Register
          </button>
          <button onClick={handleGoogleSignIn} className="btn btn-sm btn-outline w-full mt-3 border-[#edac07] text-[#edac07] hover:bg-[#edac07]">
           <FaGoogle/>
           SignIn With Google
          </button>
          <p class="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-400 antialiased">
            Already have an account?
            <a
              class="font-medium text-[#edac07] transition-colors hover:text-blue-700"
              href="#"
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}
