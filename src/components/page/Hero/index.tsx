// React
import React from "react";

// Components
import Header from "@/components/global/Header";
import SimulationContainer from "@/components/shared/SimulationContainer";

const Hero = () => {
  return (
    <div className="bg-hero bg-center 2xl:bg-bottom bg-no-repeat rounded-2xl bg-cover h-hero m-5 relative">
      <Header colorMode="light" />

      <div className="text-white flex flex-col items-center mt-12">
        <p className="font-bold font-heading leading-8 text-xl sm:text-2xl md:text-3xl">
          Helping Others
        </p>
        <h2 className="font-bold font-heading text-center text-3xl sm:text-6xl md:text-7xl lg:text-9xl">
          LIVE & TRAVEL
        </h2>
        <p className="font-semibold text-sm sm:text-md md:text-lg">
          Special offers to suit your plan
        </p>
      </div>

      {/* <SimulationContainer /> */}
    </div>
  );
};

export default Hero;
