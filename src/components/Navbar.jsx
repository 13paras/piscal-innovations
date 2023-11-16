import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../assets";
import { Link } from "react-scroll";
import Wrapper from "./Wrapper";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleMenuClick = () => {
    setShow(!show);
  };

  return (
    <header className='bg-[#f9fafb] '>
        <div className='relative flex items-center  justify-between py-3 lg:container lg:mx-auto'>
          <img
            onClick={() => navigate("/")}
            className='w-12 sm:w-16 lg:w-20 ml-4 lg:ml-0 cursor-pointer rounded-full transition-all duration-150 ease-in-out active:scale-95'
            src={logo}
            alt=''
          />

          {/* MObile menu icon */}
          <div
            onClick={() => setShow(!show)}
            className='mr-3 cursor-pointer space-y-1 transition-all duration-200 ease-in-out md:hidden'
          >
            <span
              className={`block h-[2px] w-6 rounded-full bg-black transition-all duration-200 ease-in-out ${
                show ? "translate-y-2 rotate-[50deg]" : "translate-y-0 rotate-0"
              } `}
            ></span>
            <span
              className={`block h-[2px] w-6 rounded-full bg-black transition-all duration-200 ease-in-out ${
                show ? "opacity-0" : "opacity-100"
              } `}
            ></span>
            <span
              className={`block h-[2px] w-6 rounded-full bg-black transition-all duration-200 ease-in-out ${
                show ? "-translate-y-1 -rotate-[50deg]" : " translate-y-0 rotate-0"
              } `}
            ></span>
          </div>

          {/* Nav Links */}
          <nav
            onClick={handleMenuClick}
            className={`absolute z-50 mr-4 w-full flex items-center space-y-6 py-12 text-center text-lg text-zinc-800 transition-all duration-500 ease-in-out md:static md:h-auto md:w-auto md:translate-x-0 md:flex-row md:space-x-5 md:space-y-0 md:bg-transparent md:py-0 md:text-left lg:justify-between ${
              show
                ? "top-16 h-screen w-full translate-x-0 flex-col bg-white"
                : "top-16 h-screen w-full -translate-x-full flex-col bg-white"
            }  `}
          >
            <Link
              onClick={() => navigate("/")}
              spy={true}
              smooth={true}
              offset={-20}
              duration={300}
              className='UnderLine cursor-pointer hover:text-[#09a223]'
            >
              {" "}
              Home{" "}
            </Link>
            <Link
              to='aboutUs'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              href=''
              className='UnderLine cursor-pointer hover:text-[#09a223]'
            >
              ABOUT US
            </Link>
            <li className='relative flex items-center space-x-2'>
              <p className='peer cursor-pointer'>SERVICES </p>
              <svg
                className='ml-2 h-3 w-3 text-gray-800'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 16 10'
              >
                <path d='M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z' />
              </svg>{" "}
              <ul className='absolute -left-20 top-6 z-10 hidden w-[240px] bg-white text-start  text-base text-black drop-shadow-lg transition-all duration-100 ease-in-out  hover:block peer-hover:block'>
                <li
                  onClick={() => navigate("/consultingServices")}
                  className='mt-5 w-full cursor-pointer px-4 py-3 transition-all duration-150 ease-in-out hover:bg-green hover:text-white'
                >
                  IT Consulting Services
                </li>
                <li
                  onClick={() => navigate("/staffRecruit")}
                  className='w-full cursor-pointer px-4 py-3 transition-all duration-150 ease-in-out hover:bg-green hover:text-white'
                >
                  IT Staff Recruiting
                </li>
                <li
                  onClick={() => navigate("/staffAugmentation")}
                  className='w-full cursor-pointer px-4 py-3 transition-all duration-150 ease-in-out hover:bg-green hover:text-white'
                >
                  Staff Augmentation
                </li>
                <li
                  onClick={() => navigate("/digitalMarketing")}
                  className='w-full cursor-pointer px-4 py-3 transition-all duration-150 ease-in-out hover:bg-green hover:text-white'
                >
                  Digital Marketing
                </li>
              </ul>{" "}
            </li>
            <li
              onClick={() => navigate("/clients")}
              className='UnderLine cursor-pointer hover:text-[#09a223]'
            >
              CLIENTS
            </li>
            <li
              onClick={() => navigate("/contactUs")}
              className='UnderLine cursor-pointer hover:text-[#09a223]'
            >
              CONTACT US
            </li>
          </nav>
        </div>
    </header>
  );
};

export default Navbar;
