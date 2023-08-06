import React from "react";
import "./styles.css";
import img from '../Assets/tour8.png'
import { Constants } from "../constants";

const Home = () => {
  return (
    <div>
      <div
        className="flex absolute bg-[#00000099] w-full items-center 
        justify-center h-screen overflow-hidden"
      >
        <img src={img} alt="" className="absolute -z-10 w-auto 
            min-w-full min-h-full max-w-none bg-cover bg-no-repeat" />
        {/* <video
          src={video}
          autoPlay="{true}"
          loop
          muted
          className="absolute -z-10 w-auto 
            min-w-full min-h-full max-w-none bg-cover bg-no-repeat"
        ></video> */}
      </div>

      <div className="xl:mx-28 lg:mx-20 sm:mx-12 mx-4 h-screen relative z-50">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-x-8">
            <div className="">
              <img
                src="/assets/logo-yellow-cropped.svg"
                alt=""
                className="w-20"
              />
            </div>

            <h1 className="md:text-4xl text-xl text-shadow text-purple-600 p-4 rounded-lg font-semibold uppercase">
              JN TOURS & TRAVELS
            </h1>
          </div>

          <div className="cursor-pointer xl:flex hidden rounded bg-transparent border-2 border-purple-600 px-6 py-2">
            <span className="text-lg text-white font-semibold">
              <a href={"tel:" + Constants.phone}>{Constants.display_phone}</a>
            </span>
          </div>
        </div>

        {/* main home page content */}

        <div className="flex flex-col gap-y-8 h-[75vh] justify-evenly">
          <div className="p-4 rounded-lg ">
            <h1 className="font-bold lg:text-[40px] sm:text-[38px] text-[30px] text-white leading-normal">
              Hit the road <br /> with{" "}
              <span className="text-purple-600 text-shadow uppercase tracking-wide">
                JN Tours and Travels
              </span>{" "}
              , <br /> Your new travel companion <br />
              <span className="text-orange-300 text-shadow">
                Bookings available for Hyderabad to Srisailam!
              </span>
            </h1>
          </div>

          <div className="rounded-xl border-none xl:w-2/3 w-full bg-[#f0f8ff]">
            <div className="flex justify-between items-center sm:px-12 px-4 py-4">
              <h1 className="lg:text-[1.5rem] sm:text-[1rem] text-[1rem]">
                From Hyderabad to Anywhere in Telangana
              </h1>

              <a
                href={"tel:" + Constants.phone}
                className="rounded-xl bg-orange-300 py-2 sm:px-6 px-4 cursor-pointer"
              >
                <div className="flex gap-x-2 sm:text-[1.5rem] text-[1.2rem] cursor-pointer">
                  Book <span className="sm:flex hidden"> Now</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
