import React from "react";

const Footer = () => {
  return (
    <footer className="py-[1.8rem]">
      <div className="mx-2 md:mx-[4rem] mt-6 md:mt-11 p-4 md:p-7">
        <div className="flex flex-row border-b py-1 md:py-2 border-gray-200">
          <span className="mx-[0.35rem] md:mx-2 font-semibold">Help</span>
          <span className="mx-[0.35rem] md:mx-2 font-semibold">Contact</span>
          <span className="mx-[0.35rem] md:mx-2 font-semibold">Fees</span>
          <span className="mx-[0.35rem] md:mx-2 font-semibold">Security</span>
          <span className="mx-[0.35rem] md:mx-2 font-semibold">Features</span>
          <span className="mx-[0.35rem] md:mx-2 font-semibold">Shop</span>
        </div>
        <div className="block md:flex gap-x-0 md:gap-x-[21.7rem] mt-1 lg:mt-3">
          <div
            className="border-b py-2 border-gray-300
          "
          >
            <span className="mx-2 font-semibold text-gray-500">About</span>
            <span className="mx-2 font-semibold text-gray-500">News Room</span>
            <span className="mx-2 font-semibold text-gray-500">Jobs</span>
            <span className="mx-2 font-semibold text-gray-500">Developers</span>
          </div>
          <div className="mb-4 mt-3 md:mt-0">
            <span className="mx-2 font-semibold text-gray-500">
              &copy; 1999-2023 All rights reserved.
            </span>{" "}
            <br />
            <span className="mx-2 font-semibold text-gray-500">
              Accessibility
            </span>
            <span className="mx-2 font-semibold text-gray-500">Cookies</span>
            <span className="mx-2 font-semibold text-gray-500">Privacy</span>
            <span className="mx-2 font-semibold text-gray-500">Legal</span>
          </div>
        </div>
        <span className="text-sm ml-2 font-semibold text-gray-500">
          PayPal Pte. Ltd. is licensed by the Monetary Authority of Singapore as
          a Major Payment Institution under the Payment Services Act 2019
        </span>
      </div>
    </footer>
  );
};

export default Footer;
