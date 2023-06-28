"use client";

// Next
import { usePathname } from "next/navigation";

// React
import React, { useState } from "react";

// Icons
import * as I from "@/assets/icons";
import InputDefault from "@/components/UI/Inputs/Default";
import SelectDefault from "@/components/UI/Inputs/Select";
import InputCalendarRange from "@/components/UI/Inputs/CalendarRange";
import Button from "@/components/UI/Button";

const SimulationContainer = () => {
	const [currentFlow, setCurrentFlow] = useState<"flight" | "stays">("flight");

	const pathName = usePathname();

	const handleSelectFlightFlow = () => setCurrentFlow("flight");
	const handleSelectStaysFlow = () => setCurrentFlow("stays");

	const tripOptions = [
		{
			label: "One way",
			value: "one-way",
		},
		{
			label: "Round trip",
			value: "round-trip",
		},
		{
			label: "Multi-city",
			value: "multi-city",
		},
		{
			label: "Open jaw",
			value: "open-jaw",
		},
	];

	return (
		<>
			<div className="absolute w-full max-w-6xl left-1/2 -translate-x-1/2 -bottom-5 p-5 bg-white shadow-primary-shadow rounded-2xl flex flex-col gap-11">
				<div className="flex">
					{pathName === "/" && (
						<>
							<div
								className={`flex items-center gap-2 relative mr-7 cursor-pointer before:absolute before:-bottom-5 before:h-1 before:bg-mint-green before:w-full before:transition-all before:duration-300 ${
									currentFlow === "flight" ? "" : "before:opacity-0"
								}`}
								onClick={handleSelectFlightFlow}
							>
								<I.PlaneIcon />
								<span className="font-semibold">Fligths</span>
							</div>

							<span className="h-10 w-px bg-slate-300 inline-block" />

							<div
								className={`flex items-center gap-2 relative ml-7 cursor-pointer before:absolute before:-bottom-5 before:h-1 before:bg-mint-green before:w-full before:transition-all before:duration-300 ${
									currentFlow === "stays" ? "" : "before:opacity-0"
								}`}
								onClick={handleSelectStaysFlow}
							>
								<I.BedIcon />
								<span className="font-semibold">Stays</span>
							</div>
						</>
					)}
					{pathName !== "/" && <h2>Where are you flying? </h2>}
				</div>

				<div className="flex gap-2 w-full">
					<InputDefault
						label="From - To"
						icon={<I.ArrowSwap />}
						placeholder="Choose your destiny"
					/>
					<SelectDefault
						label="Trip"
						getCurrentValue={(currentValue) => console.log(currentValue)}
						options={tripOptions}
					/>
					<InputCalendarRange label="Depart - Return" />
				</div>

				<div className="w-full flex justify-end">
					<Button icon={<I.PlaneIcon color="#fff" />}>Show Flights</Button>
				</div>
			</div>
		</>
	);
};

export default SimulationContainer;
