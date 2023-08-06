import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import tour1 from "../Assets/srisailam1.png";
import tour2 from "../Assets/tour2.jpg";
import tour3 from "../Assets/tour3.png";
import tour4 from "../Assets/tour4.png";
import tour5 from "../Assets/tour5.jpg";
import tour6 from "../Assets/tour6.webp";
import tour7 from "../Assets/tour7.jpg";
import tour8 from "../Assets/tour8.png";
import tour9 from "../Assets/tour9.jpg";
import tour10 from "../Assets/tour10.webp";
import tour11 from "../Assets/tour11.jpg";
import tour12 from "../Assets/tour12.jpg";
import tour13 from "../Assets/tour13.avif";
import tour14 from "../Assets/images (24).jpeg";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { Constants } from "../constants";

const Tour = () => {
  return (
    <div className="my-20 xl:mx-28 lg:mx-20 sm:mx-12 mx-4">
      <div className="my-16 leading-12 flex flex-col items-center justify-center gap-y-3">
        <h1 className="text-xl font-medium tracking-wide text-orange-400">
          Tour Packages
        </h1>

        <h1 className="sm:text-4xl text-[2rem] font-bold tracking-wide text-[#00095E] text-center">
          Srisailam Mallikarjuna Jyotirlinga One Day Tour Package
        </h1>
      </div>

      {/* Tour 1 */}

      <div className="relative w-auto sm:max-w-[1160px] xl:max-w-none mx-auto bg-transparent my-10">
        <Carousel
          className=""
          swipeable={false}
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
          <div className="flex flex-col lg:flex-row gap-y-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour1} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Srisailam Mallikarjuna Jyotirlinga</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour2} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Bramarambika Devi Temple</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour3} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Sakshi Ganapathi Temple</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour4} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Paladhara, Panchadhara</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6 gap-x-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour5} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Hatkeshwar Temple</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6 gap-x-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour6} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Srisailam Dam</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6 gap-x-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour7} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Paatala Ganga</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6 gap-x-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour8} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Octopus View Point</h1>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="my-24">
        <div className="w-auto flex justify-evenly lg:justify-between lg:items-center text-xl text-[#00095E]">
          <ul className="list-disc text-[#00095E] text-xl grid sm:grid-cols-1">
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                &rarr; Srisailam Mallikarjuna Jyotirlinga
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
              &rarr; Bramarambika Devi Temple
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
              &rarr; Sakshi Ganapathi Temple
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
              &rarr; Paladhara, Panchadhara
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
              &rarr; Hatkeshwar Temple
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
              &rarr; Srisailam Dam
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
              &rarr; Paatala Ganga
              </h1>
            </li>
          </ul>

          <div className="lg:inline-block hidden">
            <img src={tour14} alt="" className="w-[25vw]" />
          </div>
        </div>
      </div>

      <div className="my-18">
        <div className="flex items-center justify-center gap-x-6 w-auto">
          <a href={"tel:" + Constants.phone}>
            <div className="w-16 cursor-pointer rounded-full bg-orange-500 flex items-center justify-center p-4 hover:opacity-80">
              <BsFillTelephoneFill className="text-2xl" />
            </div>
          </a>

          <a href={"tel:" + Constants.phone}>
            <div className="cursor-pointer px-6 py-2 rounded-lg bg-[#00095E] text-orange-500 font-medium sm:text-xl text-[1rem] flex items-center justify-center p-4 hover:opacity-80">
              Trip Now
            </div>
          </a>

          <a href={Constants.whatsapp}>
            <div className="w-16 cursor-pointer rounded-full bg-green-500 flex items-center justify-center p-4 hover:opacity-80">
              <BsWhatsapp className="text-2xl" />
            </div>
          </a>
        </div>
      </div>

      {/* Tour 2 */}

      <div className="my-16 leading-12 flex flex-col items-center justify-center">
        <h1 className="sm:text-4xl text-[2rem] font-bold tracking-wide text-[#00095E] text-center">
          Srisailam Mallikarjuna Jyotirlinga Two Day Tour Package
        </h1>
      </div>

      <div className="relative w-auto sm:max-w-[1160px] xl:max-w-none mx-auto bg-transparent my-10">
        <Carousel
          className=""
          swipeable={false}
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
          <div className="flex flex-col lg:flex-row gap-y-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour1} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Srisailam Mallikarjuna Jyotirlinga</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour2} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Bramarambika Devi Temple</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour3} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Sakshi Ganapathi Temple</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour4} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Paladhara, Panchadhara</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6 gap-x-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour9} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Sikharam, Srisailam</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6 gap-x-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour5} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Hatkeshwar Temple</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6 gap-x-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour6} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Srisailam Dam</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6 gap-x-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour7} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Paatala Ganga</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6 gap-x-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour8} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Octopus View Point</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour10} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Srisailam Tiger Reserve</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour11} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Ropeway, Srisailam Boating</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour12} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Akha Mahadevi Templet</h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-6">
            <div className="lg:w-3/4 w-auto">
              <img src={tour13} alt="" className="lg:h-[31rem] h-[22rem]" />
            </div>

            <div className="text-3xl text-[#00095E] font-medium flex items-center justify-center">
              <h1>Chenchu Lakshmi Museum</h1>
            </div>
          </div>
        </Carousel>
      </div>

      <div className="mt-24 mb-12">
        <div className="w-auto flex justify-evenly text-xl text-[#00095E]">
          <ul className="list-disc text-[#00095E] text-xl grid sm:grid-cols-2">
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                Srisailam Mallikarjuna Jyotirlinga
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                Bramarambika Devi Temple
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                Sakshi Ganapathi Temple
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                Paladhara, Panchadhara
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                Sikharam, Srisailam
              </h1>
            </li>

            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                Hatkeshwar Temple
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                Srisailam Dam
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                Paatala Ganga
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                Octopus View Point
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                Srisailam Tiger Reserve
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                Ropeway, Srisailam Boating
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                Akha Mahadevi Temple
              </h1>
            </li>
            <li className="mt-5 sm:mx-20">
              <h1 className="relative bottom-10 left-3 sm:left-8 font-bold leading-9 sm:text-2xl">
                Chenchu Lakshmi Museum
              </h1>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-18">
        <div className="flex items-center justify-center gap-x-6 w-auto">
          <a href={"tel:" + Constants.phone}>
            <div className="w-16 cursor-pointer rounded-full bg-orange-500 flex items-center justify-center p-4 hover:opacity-80">
              <BsFillTelephoneFill className="text-2xl" />
            </div>
          </a>

          <a href={"tel:" + Constants.phone}>
            <div className="cursor-pointer px-6 py-2 rounded-lg bg-[#00095E] text-orange-500 font-medium sm:text-xl text-[1rem] flex items-center justify-center p-4 hover:opacity-80">
              Trip Now
            </div>
          </a>

          <a href={Constants.whatsapp}>
            <div className="w-16 cursor-pointer rounded-full bg-green-500 flex items-center justify-center p-4 hover:opacity-80">
              <BsWhatsapp className="text-2xl" />
            </div>
          </a>
        </div>
      </div>

      <div class="md:col md:columns-2 my-5 mt-24 mx-2 md:flex w-full md:py-10 md:px-16">
        <div class="m-8 md:w-1/2 text-xl flex-grow items-center justify-center space-y-5">
          <h2 class="text-3xl font-bold text-center text-green-600">
            Package Inclusions
          </h2>
          <ul class="list-disc md:px-20">
            <li>
              Cab for round trip from Hyderabad-Srisailam-Hyderabad with 450 Kms
              limit.
            </li>
            <li>State Permit(approx ₹500 to ₹1000)</li>
            <li>Service tax at 6%</li>
            <li>Toll Gate Charges</li>
            <li>Pickup & Drop from your Hotel/Home</li>
          </ul>
        </div>
        <div class="m-8 md:w-1/2 text-xl flex-grow items-center justify-center space-y-5">
          <h2 class="text-3xl font-bold text-center text-red-600">
            Package Exclusions
          </h2>
          <ul class="list-disc md:px-20 text-gray-700">
            <li>
              Charges for attractions, lodgings, accommodation, breakfast or any
              meal.
            </li>
            <li>500 Kms limit. After that ₹10 or more per Km is applicable.</li>
            <li>Food for driver is to be provided by customer.</li>
            <li>Pickup Point should be a single place.</li>
            <li>One Day mean 12 AM to 11:59 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tour;
