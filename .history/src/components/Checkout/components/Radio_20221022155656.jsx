import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ control, className, text, price, children, ...props }) => {
  const { field } = useController({
    control,
    className: (props.className = ""),
    name: props.name,
    defaultValue: props.value,
  });
  return (
    <label
      className={`flex justify-between items-center content-text cursor-pointer w-auto border rounded-lg ${className} custom-radio`}
      // htmlFor={props.for}
    >
      <input
        type="radio"
        {...field}
        id={props.for}
        value={props.value}
        checked={props.checked}
        // className="hidden"
        className="hidden"
      />
      <div className="h-8 mx-4 transition-all border rounded-full w-9"></div>
      <img
        src={props.img}
        alt={props.imgAlt}
        className={`mr-3 w-[40px] h-[40px] ${props.classNameImg}`}
      />
      <span className="w-full">{text}</span>
      <span className="pl-2 whitespace-nowrap font-medium text-[#4d4d4d]">
        {price}
      </span>
      {children}
    </label>
  );
};

export default Radio;
