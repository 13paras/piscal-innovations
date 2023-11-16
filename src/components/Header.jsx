import { Link } from "react-scroll";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Wrapper from "./Wrapper";
import { useState } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
      <div className=' bg-pinkish'>
        

    <div className="mx-auto flex flex-col justify-between py-3 lg:flex-row lg:items-center">
      <h1
        onClick={() => navigate("/")}
        className='mx-auto bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-2xl font-extrabold text-transparent'
      >
        Piscal Innovations
      </h1>
      <nav className='mx-6 flex w-full list-none flex-wrap items-center justify-between space-x-5 py-6 text-xl lg:mx-0 lg:py-3'>
        <li
          onClick={() => navigate("/")}
          className='UnderLine cursor-pointer hover:text-[#09a223] '
        >
          HOME
        </li>
        <li className='UnderLine cursor-pointer hover:text-[#09a223]'>
          <Link
            to='aboutUs'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            href=''
            className=''
          >
            ABOUT US
          </Link>
        </li>
        <li className='relative flex items-center space-x-2'>
          <p className='peer cursor-pointer'>SERVICES </p>
          <svg
            className='ml-2 mt-1 h-3 w-3 text-gray-800'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 16 10'
          >
            <path d='M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z' />
          </svg>{" "}
          <ul className='absolute -left-full top-6 z-10 hidden w-full bg-white text-center text-base text-black drop-shadow-lg transition-all duration-100 ease-in-out  hover:block peer-hover:block'>
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
          onClick={() => navigate("/itConsulting")}
          className='UnderLine cursor-pointer hover:text-[#09a223]'
        >
          IT CONSULTING
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
    </div>
  );
};

export default Header;
