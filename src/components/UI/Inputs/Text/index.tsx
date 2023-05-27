// React
import React from "react";

// Types
import { ITextInput } from "./types";

const TextInput = ({ placeholder, ...rest }: ITextInput) => {
  return (
    <>
      <input
        type="text"
        className="p-3 w-full text-md rounded"
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};

export default TextInput;
