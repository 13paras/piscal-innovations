import React from "react";
import { blurry } from "../assets";
import Wrapper from "./Wrapper";

const Insights = () => {
  return (
    <div className='mx-auto my-32'>
      <Wrapper>
        <section className='body-font rounded-lg bg-opacity-80 border-zinc-200 border bg-orange-50 text-gray-600 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:w-[75%] lg:mx-auto'>
          <div className='container mx-auto flex flex-wrap px-5 py-5 shadow-2xl '>
            <div className='-mx-4 mb-auto mt-auto flex flex-wrap content-start sm:w-2/3 sm:pr-10 lg:w-1/2'>
              <div className='mb-6 w-full px-4 sm:p-4'>
                <h3 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
                  We provide expert solutions
                </h3>
                <div className='leading-relaxed'>
                  We may surprise you with our understanding and insights into your needs.
                </div>
              </div>
              <div className='w-1/2 p-4 '>
                <h2 className='title-font text-5xl font-extrabold text-green'>500</h2>
                <p className='leading-relaxed'>Consultants Places</p>
              </div>
              <div className='w-1/2 p-4 sm:w-1/2 lg:w-1/4'>
                <h2 className='title-font text-5xl font-extrabold text-green'>2</h2>
                <p className='leading-relaxed'>Locations</p>
              </div>
              <div className='w-1/2 p-4 sm:w-1/2 lg:w-1/4'>
                <h2 className='title-font text-5xl font-extrabold text-green'>100</h2>
                <p className='leading-relaxed'>Projects Delivered</p>
              </div>
              <div className='w-1/2 p-4 sm:w-1/2 lg:w-1/4'>
                <h2 className='title-font text-5xl font-extrabold text-green'>114</h2>
                <p className='leading-relaxed'>Happy Customers</p>
              </div>
            </div>
            <div className='mt-6 w-full overflow-hidden rounded-lg sm:mt-0 sm:w-1/3 lg:w-1/2'>
              <img className='h-full w-full object-cover object-center' src={blurry} alt='stats' />
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  );
};

export default Insights;
