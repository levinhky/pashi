import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: props.value,
  });
  return (
    <label
      className="flex justify-between items-center mb-4 content-text cursor-pointer w-auto p-[18px] border rounded-lg"
      htmlFor="shipping"
    >
      <input
        type="radio"
        id="shipping"
        className="mr-2 pr-2 border-none rounded-full w-[18px] h-[18px]transition-all relative cursor-pointer outline-0"
      />
      <span className="w-full">FREE SHIP</span>
      <span className="pl-2 whitespace-nowrap font-medium text-[#4d4d4d]">
        0đ
      </span>
    </label>
  );
};

export default Radio;
