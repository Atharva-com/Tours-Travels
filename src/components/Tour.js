import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from 'react-icons/bi'
import tour1 from '../Assets/srisailam1.png'
import tour2 from '../Assets/tour2.jpg'
import tour3 from '../Assets/tour3.png'
import tour4 from '../Assets/tour4.png'
import tour5 from '../Assets/tour5.jpg'
import tour6 from '../Assets/tour6.webp'
import tour7 from '../Assets/tour7.jpg'
import tour8 from '../Assets/tour8.png'
import tour9 from '../Assets/tour9.jpg'
import tour10 from '../Assets/tour10.webp'
import tour11 from '../Assets/tour11.jpg'
import tour12 from '../Assets/tour12.jpg'
import tour13 from '../Assets/tour13.avif'
import { BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs'

const Tour = () => {
    return (
        <div className='my-20 xl:mx-28 lg:mx-20 sm:mx-12 mx-4'>

            <div className='my-16 leading-12 flex flex-col items-center justify-center gap-y-3'>

                <h1 className='text-xl font-medium tracking-wide text-orange-400'>Tour Packages</h1>

                <h1 className='sm:text-4xl text-[2rem] font-bold tracking-wide text-[#00095E] text-center'>Srisailam Mallikarjuna Jyotirlinga One Day Tour Package</h1>

            </div>

            {/* Tour 1 */}

            <div className="relative w-full sm:max-w-[1160px] xl:max-w-none mx-auto bg-transparent my-10">


                <Carousel
                    className=''
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showIndicators={true}
                    showStatus={false}
                    transitionTime={1500}
                    emulateTouch={true}

                    renderArrowPrev={(clickHandler, hasPrev) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[160px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="text-4xl text-[#00095E] font-bold" />
                        </div>
                    )}

                    renderArrowNext={(clickHandler, hasNext) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[100px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="rotate-180 text-4xl text-[#00095E] font-bold" />
                        </div>
                    )}

                >

                    <div className='flex flex-col lg:flex-row gap-y-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour1} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Srisailam Mallikarjuna Jyotirlinga</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour2} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Bramarambika Devi Temple</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour3} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Sakshi Ganapathi Temple</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour4} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Paladhara, Panchadhara</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6 gap-x-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour5} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Hatkeshwar Temple</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6 gap-x-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour6} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Srisailam Dam</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6 gap-x-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour7} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Paatala Ganga</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6 gap-x-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour8} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Octopus View Point</h1>

                        </div>


                    </div>


                </Carousel>

            </div>

            <div className='my-18'>

                <div className='flex items-center justify-center gap-x-6 w-auto'>

                    <div className='w-16 cursor-pointer rounded-full bg-orange-500 flex items-center justify-center p-4 hover:opacity-80'>
                        <BsFillTelephoneFill className='text-2xl' />
                    </div>

                    <div className='cursor-pointer px-6 py-2 rounded-lg bg-[#00095E] text-orange-500 font-medium sm:text-xl text-[1rem] flex items-center justify-center p-4 hover:opacity-80'>
                        <a href="/">Trip Now</a>
                    </div>

                    <div className='w-16 cursor-pointer rounded-full bg-green-500 flex items-center justify-center p-4 hover:opacity-80'>
                        <BsWhatsapp className='text-2xl' />
                    </div>

                </div>

            </div>

            {/* Tour 2 */}

            <div className='my-16 leading-12 flex flex-col items-center justify-center'>

                <h1 className='sm:text-4xl text-[2rem] font-bold tracking-wide text-[#00095E] text-center'>Srisailam Mallikarjuna Jyotirlinga Two Day Tour Package</h1>

            </div>

            <div className="relative w-full sm:max-w-[1160px] xl:max-w-none mx-auto bg-transparent my-10">


                <Carousel
                    className=''
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showIndicators={true}
                    showStatus={false}
                    transitionTime={1500}
                    emulateTouch={true}

                    renderArrowPrev={(clickHandler, hasPrev) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[160px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="text-4xl text-[#00095E] font-bold" />
                        </div>
                    )}

                    renderArrowNext={(clickHandler, hasNext) => (
                        <div
                            onClick={clickHandler}
                            className="absolute right-[100px] bottom-0 w-[50px] h-[30px] bg-transparent z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                        >
                            <BiArrowBack className="rotate-180 text-4xl text-[#00095E] font-bold" />
                        </div>
                    )}

                >

                    <div className='flex flex-col lg:flex-row gap-y-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour1} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Srisailam Mallikarjuna Jyotirlinga</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour2} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Bramarambika Devi Temple</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour3} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Sakshi Ganapathi Temple</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour4} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Paladhara, Panchadhara</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6 gap-x-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour9} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Sikharam, Srisailam</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6 gap-x-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour5} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Hatkeshwar Temple</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6 gap-x-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour6} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Srisailam Dam</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6 gap-x-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour7} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Paatala Ganga</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6 gap-x-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour8} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Octopus View Point</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour10} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Srisailam Tiger Reserve</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour11} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Ropeway, Srisailam Boating</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour12} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Akha Mahadevi Templet</h1>

                        </div>


                    </div>

                    <div className='flex flex-col lg:flex-row gap-y-6'>

                        <div className='lg:w-3/4 w-full'>

                            <img src={tour13} alt="" className='lg:h-[31rem] h-[22rem]' />

                        </div>

                        <div className='text-3xl text-[#00095E] font-medium flex items-center justify-center'>

                            <h1>Chenchu Lakshmi Museum</h1>

                        </div>


                    </div>


                </Carousel>

            </div>

            <div className='my-18'>

                <div className='flex items-center justify-center gap-x-6 w-auto'>

                    <div className='w-16 cursor-pointer rounded-full bg-orange-500 flex items-center justify-center p-4 hover:opacity-80'>
                        <BsFillTelephoneFill className='text-2xl' />
                    </div>

                    <div className='cursor-pointer px-6 py-2 rounded-lg bg-[#00095E] text-orange-500 font-medium sm:text-xl text-[1rem] flex items-center justify-center p-4 hover:opacity-80'>
                        <a href="/">Trip Now</a>
                    </div>

                    <div className='w-16 cursor-pointer rounded-full bg-green-500 flex items-center justify-center p-4 hover:opacity-80'>
                        <BsWhatsapp className='text-2xl' />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Tour