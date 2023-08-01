import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const Testimonals = () => {
  return (
    <div className="mt-[100vh] xl:mx-28 lg:mx-20 sm:mx-12 mx-4 relative">
      <div className="py-28 flex flex-col items-center justify-center gap-y-3">
        <h1 className="xl:text-5xl sm:text-4xl text-[2rem] font-bold tracking-wide text-black text-center">
          What People Say About Us !!
        </h1>
      </div>

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-6 bg-[#f0f8ff] shadow-lg rounded-xl">
            <div className="flex flex-col justify-between gap-y-6">
              <div className="flex gap-x-3">
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-orange-600 mx-auto md:mx-0" />
                </div>

                <div className="text-[#677F8B] font-normal lg:text-[18px] sm:text-[14px] text-[1rem] leading-8">
                  <p>
                    I recently had an amazing experience traveling with Hanuman
                    Travels. From start to finish, everything was seamless and
                    hassle-free. The staff were friendly and helpful, the
                    accommodations were top-notch, and the itinerary was
                    well-planned and enjoyable. I would highly recommend Hanuman
                    Travels to anyone looking for a memorable and stress-free
                    travel experience. Thank you for making my trip so
                    wonderful!
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-col lg:ml-16 sm:ml-10 ml-6 gap-y-2">
                  <h1 className="text-3xl font-bold text-orange-600">
                    Sai Varun
                  </h1>

                  <div className="text-lg flex gap-x-1 items-center text-[#677F8B]">
                    Rating:{" "}
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#f0f8ff] shadow-lg rounded-xl">
            <div className="flex flex-col justify-between gap-y-6">
              <div className="flex gap-x-3">
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-orange-600 mx-auto md:mx-0" />
                </div>

                <div className="text-[#677F8B] font-normal lg:text-[18px] sm:text-[14px] text-[1rem] leading-8">
                  <p>
                    Hanuman Travels exceeded my expectations in every way
                    possible. From the initial booking process to the actual
                    trip, everything was executed flawlessly. The staff were
                    knowledgeable and attentive, the activities were
                    well-planned and exciting, and the overall experience was
                    unforgettable. I would highly recommend Hanuman Travels to
                    anyone looking for a truly exceptional travel experience.
                    Thank you for an amazing trip!
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-col lg:ml-16 sm:ml-10 ml-6 gap-y-2">
                  <h1 className="text-3xl font-bold text-orange-600">
                    Gottumukkala Ranganath
                  </h1>

                  <div className="text-lg flex gap-x-1 items-center text-[#677F8B]">
                    Rating:{" "}
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-[#f0f8ff] shadow-lg rounded-xl">
            <div className="flex flex-col justify-between gap-y-6">
              <div className="flex gap-x-3">
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-orange-600 mx-auto md:mx-0" />
                </div>

                <div className="text-[#677F8B] font-normal lg:text-[18px] sm:text-[14px] text-[1rem] leading-8">
                  <p>
                    I had an incredible trip with Hanuman Travels! The attention
                    to detail and personalized service really set them apart
                    from other travel companies. The itinerary was perfectly
                    crafted to showcase the best of the destination, and the
                    accommodations were luxurious and comfortable. I felt
                    completely taken care of throughout the entire trip. I can't
                    wait to travel with Hanuman Travels again in the future!
                  </p>
                </div>
              </div>

              <div>
                <div className="flex flex-col lg:ml-16 sm:ml-10 ml-6 gap-y-2">
                  <h1 className="text-3xl font-bold text-orange-600">
                    Neeraj Patel
                  </h1>

                  <div className="text-lg flex gap-x-1 items-center text-[#677F8B]">
                    Rating:{" "}
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                    <span className="text-orange-600 text-lg">
                      <AiFillStar />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
