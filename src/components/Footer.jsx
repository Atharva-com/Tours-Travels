import React from "react";
import logo from "../Assets/logo.png";
import { Constants } from "../constants";

const Footer = () => {
  return (
    <div className="mt-5 grid md:grid-cols-3 text-white w-auto bg-gradient-to-r from-[#1A2D6C] to-[#121E4A]">
      <div className="md:py-28 py-8 justify-between w-auto items-center">
        <div className="flex items-center w-auto justify-center gap-x-8">
          <h1 className="text-2xl text-white font-semibold">Contact Us!</h1>
        </div>
        <p className="mt-8 opacity-50 text-center">
          Balaji Nagar, Hyderabad, Telangana
        </p>
        <p className="mt-2 opacity-50 text-center underline">
          <a href={"mailto:" + Constants.email}>{Constants.email}</a>
        </p>
        <p className="mt-2 opacity-50 text-center underline">
          <a href={"tel:" + Constants.phone}>{Constants.display_phone}</a>
        </p>
      </div>

      <div className="md:py-28 py-8 justify-between w-auto items-center">
        <div className="flex items-center w-auto justify-center gap-x-8">
          <div className="">
            <img
              src="/assets/logo-yellow-cropped.svg"
              alt=""
              className="w-20"
            />
          </div>

          <h1 className="text-2xl text-white font-semibold">
            JN Tours & Travels
          </h1>
        </div>
        <p className="md:pl-44 pt-8 pl-8 text-justify md:pr-20 pr-10 opacity-50">
          Explore Hyderabad and nearby areas with us! From historic landmarks to
          stunning landscapes, our tours promise unforgettable experiences. Join
          us to savor delectable cuisine, marvel at architectural wonders, and
          immerse in vibrant local traditions. Let's create cherished memories
          together!
        </p>
      </div>

      <div className="md:py-28 py-8 justify-between w-auto items-center">
        <div className="flex items-center w-auto justify-center gap-x-8">
          <h1 className="text-2xl text-white font-semibold">
            Website & Designs by Zorway
          </h1>
        </div>
        <p className="mt-8 opacity-50 text-center">
          <a href="https://zorway.in" className="underline">
            zorway.in
          </a>
        </p>
        <p className="mt-2 opacity-50 text-center underline">
          <a href="mailto:contact@zorway.in">contact@zorway.in</a>
        </p>
        <p className="mt-2 opacity-50 text-center underline">
          <a href="tel:+918770741112">+91 8770741112</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
