import { FacebookIcon } from "@/assets/icons";
import React from "react";

const InputLabeled = ({ label, icon, placeholder, styles, ...rest }: any) => {
  return (
    <>
      <div className="w-full relative">
        <label
          htmlFor={label}
          className={"absolute -top-3 left-3 bg-white px-1" + styles}
        >
          {label}
        </label>
        <input
          id={label}
          className="appearance-none border border-blacklish-green rounded-md w-full h-full px-3 py-4"
          {...rest}
        />
        <span className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none">
          {icon}
        </span>
        <div className="absolute top-1/2 -translate-y-1/2 pl-3 text-blacklish-green opacity-70">
          {placeholder}
        </div>
      </div>
    </>
  );
};

export default InputLabeled;
