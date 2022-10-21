import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ control, text, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: props.value,
  });
  return (
    <label
      className="flex justify-between items-center mb-4 content-text cursor-pointer w-auto p-[18px] border rounded-lg"
      htmlFor={props.for}
    >
      <input
        type="radio"
        {...field}
        id={props.for}
        value={props.value}
        checked={props.checked}
        // className="hidden"
        className="mr-2 pr-2 border-none rounded-full w-[18px] h-[18px]transition-all relative cursor-pointer outline-0"
      />
      <span className="w-full">{text}</span>
    </label>
  );
};

export default Radio;
