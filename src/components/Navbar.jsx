import React from "react";
import paypal from "../img/a.paypal-img-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex h-full w-[90%] justify-between ml-6 lg:ml-[7rem] items-center bg-white py-2">
        <div className="cursor-pointer">
          <img className="w-[95px] lg:w-[140px]" src={paypal} alt="paypal" />
        </div>
        <div className="group relative cursor-pointer bg-white">
          <div className="flex ml-2 lg:ml-10 mb-1 items-center justify-between space-x-5 bg-white lg:px-4 px-1">
            <h1 className="menu-hover hover:border-b-[1px] hover:border-b-sky-900 my-1 py-1 lg:text-base text-[0.7rem] font-bold text-black lg:mx-4">
              PERSONAL
            </h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6 ml-[-1.7rem] hover:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          <div className="invisible mx-9 absolute text-sm z-50 grid grid-cols-2 pr-[20rem] pl-[7rem] w-[98vw] ml-[-35.3rem] bg-[#001c64] py-2 pb-5 border-b-[2px] border-b-white text-gray-800 shadow-xl group-hover:visible">
            <span className="my-2 hover:underline hover:text-white">
              <h1 className="flex text-[1rem] font-semibold text-white md:mx-2">
                How PayPal Works
              </h1>

              <h1 className="flex text-[0.8rem] font-semibold text-white md:mx-2">
                What you can do with a personal account
              </h1>
            </span>

            <span className="my-2 hover:underline hover:text-white">
              <h1 className="flex text-[1rem] font-semibold text-white md:mx-2">
                Pay Online
              </h1>
              <h1 className="flex text-[0.8rem] font-semibold text-white md:mx-2">
                Online payments without borders
              </h1>
            </span>

            <span className="my-2 hover:underline hover:text-white">
              <h1 className="flex text-[1rem] font-semibold text-white md:mx-2">
                Send Payments
              </h1>
              <h1 className="flex text-[0.8rem] font-semibold text-white md:mx-2">
                Send payments abroad
              </h1>
            </span>

            <span className="my-2 hover:underline hover:text-white">
              <h1 className="flex text-[1rem] font-semibold text-white md:mx-2">
                Search for Deals
              </h1>
              <h1 className="flex text-[0.8rem] font-semibold text-white md:mx-2">
                Pay with PayPal and save money
              </h1>
            </span>
          </div>
        </div>
        <div className="mb-2 mr-1 lg:mr-[6rem]">
          <Link to={"/signin"}>
            <span className="py-1 lg:py-2 self-center text-[#0070BA] cursor-pointer text-[0.7rem] lg:text-[0.9rem] font-semibold rounded-[2rem] px-4 lg:px-6 bg-white border-[1.6px] border-[#0070BA]">
              Log in
            </span>
          </Link>

          <Link to={"/signup"}>
            <span className="py-1 hidden md:inline-flex lg:py-2 ml-1 lg:ml-2 text-white cursor-pointer hover:bg-[#0059BA] text-[0.7rem] lg:text-[0.9rem] font-semibold rounded-[2rem] px-3 lg:px-5 bg-[#0070BA]">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
