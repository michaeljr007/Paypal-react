import React, { useState } from "react";
import paypal from "../img/a.paypal-img-logo (1).png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState([]);

  function handleChange(target) {
    setEmail(target.value);
  }

  return (
    <div>
      <div className="py-5">
        <div>
          <img
            className="w-[25px] ml-[49vw] lg:w-[50px]"
            src={paypal}
            alt="paypal"
          />
        </div>
        <div className="py-3 my-9">
          <form className="text-center items-center justify-center">
            <span>
              <input
                required
                onChange={(e) => handleChange(e.target)}
                value={email}
                className="border-[2px] px-[4.6rem] border-gray-300 py-[0.67rem] mx-2 rounded p-1"
                type="text"
                name="email"
                id="email"
                placeholder="Email or mobile number"
              />
            </span>

            <h1 className="mb-6 mt-3 mx-6 font-bold text-blue-900 text-left text-lg">
              Forgot email?
            </h1>
            <button className="py-[0.6rem] cursor-pointer px-[8.5rem] rounded-[1.5rem] mx-2 bg-blue-900 text-white text-lg">
              Next
            </button>
          </form>
          <div className="my-8 text-center items-center justify-center flex">
            <span className="bg-gray-300 px-[4.4rem] py-[0.8px]"></span>
            <span className="mx-3 font-semibold">or</span>
            <span className="bg-gray-300 px-[4.4rem] py-[0.8px]"></span>
          </div>
          <Link to={"/signup"}>
            <span className="py-[0.5rem] cursor-pointer text-center text-blue-900 block mx-[2.4rem] rounded-[1.5rem] border-[1.5px] border-gray-400 text-lg">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
      <footer className="bg-gray-100 mt-[17.9vh] font-semibold p-2 py-2 pl-9 pr-1 flex gap-3 text-xs text-gray-900">
        <span className="cursor-pointer">Contact Us</span>
        <span className="cursor-pointer">Privacy</span>
        <span className="cursor-pointer">Legal</span>
        <span className="cursor-pointer">Policy Updates</span>
        <span className="cursor-pointer">Worldwide</span>
      </footer>
    </div>
  );
};

export default SignIn;
