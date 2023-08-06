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
      {/* grid design */}

      {/* <div className='p-4'>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

                    <div className='shadow-lg text-[#00095E] text-lg font-medium sm:row-span-2 lg:row-span-2'>

                        <div className='h-full w-full' >
                            <img src={rental} alt="" className='h-full w-full' />
                        </div>
                        <h1 className='relative bottom-10 left-3 sm:left-8 font-bold text-[1.5rem] leading-9 sm:text-3xl' >Car Rentals</h1>

                    </div>

                    <div className='shadow-lg text-[#00095E] text-lg font-medium'>

                        <div className='h-full w-full' >
                            <img src={advisor} alt="" className='h-full w-full' />
                        </div>
                        <h1 className='relative bottom-10 left-3 sm:left-8 font-bold text-[1.5rem] leading-9 sm:text-3xl' >Trip Advisor</h1>

                    </div>

                    <div className='shadow-lg text-[#00095E] text-lg font-medium lg:row-span-2'>

                        <div className='h-full w-full' >
                            <img src={Customization} alt="" className='h-full w-full' />
                        </div>
                        <h1 className='relative bottom-20 left-3 sm:left-8 font-bold text-[1.5rem] leading-9 sm:text-3xl' >Flexibility & <br /> Customization</h1>

                    </div>

                    <div className='shadow-lg text-[#00095E] text-lg font-medium'>

                        <div className='h-full w-full' >
                            <img src={driver} alt="" className='h-full w-full' />
                        </div>
                        <h1 className='relative bottom-10 left-3 sm:left-8 font-bold text-[1.5rem] leading-9 sm:text-3xl' >Professional Drivers</h1>

                    </div>

                    <div className='shadow-lg text-[#00095E] text-lg font-medium'>

                        <div className='h-full w-full' >
                            <img src={safe} alt="" className='h-full w-full' />
                        </div>
                        <h1 className='relative bottom-20 left-3 sm:left-8 font-bold text-[1.5rem] leading-9 sm:text-3xl' >Comfortable & <br /> Safe Journey</h1>

                    </div>

                    <div className='shadow-lg text-[#00095E] text-lg font-medium'>

                        <div className='h-full w-full' >
                            <img src={luggage} alt="" className='h-full w-full' />
                        </div>
                        <h1 className='relative bottom-20 left-3 sm:left-8 font-bold text-[1.5rem] leading-9 sm:text-3xl' >Proper Luggage <br /> Management</h1>

                    </div>

                    <div className='shadow-lg text-[#00095E] text-lg font-medium'>

                        <div className='h-full w-full' >
                            <img src={Vehicles} alt="" className='h-full w-full' />
                        </div>
                        <h1 className='relative bottom-20 left-3 sm:left-8 font-bold text-[1.5rem] leading-9 sm:text-3xl' >Well Maintained <br /> Vehicles</h1>

                    </div>

                </div>
            </div> */}
    </div>
  );
};

export default Service;
