import { Link, useLocation, useNavigate } from "react-router-dom";
import Btn from "./Btn";

const ServicesNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <>
    <h2 className="text-xl font-semibold py-4">Our Services:</h2>
      <ul className='flex flex-col space-y-2'>
        <li onClick={() => navigate('/consultingServices')} className={`group ${location.pathname == '/consultingServices' ? 'bg-pinkish' : 'bg-white'} flex w-full items-center space-x-2 rounded-md p-4  shadow-md transition-all duration-150  ease-in-out hover:scale-105 hover:shadow-lg `}>
          {" "}
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 group-hover:text-green'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </span>
          <Link className='text-zinc-600 hover:text-zinc-800'>It Consulting Services</Link>
        </li>
        <li onClick={() => navigate('/staffRecruit')} className={`group ${location.pathname == '/staffRecruit' ? 'bg-pinkish' : 'bg-white'} flex w-full items-center space-x-2 p-4 shadow-md transition-all  duration-150 ease-in-out hover:scale-105  hover:shadow-lg`}>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 group-hover:text-green'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </span>
          <Link className='text-zinc-600 hover:text-zinc-800'>IT Staff Recruitment</Link>
        </li>
        <li onClick={() => navigate('/staffAugmentation')} className={`group ${location.pathname == '/staffAugmentation' ? 'bg-pinkish' : 'bg-white'} flex w-full items-center space-x-2 p-4  shadow-md transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-lg`}>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 group-hover:text-green'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </span>
          <Link className='text-zinc-600 hover:text-zinc-800'>Staff Augmentation</Link>
        </li>
        <li onClick={() => navigate('/digitalMarketing')} className='group flex w-full items-center space-x-2 p-4  shadow-md transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-lg'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 group-hover:text-green'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </span>
          <Link className='text-zinc-600 hover:text-zinc-800'>Digital Marketing</Link>
        </li>
      </ul>
      <div className='mt-10 space-y-4 bg-greenGradient rounded-md px-5 py-10 text-white'>
        <h4 className='text-xl'>How can we help you</h4>
        <p>
          Our team of skilled, knowledgeable, and professional technicians is ready to assist you
          with the support and services you need.
        </p>
        <Btn text={"CONTACT US"} classes={"bg-white text-black"} />
      </div>
    </>
  );
};

export default ServicesNav;
