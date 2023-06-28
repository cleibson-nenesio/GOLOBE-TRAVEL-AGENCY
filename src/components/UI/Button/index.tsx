// React
import React from "react";

// Types
import { IButton } from "./types";

const Button = ({
	children,
	styles,
	icon,
	backgroundColor = "bg-blackish-green",
	...rest
}: IButton) => {
	return (
		<>
			<button
				className={`px-4 py-4 text-white rounded-md font-semibold flex gap-1 ${backgroundColor} ${styles}`}
				{...rest}
			>
				<span>{icon}</span>
				{children}
			</button>
		</>
	);
};

export default Button;
