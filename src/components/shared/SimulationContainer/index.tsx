"use client";

// React
import React, { useState } from "react";

// Icons
import * as I from "@/assets/icons";
import InputLabeled from "@/components/UI/Inputs/Labeled";

const SimulationContainer = () => {
  const [currentFlow, setCurrentFlow] = useState<"flight" | "stays">("flight");

  return (
    <>
      <div className="flex justify-center">
        <div className="absolute flex flex-col gap-12 items-center self-center justify-self-center p-7 center bg-white rounded-2xl w-4/5">
          <div className="flex justify-between text-blacklish-green">
            <div
              className={`flex items-center gap-1 py-3 cursor-pointer font-semibold relative before:transition-all before:duration-300 before:absolute before:bottom-0 before:h-1 before:bg-mint-green before:w-full before:rounded-t-sm ${
                currentFlow !== "flight" && "before:opacity-0"
              } text-blacklish-green border-r pr-7 border-blacklish-green border-opacity-30`}
              onClick={() => setCurrentFlow("flight")}
            >
              <I.PlaneIcon />
              Flights
            </div>
            <div
              className={`flex items-center py-3 gap-1 cursor-pointer font-semibold relative before:h-2px before:transition-all before:duration-300 before:absolute before:bottom-0 before:h-1 before:bg-mint-green before:w-full before:rounded-t-sm ${
                currentFlow !== "stays" && "before:opacity-0"
              } text-blacklish-green pl-7`}
              onClick={() => setCurrentFlow("stays")}
            >
              <I.BedIcon />
              Stays
            </div>
          </div>

          <div className="flex w-full gap-7">
            <InputLabeled
              label="From - To"
              placeholder="Lahore - Karachi"
              icon={<I.ArrowSwap />}
              styles="flex-2"
            />
            <InputLabeled
              label="From - To"
              placeholder="Lahore - Karachi"
              icon={<I.ArrowSwap />}
            />
            <InputLabeled
              label="From - To"
              placeholder="Lahore - Karachi"
              icon={<I.ArrowSwap />}
            />
            <InputLabeled
              label="From - To"
              placeholder="Lahore - Karachi"
              icon={<I.ArrowSwap />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SimulationContainer;
