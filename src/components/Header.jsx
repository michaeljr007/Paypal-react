import React from "react";
import headerImg from "../img/section.row-fluid (3).png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-[98vw]">
      <div className="w-full h-[40vh] lg:hidden absolute bg-gradient-to-l from-black"></div>
      <img
        className="w-[99vw] lg:w-full h-[40vh] lg:h-full object-center"
        src={headerImg}
        alt="paypal"
      />
      <div className="text-center absolute w-full top-[17%] lg:top-[18%] md:top-[23%] text-white items-center p-4 py-4">
        <span>
          <h1 className="lg:my-[3.8rem] my-[1rem] lg:text-[2.6rem] text-xl">
            The simpler, safer way to pay online.
          </h1>
        </span>
        <Link to={"/signup"}>
          <span className="lg:py-4 py-2 my-4 text-white cursor-pointer hover:bg-[#0059BA] text-[0.9rem] font-bold rounded-[2rem] lg:px-[8rem] px-[2.6rem] bg-[#0070BA] border-[1.6px] border-[#0070BA]">
            Sign Up for Free.
          </span>
        </Link>

        <span>
          <h6 className="lg:my-9 my-4 text-[0.7rem] lg:text-[0.9rem] md:text-sm">
            Own a business?{" "}
            <span className="font-semibold cursor-pointer hover:underline">
              {" "}
              Open a Business account.
            </span>
          </h6>
        </span>
      </div>
    </div>
  );
};

export default Header;
