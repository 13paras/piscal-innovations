import { useState } from "react";
import { Hero1, Hero2, Hero3, Hero4 } from "../assets";
import { heroBtns } from "../constants/data";
import Wrapper from "./Wrapper";
import Btn from "./Btn";

const heroData = [
  {
    id: 0,
    title: "The Powerhouse of IT Services & Solutions",
    paragraph: "The quality of our work reflects the quality of our people.",
  },
  {
    id: 1,
    title: "Advance Technology Consulting",
    paragraph:
      "Our mission is to bring value to our employees, our stakeholders, and to the business community by delivering advanced technology consulting solutions",
  },
  {
    id: 2,
    title: "Experience is Everything",
    paragraph:
      "We match the job seekers and the employers in the fields of IT, accounting, finance, healthcare and many more.",
  },
  {
    id: 3,
    title: "Client-first Mindset",
    paragraph:
      "We are customer-focused and exhibit customer centricity in our processes, behavior, and attitude.",
  },
];

const Hero = () => {
  const [showImageNum, setShowImageNum] = useState(0);
  const [showNext, setShowNext] = useState(0);
  const images = [Hero1, Hero2, Hero3, Hero4];

  const next = () => {
    if (showImageNum < heroData.length) {
      setShowImageNum(prev => prev + 1);
    }
    if (showImageNum > heroData.length) {
      setShowImageNum(0);
    }
  };
  return (
    <div>
      {/* <img src={images[0]} alt='' className='h-[699px] w-full object-cover' /> */}
      <div className='relative h-[400px] w-full lg:h-screen'>
        <img src={images[showImageNum]} alt='' className='absolute h-full w-full object-cover' />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{ color: "white" }}
            className='mt-[50px]  flex flex-col space-y-4 pl-6 sm:mt-[100px] sm:pl-32 lg:mt-[18%] lg:pl-52'
          >
            <h3 className='text-3xl font-medium text-white lg:text-6xl'>
              The Powerhouse of{" "}
              <span className='block font-semibold text-yellow-600'>IT Services & Solutions</span>{" "}
            </h3>
            <p>The quality of our work reflects the quality of our people</p>
            <div className='space-x-4'>
              <Btn
                text={"READ MORE"}
                classes={"bg-green text-white font-semibold lg:py-6 lg:w-[200px]"}
              />
              <Btn
                text={"CONTACT US"}
                classes={"bg-white text-zinc-800 font-semibold lg:py-6 lg:w-[200px]"}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Wrapper>
          <ul className='mx-auto flex items-center '>
            {heroBtns.map((detail, index) => (
              <button
                key={index}
                className={`group hidden w-full items-center space-x-3 bg-green text-white  
                     transition-all ease-in-out hover:bg-white hover:text-green sm:h-36
                 md:flex lg:h-full lg:px-8 lg:py-12`}
              >
                <p className='hidden rounded-full bg-white px-3 py-1 text-xl text-green group-hover:bg-green group-hover:text-white lg:block'>
                  {" "}
                  {index + 1}{" "}
                </p>
                <div className='text-start leading-tight sm:leading-none'>
                  <h3 className=' text-sm font-bold sm:text-xl'>{detail.title}</h3>
                  <span className=' w-[30%] text-xs sm:text-base'>{detail.tagLine}</span>
                </div>
              </button>
            ))}
          </ul>
        </Wrapper>
        <div className='h-0.5 w-full bg-gray-600'></div>
      </div>
    </div>
  );
};

export default Hero;
