import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../provider/Authprovider'
import { BiSolidUserCircle } from 'react-icons/bi';
export const Navbar = () => {
    const {user , logOut} = useContext(AuthContext);
    const handleSignOut=()=>{
        logOut()
        .then()
        .catch()
    }
    return (
        <nav className="mx-auto  w-full  rounded-xl border border-[#181818]/80  bg-opacity-80 py-2 px-4  shadow-xl backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4  text-white bg-[#222224]">
            <div className='w-11/12 mx-auto'>
                <div className="container mx-auto flex items-center justify-between ">
                    <NavLink to="/" className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit ">
                        <span>ByteBurst Productions</span>
                    </NavLink>
                    <ul className=" items-center gap-6 flex">
                        <li className=" p-1 font-sans text-sm font-normal leading-normal text-inherit ">
                            <NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-[#edac07]" : ""
                            }>
                                HOME
                            </NavLink>
                        </li>
                        <li className=" p-1 font-sans text-sm font-normal leading-normal text-inherit ">
                            <NavLink to="/Services" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-[#edac07]" : ""
                            }>
                                SERVICES
                            </NavLink>
                        </li>
                        <li className=" p-1 font-sans text-sm font-normal leading-normal text-inherit ">
                            <NavLink to="/blocks" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-[#edac07]" : ""
                            }>
                                ABOUT US
                            </NavLink>
                        </li>
                        <li className=" p-1 font-sans text-sm font-normal leading-normal text-inherit ">
                            <NavLink to="/Events" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-[#edac07]" : ""
                            }>
                                EVENTS
                            </NavLink>
                        </li>
                    </ul>
                    {
                        user ?   <div className='flex gap-2'>
                        <span className='flex gap-1 items-center'> <span className='text-3xl bg-[#edac07] rounded-3xl'><BiSolidUserCircle/></span> {user.displayName
}</span>
                        <button onClick={handleSignOut} className="btn btn-sm btn-outline font-extrabold text-[#edac07] border-[#edac07] hover:bg-[#edac07]">SIGN Out</button>
                      </div>
                    :
                  <div className='flex gap-2'>
                  <Link to='/login'>
                    <button
                        className="middle none center   rounded-lg bg-[#edac07]  py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-golden-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                        type="button"

                    >
                        <span>LOG IN</span>
                    </button>
                    </Link>
                    <Link to='/registration'>
                    <button className="btn btn-sm btn-outline font-extrabold text-[#edac07] border-[#edac07] hover:bg-[#edac07]">SIGN UP</button>
                    </Link>

                  </div>
                    }
                </div>

            </div>
        </nav>
    )
}
