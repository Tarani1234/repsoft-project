import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col  justify-center items-center w-full px-4 mt-20  ">
        <h1 className="lg:text-6xl sm:text-4xl sm:font-bold text-5xl md:text-4xl text-center font-extrabold md:mt-5 text-white uppercase  ">
          Evolve <span className="text-red-600">Your Gaming</span> Experience
        </h1>
        <p className="text-lg sm:text-sm md:text-xl text-[rgba(255,255,255,1)] mt-5 text-center sm:max-w-xl sm:cursor-pointer">
          Play With Friends Or Compete Against Rivals From <br /> Around The
          World
        </p>
        <button className="w-75 h-16 bg-white text-[rgba(250,36,90,1)] rounded-[10px] text-[16px] mt-10">
          JOIN NOW
        </button>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-4 lg:gap-15 mt-10 lg:mt-35 text-white w-full">

  {/* Item 1 - Total Users */}
  <div className="border-b md:border-r md:border-b-0 lg:border-l lg:border-r border-gray-600 px-4 lg:px-6 w-full lg:w-auto py-4 lg:py-0">
    <div className="flex flex-col md:flex-row lg:flex-row gap-3 md:gap-6 lg:gap-10 items-center justify-center md:justify-start lg:justify-start">
      <img src="./user.png" alt="" className="mx-auto md:mx-0 lg:mx-0 mb-2 w-10 h-10" />
      <p style={{ color: "rgba(250, 36, 90, 1)" }} className="text-2xl lg:text-3xl font-bold">
        100000+
      </p>
    </div>
    <p className="text-[16px] font-semibold text-center md:text-left lg:text-left">TOTAL USERS</p>
  </div>

  {/* Item 2 - Total Tournaments */}
  <div className="border-b md:border-r md:border-b-0 lg:border-r border-gray-600 px-4 lg:pr-10 w-full lg:w-auto py-4 lg:py-0">
    <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-6 lg:gap-10 items-center justify-center md:justify-start lg:justify-start">
      <img src="./Group.png" alt="" className="mx-auto md:mx-0 lg:mx-0 mb-2 w-10 h-11" />
      <p style={{ fontWeight: 700, color: "rgba(250, 36, 90, 1)" }} className="text-2xl lg:text-3xl">
        7890
      </p>
    </div>
    <p className="text-[16px] font-bold text-center md:text-left lg:text-left">Total Tournaments</p>
  </div>
  
  {/* Item 3 - Total Prizes */}
  {/* <div className="border-b md:border-r md:border-b-0 lg:border-r border-gray-600 px-4 lg:pr-10 w-full lg:w-auto py-4 lg:py-0">
    <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-6 lg:gap-10 items-center justify-center md:justify-start lg:justify-start">
      <img src="./Group(1).png" alt="" className="mx-auto md:mx-0 lg:mx-0 mb-2 w-10 h-11" />
      <p style={{ color: "rgba(250, 36, 90, 1)" }} className="text-2xl lg:text-3xl font-bold">
        13823422+
      </p>
    </div>
    <p className="text-[16px] font-bold text-center md:text-left lg:text-left uppercase w-[151px] ">Total prizepool distributed</p>
  </div> */}

<div className="border-b md:border-b-0 lg:border-r border-gray-600  lg:pr-10 w-full lg:w-auto  lg:py-0">
    <div className="flex flex-col md:flex-row lg:flex-row gap-4  lg:gap-10 items-center justify-center md:justify-start lg:justify-start">
      <img src="./doller.png" alt="" className="mx-auto md:mx-0 lg:mx-0 mb-2 w-10 h-11" />
      <p style={{ fontWeight: 700, color: "rgba(250, 36, 90, 1)" }} className="text-2xl lg:text-3xl">
      13823422+
      </p>
    </div>
    <p className="lg:text-[16px] md:text-[12px] font-bold text-center md:text-left lg:text-left">Total prizepool distributed</p>
  </div>


</div>
      </div>
    </>
  );
};

export default Hero;
