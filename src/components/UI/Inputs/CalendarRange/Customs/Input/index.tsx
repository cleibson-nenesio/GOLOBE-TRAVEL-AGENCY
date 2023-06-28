import React, { forwardRef } from "react";

export const CustomInput = forwardRef(({ value, onClick }: any, ref) => (
	<div onClick={onClick} ref={ref as any} className="cursor-pointer">
		{value}
	</div>
));

CustomInput.displayName = "CustomInput";
