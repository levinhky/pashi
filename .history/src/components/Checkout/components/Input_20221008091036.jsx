import React from "react";
import { useController } from "react-hook-form";
const Input = ({ control, ...props }) => {
  const { field } = useController;
  return (
    <input
      type="text"
      className="w-full border shadow-md focus:ring-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 transition-all delay-300 bg-white text-[#333] rounded-md p-[10px_40px_10px_12px] mb-4"
      {...field}
      {...props}
    />
  );
};

export default Input;
