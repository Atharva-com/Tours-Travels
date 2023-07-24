import React from 'react'
import book from '../Assets/book.webp'
import {BsFillEmojiSunglassesFill} from 'react-icons/bs'

const Book = () => {
    return (
        <div className='my-20 xl:mx-28 lg:mx-20 sm:mx-12 mx-4'>

            <div className='my-16 leading-12 flex flex-col items-center justify-center gap-y-3'>

                <h1 className='sm:text-3xl text-[2rem] font-bold tracking-wide text-[#00095E] text-center'>Book Your Trip in 3 Easy Steps</h1>

            </div>

            <div>

                <div className='flex sm:flex-row flex-col gap-6'>

                    <div className='flex items-center justify-center xl:justify-start'>

                        <div className='flex flex-col gap-y-14 xl:w-3/4 w-full'>

                            <div className='flex flex-col gap-y-2'>

                                <h1 className='text-orange-400'>01</h1>

                                <h1 className='text-3xl font-bold text-[#00095E]' >Reserve Your Ride</h1>

                                <p className='text-[#677F8B] font-normal leading-8 lg:text-[20px] sm:text-[15px] text-[1rem]'>Contact with our team , get the details about the tour and book your ride .</p>

                            </div>

                            <div className='flex flex-col gap-y-2'>

                                <h1 className='text-orange-400'>02</h1>

                                <h1 className='text-3xl font-bold text-[#00095E]' >Pack Your Bags</h1>

                                <p className='text-[#677F8B] font-normal leading-8 lg:text-[20px] sm:text-[15px] text-[1rem]'>After booking your slot , pack your essentials  , keeping some additionals things like medicines, tripy clothes and dry snacks.</p>

                            </div>

                            <div className='flex flex-col gap-y-2'>

                                <h1 className='text-orange-400'>03</h1>

                                <h1 className='text-3xl font-bold text-[#00095E]' >Hit the road</h1>

                                <p className='text-[#677F8B] font-normal leading-8 lg:text-[20px] sm:text-[15px] text-[1rem]'>Now it&apos;s time to start the journey. Contact the driver and reach at the starting point for safe and comfortable journey. </p>

                            </div>

                        </div>
                    </div>

                    <div className='flex items-center justify-center'>

                        <div className='h-full'>

                            <img src={book} alt="" className='h-full' />

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Book