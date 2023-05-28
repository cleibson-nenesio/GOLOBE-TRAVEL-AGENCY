// React
import React from "react";

// Types
import { ITextInput } from "./types";

// Icons
import * as I from "@/assets/icons";

const TextInput = ({ placeholder, error, ...rest }: ITextInput) => (
  <div className="relative w-full">
    <input
      type="text"
      className={`p-3 w-full min-h-full text-md rounded ${
        error && "outline-slamon border border-slamon"
      }`}
      placeholder={placeholder}
      {...rest}
    />

    {error && (
      <>
        <span
          className="absolute top-1/2 -translate-y-1/2 right-4 before:absolute before:w-max before:content-[attr(data-tip)] before:-top-12 before:z-10 before:px-4 before:py-2 before:transition-all before:duration-200 before:bg-slamon before:text-white before:font-semibold before:right-0 before:rounded-md before:hidden after:absolute after:left-1/2 after:-top-4 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-slamon after:border-l-transparent after:border-b-transparent after:border-r-transparent after:hidden hover:after:block hover:before:block"
          data-tip={error}
        >
          <I.WarnIcon />
        </span>
      </>
    )}
  </div>
);

export default TextInput;
