import React from 'react';
import '@/styles/hero.css';
import { heroContent } from '@/data/hero';
import { IoMdPlay } from "react-icons/io";

const HeroSection = () => {
  return (

<div className="relative hero mt-6 md:mt-12 px-4 md:px-16 flex flex-col md:flex-row  md:items-center w-[100%]">
  <div
    className="absolute bg-[#FFF1DA] hidden md:block"
    style={{
      width: "600px",
      height: "400px",
      top: "100px",
      left: "800px",
      transform: "skew(-20deg, -10deg)",
      borderRadius: "30px",
      zIndex: -1,
    }}
  ></div>
  <div className="w-[100%] flex justify-center md:w-1/2 flex-col gap-5">
    <h3 className="text-[#DF6951] font-bold text-lg md:text-xl uppercase">{heroContent.label}</h3>
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[85px] font-bold font-volkhov text-[#181E4B]">
      {heroContent.heading}
    </h1>
    <p className="text-[#5E6282] text-md sm:text-md mt-4 md:mt-8">{heroContent.description}</p>

    <div className="flex items-center gap-4 mt-6 md:mt-10 flex-wrap">
      <button className="bg-[#F1A501] hover:bg-[#E09501] text-white text-base sm:text-lg px-6 py-3 rounded-2xl transition-colors duration-300 shadow-lg">
        Find out more
      </button>
      <div className="flex items-center gap-3">
        <button className="w-12 h-12 bg-[#DF6951] rounded-full flex items-center justify-center shadow-xl">
          <IoMdPlay className="text-white text-lg" />
        </button>
        <p className="text-[#5E6282] text-md sm:text-md">Play Demo</p>
      </div>
    </div>
  </div>

</div>
  )
}

export default HeroSection;
