import React from "react";
import { useController } from "react-hook-form";
const Input = ({ field }) => {
  return (
    <input
      type="text"
      className="w-full pl-14 pr-5 h-[40px] mb-4 border-none bg-[#f2f2f2] text-[#777] outline-none rounded-lg"
    />
  );
};

export default Input;
