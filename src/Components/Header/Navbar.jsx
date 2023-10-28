import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/Authprovider';
import { BiSolidUserCircle , BiMenu, BiX } from 'react-icons/bi';

export const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch();
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="mx-auto w-full rounded-xl border border-[#181818]/80 bg-opacity-80 py-2 px-4 shadow-xl backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4 text-white bg-[#222224]">
      <div className="w-11/12 mx-auto">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="mr-4 lg:block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit hidden">
            <span>ByteBurst Productions</span>
          </Link>
          <button
            className="lg:hidden block text-[#edac07] font-bold text-lg focus:outline-none"
            onClick={toggleNav}
          >
            {isNavOpen ? <BiX size={24} /> : <BiMenu size={24} />}
          </button>
          <ul className={`lg:flex lg:flex-row items-center gap-6 ${isNavOpen ? 'flex flex-col' : 'hidden'}`}>
            <li className="p-1 font-sans text-sm font-normal leading-normal text-inherit">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'text-[#edac07]' : ''
                }
              >
                HOME
              </NavLink>
            </li>
            <li className="p-1 font-sans text-sm font-normal leading-normal text-inherit">
              <NavLink
                to="/Services"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'text-[#edac07]' : ''
                }
              >
                SERVICES
              </NavLink>
            </li>
            <li className="p-1 font-sans text-sm font-normal leading-normal text-inherit">
              <NavLink
                to="/events"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'text-[#edac07]' : ''
                }
              >
                EVENTS
              </NavLink>
            </li>
            <li className="p-1 font-sans text-sm font-normal leading-normal text-inherit">
              <NavLink
                to="/aboutUs"
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'text-[#edac07]' : ''
                }
              >
                ABOUT US
              </NavLink>
            </li>
            
            {user ? (
            <div className="flex gap-2">
              
              <button
                onClick={handleSignOut}
                className="btn btn-sm btn-outline font-extrabold text-[#edac07] border-[#edac07] hover:bg-[#edac07] lg:hidden"
              >
                SIGN Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <button
                  className="lg:hidden middle none center   rounded-lg bg-[#edac07]  py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-golden-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <span>LOG IN</span>
                </button>
              </Link>
              <Link to="/registration">
                <button className=" lg:hidden btn btn-sm btn-outline font-extrabold text-[#edac07] border-[#edac07] hover:bg-[#edac07]">
                  SIGN UP
                </button>
              </Link>
            </div>
          )}
            
          </ul>
          {user ? (
            <div className="flex gap-2">
              <span className="flex gap-1 items-center">
                <span className="text-3xl bg-[#edac07] rounded-3xl">
                  <BiSolidUserCircle />
                </span>{' '}
                {user.displayName}
              </span>
              <button
                onClick={handleSignOut}
                className="hidden btn btn-sm btn-outline font-extrabold text-[#edac07] border-[#edac07] hover:bg-[#edac07] lg:block"
              >
                SIGN Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <button
                  className=" hidden lg:block middle none center   rounded-lg bg-[#edac07]  py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-golden-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  <span>LOG IN</span>
                </button>
              </Link>
              <Link to="/registration">
                <button className="hidden lg:block btn btn-sm btn-outline font-extrabold text-[#edac07] border-[#edac07] hover:bg-[#edac07]">
                  SIGN UP
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
