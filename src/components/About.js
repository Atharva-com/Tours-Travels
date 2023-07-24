import React from 'react'
import aboutImg from '../Assets/about.png.webp'

const About = () => {
  return (
    <div className='my-20 xl:mx-28 lg:mx-20 sm:mx-12 mx-4'>

        <div className='flex gap-8 lg:flex-row flex-col'>

            <div className='flex justify-center items-center lg:w-[60%] w-full'>

                <img src={aboutImg} alt="" className='flex items-center justify-center' />

            </div>

            <div className='lg:w-[40%] w-full flex flex-col items-start gap-y-4'>

                <h1 className='text-orange-400'>About Us</h1>

                <h1 className='text-[#00095E] xl:text-[55px] lg:text-[50px] sm:text-[40px] text-[2rem] leading-snug block font-bold '>Get ready for real <br /> time adventure </h1>

                <p className='text-[#677F8B] font-normal w-full sm:w-2/3 lg:w-full lg:text-[20px] sm:text-[15px] text-[1rem] leading-9'>Let’s start your journey with us, your dream will come true. We provide comfortable and safe journey to our travellers. Enjoy the journey with us from Hyderabad to Srisailam . Book your trip and Enjoy the moment .</p>

                <button className='rounded border-none bg-orange-300 text-[#00095E] font-medium sm:text-xl text-base sm:px-6 px-4 py-2'>
                    <a href="/">Book Your Destination</a>
                </button>

            </div>

        </div>

    </div>
  )
}

export default About