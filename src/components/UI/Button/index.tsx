// React
import React from "react";

// Types
import { IButton } from "./types";

const Button = ({ children, styles }: IButton) => {
  return (
    <>
      <button
        className={`px-4 py-4 bg-blacklish-green text-white rounded-md font-semibold ${styles}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
