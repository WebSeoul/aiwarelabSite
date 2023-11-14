"use client";
import Image from "next/image";
import Button from "./Button";

import CustomButton from "@/components/CustomButton";

const Hero = () => {
  const handleScrollToContactUSForm = () => {
    const nextSection = document.getElementById("get-in-touch");

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
  return (
    <section
      // className="max-container padding-container flex flex-col w-8/12 gap-20 py-10 pb-32 md:gap-28 lg:py-5 xl:flex-row"
      className="flexCenter w-full flex-col px-8 py-8 "
      id="scrollToHome"
    >
      {/* <div className="hero-map" /> */}
      <div
        // className="padding-container flex-col max-container w-full pb-24 "
        className="z-20 flex flex-1 flex-row items-start justify-center  "
      >
        <div
          // className="relative z-20 flex flex-1 flex-col xl:w-1/2 "
          className="z-20 flex w-8/12 flex-1 flex-col items-start justify-center"
        >
          <h1
            // className="bold-52 lg:bold-38"
            className="bold-30 lg:bold-64 xl:max-w-[770px]"
          >
            Unleashing the Power of AI Automation for Businesses.
          </h1>
          <p
            // className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]"
            className="regular-16 text-gray-30 xl:max-w-[520px]"
          >
            We seamlessly connect AI principles with real-world results,
            positioning your business at the forefront of technological
            progress. Allow us to propel your visions from concept to triumph
            within the dynamic realm of evolving technology.
          </p>

          {/*  
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div> 

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div> */}

          <div className="flex flex-col w-full gap-4 sm:flex-row py-6">
            {/* <Button type="button" title="Let's Talk" variant="btn_green"  /> */}

            <CustomButton
              title="Let's Talk"
              handleClick={handleScrollToContactUSForm}
              // containerStyles="text-white rounded-full mt-10 "
              containerStyles="bg-green-500 border border-green-300 py-2 px-4 rounded-full transition duration-300 hover:bg-green-500 hover:text-white hover:border-green-500"
            ></CustomButton>
            {/* <button
              className="bg-white border border-green-300 py-2 px-4 rounded-full transition duration-300 hover:bg-green-500 hover:text-white hover:border-green-500"
              // icon="/play.svg"
              //variant="btn_white"
            >
              Our Services
            </button> */}
            {/* <button className="bg-white border border-green-300 py-2 px-4 rounded-full transition duration-300 hover:bg-green-500 hover:text-white hover:border-green-500"> */}
            <CustomButton
              title="Our Services"
              handleClick={handleScrollToServices}
              // containerStyles="text-white rounded-full mt-10 "
              containerStyles="bg-white border border-green-300 py-2 px-4 rounded-full transition duration-300 hover:bg-green-500 hover:text-white hover:border-green-500"
            ></CustomButton>
            {/* </button> */}
          </div>
        </div>
        <div className="flex flex-2 items-center justify-end ">
          <Image
            src="/195.png"
            alt="phones"
            width={500}
            height={50}
            className="mImage"
          />
        </div>
      </div>
      {/*  
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div> 
      </div>
      */}
    </section>
  );
};

export default Hero;
