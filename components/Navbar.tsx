import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

import CustomButton from "@/components/CustomButton";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const handleScrollToHome = () => {
    const nextSection = document.getElementById("scrollToHome");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToTestimonials = () => {
    const nextSection = document.getElementById("scrollToTestimonials");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToServices = () => {
    const nextSection = document.getElementById("scrollToService");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToContactUSForm = () => {
    const nextSection = document.getElementById("get-in-touch");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        // className="w-full h-20 bg-gray-100  top-0"
        className="flexBetween max-container padding-container relative z-30 py-5 "
      >
        {/* <div className="container mx-auto px-4 h-full"> */}
        {/* <div className="flex justify-between items-center h-full"> */}
        <Logo />
        <button
          type="button"
          className="inline-flex items-center md:hidden bg-green-400 rounded-full p-1"
          onClick={toggle}
        >
          <svg xmlns="" width="40" height="40" viewBox="0 0 24 24">
            <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
          </svg>
        </button>
        <ul
          // className="hidden md:flex gap-x-6 text-white "
          className="hidden h-full gap-12 lg:flex"
        >
          <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {/* <Link href="/about">
                  <p>Home</p>
                </Link> */}
            <CustomButton
              title="Home"
              handleClick={handleScrollToHome}
            ></CustomButton>
          </li>
          <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {/* <Link href="/services">
                  <p>Services</p>
                </Link> */}
            <CustomButton
              title="Services"
              handleClick={handleScrollToServices}
              // containerStyles="text-white rounded-full mt-10 "
            ></CustomButton>
          </li>
          {/* <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            <CustomButton
              title="Pricing"
              handleClick={handleScrollToPricing}
              // containerStyles="text-white rounded-full mt-10 "
            ></CustomButton>
          </li> */}
          <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            <CustomButton
              title="Testimonials"
              handleClick={handleScrollToTestimonials}
              // containerStyles="text-white rounded-full mt-10 "
            ></CustomButton>
          </li>
          {/* <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            <CustomButton
              title="Testimonials"
              handleClick={handleScrollToServices}
              // containerStyles="text-white rounded-full mt-10 "
            ></CustomButton>
          </li> */}
        </ul>
        <div className="hidden md:block">
          {/* <Button /> */}
          <CustomButton
            title="Let's Talk"
            handleClick={handleScrollToContactUSForm}
            containerStyles="bg-green-500 border border-green-300 py-2 px-4 rounded-full transition duration-300 hover:bg-green-500 hover:text-white hover:border-green-500"
          ></CustomButton>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Navbar;
