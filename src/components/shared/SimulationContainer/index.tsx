"use client";

// React
import React, { useState } from "react";

// Icons
import * as I from "@/assets/icons";

const SimulationContainer = () => {
  const [currentFlow, setCurrentFlow] = useState<"flight" | "stays">("flight");

  return (
    <>
      <div className="absolute w-full max-w-6xl left-1/2 -translate-x-1/2 -bottom-5 p-5 bg-white shadow-primary-shadow rounded-2xl flex flex-col gap-11">
        <div className="flex">
          <div className="flex items-center gap-2 relative before:absolute mr-7 before:-bottom-5 before:h-1 before:bg-mint-green before:w-full">
            <I.PlaneIcon />
            <span>Fligths</span>
          </div>
          <span className="h-10 w-px bg-slate-200 inline-block" />
          <div className="flex items-center gap-2 relative before:absolute ml-7 before:-bottom-5 before:h-1 before:bg-mint-green before:w-full">
            <I.BedIcon />
            <span>Stays</span>
          </div>
        </div>

        <div>Aqui vão os inputs...</div>
      </div>
    </>
  );
};

export default SimulationContainer;
