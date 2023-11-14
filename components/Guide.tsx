import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="py-10 bg-gray-200 max-container px-2">
      <div className="container mx-auto flex flex-row items-center ">
        {/* Column 1 */}
        <div className="w-full text-center mb-8 md:mb-0">
          <h2 className="mGuideHeader text-3xl font-bold mb-4 lg:bold-64 xl:max-w-[900px] text-left px-5">
            Optimize productivity<br></br> with our AI chatbot for <br></br>
            seamless business <br></br>automation.
          </h2>
          <p className="text-gray-600 text-left px-5">
            At AI-Ware-Lab, we craft advanced automations simplifying your
            business workflow, enhancing sales, reducing costs, and maximizing
            productivity.
          </p>
        </div>

        {/* Column 2 */}
        <div className="w-full">
          <img
            src="/bot2.png" // Replace with the path to your JPG image
            alt="Column 2 Image"
            className="w-full h-auto md:max-w-xs mx-auto mImageGuide"
            width={600}
            height={500}
          />
          {/* <div className="flex flex-2 items-center justify-end ">
            <Image
              src="/bot2.png"
              alt="phones"
              width={400}
              height={50}
              className="mImageGuide2 h-auto md:max-w-s mx-auto"
            /> 
          </div>*/}
        </div>
      </div>
      <div className="w-full">
        <img
          src="/bot2.png" // Replace with the path to your JPG image
          alt="Column 2 Image"
          className="w-6/12 h-auto md:max-w-xs mx-auto mImageGuide2 imageGuide2"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default Guide;
