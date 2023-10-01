import React, { useState } from "react";
import paypal from "../img/a.paypal-img-logo (1).png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [number, setNumber] = useState([]);

  function handleChange(target) {
    setNumber(target.value);
  }

  return (
    <div>
      <div className="py-5  overflow-hidden">
        <div className="grid mx-[-1.5rem] grid-cols-3 text-center items-center justify-between">
          <span>
            <select disabled name="flag" id="flag">
              <option value="nigeria">Nigeria</option>
            </select>
          </span>
          <img className="w-[25px] ml-[3.6rem]" src={paypal} alt="paypal" />
          <Link to={"/signin"}>
            <span className="text-blue-700 cursor-pointer hover:text-blue-900 font-bold">
              Log In
            </span>
          </Link>
        </div>
        <div className="py-3 my-9">
          <span className="text-center">
            <h1 className="text-2xl font-bold">Sign up for PayPal</h1>
            <h6 className="mb-5 mt-1 font-semibold">
              First, add your phone number
            </h6>
          </span>

          <form className="text-center items-center justify-center">
            <span>
              <input
                required
                onChange={(e) => handleChange(e.target)}
                value={number}
                className="border-[2px] mb-6 px-[4.6rem] border-gray-300 py-[0.67rem] mx-2 rounded p-1"
                type="number"
                name="number"
                id="number"
                placeholder="Mobile number"
              />
            </span>

            <p className="mb-[1.8rem] text-[0.9rem] text-left px-1 mx-3">
              By continuing, you confirm that you're the owner or primary user
              of this mobile phone number. You agree to receive automated texts
              to confirm your phone number. Message and data rates may apply.
            </p>

            <button className="py-[0.6rem] cursor-pointer px-[8.5rem] rounded-[1.5rem] mx-2 bg-blue-900 text-white text-lg">
              Next
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-[18.2vh] p-2 py-2 pl-7 pr-1 flex gap-3 text-sm text-gray-900">
        <span className="cursor-pointer font-[500]">&copy; 2023 PayPal</span>
        <span className="cursor-pointer font-bold underline">Privacy</span>
        <span className="cursor-pointer font-bold underline">Legal</span>
        <span className="cursor-pointer font-bold underline">Contact</span>
        <span className="cursor-pointer font-bold underline">Feedback</span>
      </footer>
    </div>
  );
};

export default SignUp;
