import React from 'react'
import rental from '../Assets/car rental.jpg'
import advisor from '../Assets/trip advisor.jpg'
import Customization from '../Assets/customization.jpg'
import driver from '../Assets/driver.jpg'
import safe from '../Assets/safe journey.jpg'
import luggage from '../Assets/luggage.jpg'
import Vehicles from '../Assets/well vehicles.jpg'


const Service = () => {
    return (
        <div className='my-20 xl:mx-28 lg:mx-20 sm:mx-12 mx-4'>
            {/* Heading */}
            <div className='flex flex-col items-center my-16'>

                <h1 className='text-xl font-normal tracking-wide text-orange-400'> Why plan with us </h1>

                <h1 className='text-5xl font-bold tracking-wide text-black'>Our Services</h1>

            </div>

            {/* grid design */}

            <div className='p-4'>

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
            </div>
        </div>
    )
}

export default Service