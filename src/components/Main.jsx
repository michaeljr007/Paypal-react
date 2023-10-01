import React from "react";
import { BsChevronRight } from "react-icons/bs";
import lady from "../img/1-individuals.jpg.png";
import business from "../img/2-businesses.jpg.png";
import partner from "../img/3-partner.jpg.png";
import steps1 from "../img/buyonline_browser1.png.png";
import steps2 from "../img/buyonline_browser2.png.png";
import steps3 from "../img/buyonline_browser3.png.png";

const Main = () => {
  return (
    <div>
      <div className="mb-5 mt-[3rem] lg:mt-[5rem] text-center items-center">
        <h1 className="text-2xl lg:text-4xl mb-10 text-gray-800">
          Paypal is for Everyone who pays online.
        </h1>
        <div className="lg:grid lg:grid-cols-3 block px-5 py-5 pb-[5rem] my-5 mx-4">
          <div className="items-center px-4">
            <img
              className="self-center mx-[6.3rem] lg:mx-[7rem]"
              src={lady}
              alt="lady"
            />

            <h1 className="my-3 text-3xl">Individuals</h1>
            <p className="font-sans my-4 mb-[2.8rem]">
              Find out why we have over 200m active accounts worldwide
            </p>
            <span className="py-2 lg:py-5 font-bold self-center text-[#0070BA] cursor-pointer text-[0.9rem] rounded-[2rem] px-10 lg:px-20 bg-white border-[1.6px] border-[#0070BA]">
              Learn More
            </span>
          </div>

          <div className="px-4 mt-11 lg:mt-0">
            <img
              className="self-center mt-11 md:mt-0 mx-[6.3rem] lg:mx-[7rem]"
              src={business}
              alt="lady"
            />
            <h1 className="my-3 text-3xl">Businesses</h1>
            <p className="font-sans my-4 mb-[2.8rem]">
              Join more than 7 million businesses around the world offering
              PayPal.
            </p>
            <span className="py-2 lg:py-5 font-bold self-center text-[#0070BA] cursor-pointer text-[0.9rem] rounded-[2rem] px-10 lg:px-20 bg-white border-[1.6px] border-[#0070BA]">
              Learn More
            </span>
          </div>

          <div className="px-4">
            <img
              className="self-center mt-11 md:mt-0 mx-[6.3rem] lg:mx-[7rem]"
              src={partner}
              alt="lady"
            />

            <h1 className="my-3 lg:my-0 text-3xl lg:text-2xl">
              Partners & Developers
            </h1>
            <p className="font-sans my-4 mb-[2.8rem]">
              Work with PayPal to offer your customers world class payment
              solutions.
            </p>
            <span className="py-2 lg:py-5 font-bold self-center text-[#0070BA] cursor-pointer text-[0.9rem] rounded-[2rem] px-10 lg:px-20 bg-white border-[1.6px] border-[#0070BA]">
              Learn More
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-[6rem]">
        <div className="mt-[-2rem] lg:mt-[-2rem]">
          <span className="text-center">
            <h1 className="my-3 text-2xl px-2 lg:text-4xl">
              Paypal connects buyers and sellers.
            </h1>
            <h6 className="hover:cursor-pointer underline my-7 font-bold text-gray-700">
              For buyers
            </h6>
          </span>

          <div className="mt-[3rem] block md:grid md:grid-cols-3 px-5 lg:px-[8rem] lg:gap-[4rem]">
            <div className="flex px-3">
              <span>
                <h1 className="mt-[11rem] bg-transparent border-[1.5px] border-gray-400 py-2 px-[1.05rem] font-bold mr-4 rounded-[50%]">
                  1
                </h1>
              </span>
              <span>
                <img src={steps1} alt="" />
                <p>
                  <span className="text-[#0070BA] font-bold cursor-pointer hover:underline">
                    Sign up
                  </span>{" "}
                  with just an email address and password.
                </p>
              </span>
              <span>
                <BsChevronRight className="mt-[3rem] hidden md:inline-block text-6xl mr-[-4rem] text-gray-300" />
              </span>
            </div>

            <div className="flex my-4 md:my-0 px-3">
              <span>
                <h1 className="mt-[11rem] bg-transparent border-[1.5px] border-gray-400 py-2 px-[1.05rem] font-bold mr-4 rounded-[50%]">
                  2
                </h1>
              </span>
              <span></span>
              <span>
                <img src={steps2} alt="" />
                <p>Securely add your cards.</p>
              </span>
              <span>
                <BsChevronRight className="mt-[3rem] hidden md:inline-block text-6xl mr-[-3rem] text-gray-300" />
              </span>
            </div>

            <div className="flex px-2">
              <span>
                <h1 className="mt-[11rem] bg-transparent border-[1.5px] border-gray-400 py-2 px-[1.05rem] font-bold mr-4 rounded-[50%]">
                  3
                </h1>
              </span>
              <span>
                <img src={steps3} alt="" />
                <p>
                  Use the PayPal button to check out with just an email address
                  and password.
                </p>
              </span>
            </div>
          </div>
          <div className="items-center font-bold self-center mt-[4rem] ml-[7rem] lg:ml-[26rem]">
            <span className="py-2 lg:py-5 text-[#0070BA] cursor-pointer text-[0.9rem] rounded-[2rem] px-10 lg:px-[4rem] text-center bg-transparent border-[1.6px] border-[#0070BA]">
              Learn More
            </span>
          </div>
        </div>
      </div>

      <div className="py-[5rem] md:py-[8rem] bg-[#003087] text-white">
        <div className="mt-[-2rem] md:mt-[-5rem] pl-0 md:pl-[-2rem]">
          <span className="text-center items-center self-center">
            <h1 className="text-2xl px-3 md:px-0 md:text-4xl">
              Join 200m active Paypal accounts worldwide.
            </h1>
          </span>
          <div className="block md:grid grid-cols-2 py-5 mx-5 md:mx-12 mt-1 md:mt-10">
            <span className="px-1 md:px-6">
              <h1 className="text-xl md:text-3xl font-semibold my-2">
                Safer and protected
              </h1>
              <p>
                Shop with peace of mind. We don’t share your full financial
                information with sellers. And PayPal Buyer Protection covers
                your eligible purchases if they don’t show up or match their
                description.
              </p>
              <h6 className="font-semibold mt-5 cursor-pointer hover:underline">
                More about security
              </h6>
            </span>

            <span className="px-0 md:px-6">
              <h1 className="text-xl font-semibold md:text-3xl my-2">
                Mostly free, always upfront
              </h1>
              <p>
                It’s free to open a PayPal account and buy something using
                PayPal unless it involves a currency conversion.
              </p>
              <h6 className="font-semibold mt-5 hover:underline cursor-pointer">
                More about fees
              </h6>
            </span>
          </div>
        </div>
      </div>

      <div className="py-[5.7rem] lg:py-[7.7rem] bg-gray-100 text-center items-center justify-center self-center">
        <span>
          <h1 className="mb-[2.1rem] text-2xl md:text-3xl mt-[-2rem]">
            Sign up and get started
          </h1>
        </span>
        <span>
          <span className="py-3 lg:py-4 text-white cursor-pointer hover:bg-[#0057BA] text-[1rem] font-semibold rounded-[2rem] px-[7rem] bg-[#0070BA]">
            Get Started
          </span>
        </span>
      </div>
    </div>
  );
};

export default Main;
