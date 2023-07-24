import React from 'react'
import video from '../Assets/production_id_4063585 (720p).mp4'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>

            <div className="flex absolute w-full items-center 
        justify-center h-screen overflow-hidden">
                <video src={video}
                    autoPlay="{true}" loop muted
                    className="absolute -z-10 w-auto 
            min-w-full min-h-full max-w-none bg-cover bg-no-repeat">
                </video>
            </div>

            <div className='xl:mx-28 lg:mx-20 sm:mx-12 mx-4 h-screen relative z-50'>

                {/* Header Section */}
                <div className='flex justify-between items-center'>
                    
                    <div className='flex items-center justify-center gap-x-8'>
                    <div>

                        <img src={logo} alt="" className='w-[15em]' />

                    </div>

                    <h1 className='text-4xl text-orange-400 font-semibold uppercase'>hanuman travels</h1>
                    </div>

                    <div className='cursor-pointer xl:flex hidden rounded bg-transparent border-2 border-orange-400 px-6 py-2'>
                        <span className='text-lg font-semibold'>+91 8688507208</span>
                    </div>

                </div>

                {/* main home page content */}

                <div className='flex flex-col gap-y-8 h-[75vh] justify-evenly'>

                    <div>

                        <h1 className='font-bold xl:text-[60px] lg:text-[48px] sm:text-[44px] text-[30px] text-white leading-normal'>Hit the road <br />  with <span className='text-orange-500 uppercase tracking-wide'>Hanuman travels</span> , <br /> Your new travel companion </h1>

                    </div>

                    <div className='rounded-xl border-none xl:w-2/3 w-full bg-[#f0f8ff]'>

                        <div className='flex justify-between items-center sm:px-12 px-4 py-4'>

                            <h1 className='lg:text-[2rem] sm:text-[1.5rem] text-[1rem]'>Travel the way you want it</h1>

                            <button className='rounded-xl bg-orange-300 py-2 sm:px-6 px-4 cursor-pointer'>
                                <a href='/' className='flex gap-x-2 sm:text-[1.5rem] text-[1.2rem] cursor-pointer'>Book <span className='sm:flex hidden'> Now</span></a>
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home