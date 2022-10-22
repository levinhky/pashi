import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ control, className, text, price, ...props }) => {
  const { field } = useController({
    control,
    className: (props.className = ""),
    name: props.name,
    defaultValue: props.value,
  });
  return (
    <label
      className={`flex justify-between items-center content-text cursor-pointer w-auto p-[18px] border rounded-lg ${className}`}
      // htmlFor={props.for}
    >
      <input
        type="radio"
        {...field}
        id={props.for}
        value={props.value}
        checked={props.checked}
        // className="hidden"
        className={`mr-2 pr-2 border-none rounded-full w-[18px] h-[18px]transition-all relative cursor-pointer outline-0 ${props.className}`}
      />
      <img
        src={props.img}
        alt={props.imgAlt}
        className="mr-3 w-[40px] h-[40px]"
      />
      <span className="w-full">{text}</span>
      <span className="pl-2 whitespace-nowrap font-medium text-[#4d4d4d]">
        {price}
      </span>
    </label>
  );
};

export default Radio;
