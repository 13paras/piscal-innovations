import { useEffect, useState } from "react";
import { Hero1, Hero3, WhoAreV } from "../assets";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselInfo } from "../constants/data";
import Slider from "react-slick";
import Wrapper from "./Wrapper";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed:2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: "linear",
    beforeChange: (current, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <div className='my-32'>
        <Slider {...settings}>
          {carouselInfo.map((details, index) => (
            <div
              key={details.id}
              className={` cursor-pointer items-center  ${
                index % 2 === 0 ? "flex-col" : "flex-col-reverse"
              }`}
            >
              <img
                src={details.img}
                alt={details.title}
                className='mx-auto w-[70%]  rounded-lg lg:w-[70%]'
              />
              <div className='space-y-5 pt-6 text-center'>
                <h4 className='text-3xl font-semibold'>{details.title}</h4>
                <p className='mx-auto w-[70%] text-zinc-700 lg:w-[70%]'>{details.body}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default Carousel;
