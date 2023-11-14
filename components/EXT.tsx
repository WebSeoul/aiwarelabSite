<section
  // className="flexCenter flex-col py-10"
  className="flexCenter w-full flex-col  py-5"
>
  <div className="flexCenter max-container relative w-8/12 ">
    <Image
      src="/aimg2.jpg"
      alt="boat"
      width={1440}
      height={580}
      className="w-full object-cover object-center 2xl:rounded-5xl"
    />

    {/* <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">

            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>

          </div>
          
        </div>
          */}
  </div>

  <div
    // className="padding-container flex-col max-container w-full pb-24 "
    className="z-20 flex w-8/12 flex-1 flex-row items-start justify-center gap-10"
  >
    <div className="flex flex-2 items-center justify-end py-10 ">
      <Image src="/bot5.jpg" alt="phones" width={400} height={500} />
    </div>
    <div className="padding-container max-container  pb-10 ">
      {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
      {/* <p className="uppercase regular-18 -mt-1 mb-3 text-green-50 px-0"> 
            We are here for you
          </p>*/}
      <div
        // className="flex flex-wrap justify-between flex-col gap-5 px-10  lg:gap-10"
        // className="bold-30 lg:bold-64 xl:max-w-[800px] px-20"
        className="z-20 flex w-8/12 flex-1 flex-col items-start justify-center"
      >
        <h2
          className="bold-40 lg:bold-64 xl:max-w-[750px] px-40"
          // className="bold-40 lg:bold-38"
        >
          Boost your productivity by getting your business fully automated.
        </h2>
        <p
          // className="regular-16 text-gray-30 xl:max-w-[520px] px-20"
          className="regular-16 text-gray-30 xl:max-w-[520px] px-40"
        >
          We at Lucid-Wave AI develop complex automations to simply you business
          workflow. which helps boost sales, save cost and increase
          productivity.
        </p>
      </div>
    </div>
  </div>
</section>;
