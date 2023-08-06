import React from "react";
import shiva from '../Assets/desktop-wallpaper-shiva-lord-shiva-black-thumbnail.jpg'

const Service = () => {
  return (
    <div className="my-20 xl:mx-28 lg:sm:mx-20 sm:mx-12 mx-4">
      {/* Heading */}
      <div className="flex flex-col items-center my-16">
        <h1 className="text-xl font-normal tracking-wide text-orange-400">
          Why plan with us
        </h1>

        <h1 className="text-5xl font-bold tracking-wide text-black">
          Our Speciality
        </h1>
      </div>

      <div className="w-full flex justify-evenly md:justify-between md:items-center text-xl text-[#00095E]">
        <ul className="list-disc text-[#00095E] text-xl grid lg:grid-cols-1">
          <li className="mt-5 md:mr-20 md:ml-0 lg:mx-20">
            <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
              &rarr; Car Rentals
            </h1>
          </li>
          <li className="mt-5 md:mr-20 md:ml-0 lg:mx-20">
            <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
              &rarr; Trip Advisor
            </h1>
          </li>
          <li className="mt-5 md:mr-20 md:ml-0 lg:mx-20">
            <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
              &rarr; Customization & Flexibility
            </h1>
          </li>
          <li className="mt-5 md:mr-20 md:ml-0 lg:mx-20">
            <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
              &rarr; Professional Drivers
            </h1>
          </li>
          <li className="mt-5 md:mr-20 md:ml-0 lg:mx-20">
            <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
              &rarr; Comfortable & Safe Journey
            </h1>
          </li>
          <li className="mt-5 md:mr-20 md:ml-0 lg:mx-20">
            <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
              &rarr; Proper Luggage Management
            </h1>
          </li>
          <li className="mt-5 md:mr-20 md:ml-0 lg:mx-20">
            <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
              &rarr; Well Maintained Vehicles
            </h1>
          </li>
        </ul>

        <div className="md:inline-block hidden">
          <img src={shiva} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Service;
