// React
import React from "react";

// Types
import { CalendarRangeHeaderProps } from "./types";

// Icons
import * as I from "@/assets/icons";

// Libraries
import moment from "moment";

const Header: React.FC<CalendarRangeHeaderProps> = ({
	date,
	changeMonth,
	changeYear,
	decreaseMonth,
	increaseMonth,
	nextMonthButtonDisabled,
	prevMonthButtonDisabled,
}) => {
	return (
		<div className="p-2 flex justify-between items-center">
			<button
				className="p-1 rounded bg-blacklish-green flex justify-center items-center rotate-180"
				onClick={decreaseMonth}
				disabled={prevMonthButtonDisabled}
			>
				<I.ChevronRightIcon color="#fff" />
			</button>

			<span className="text-md font-montserrat">
				{moment(date)?.format("DD MMMM YYYY")}
			</span>

			<button
				className="p-1 rounded bg-blacklish-green flex justify-center items-center"
				onClick={increaseMonth}
				disabled={nextMonthButtonDisabled}
			>
				<I.ChevronRightIcon color="#fff" />
			</button>
		</div>
	);
};

export default Header;
