import React, { Fragment, useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import { AiFillCaretDown } from "react-icons/ai";
import useClickOutSide from "../hooks/useClickOutSide";

const Select = ({ control, setValue, name, data, selectLabel, ...props }) => {
  const { show, setShow, nodeRef } = useClickOutSide();

  const selectValue = useWatch({ control, name: props.name, defaultValue: "" });

  const handleClickSelectItem = (e) => {
    setValue(name, e.target.dataset.value);
    setShow(false);
    setLabel(e.target.textContent);
  };

  const [label, setLabel] = useState(selectLabel);

  useEffect(() => {
    if (selectValue === "") setLabel(selectLabel);
  }, [selectLabel, selectValue]);

  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
        <span className="place-content-center icon">
          <AiFillCaretDown className=""></AiFillCaretDown>
        </span>
      </div>
      {/* <div className="absolute label">
        <label
          htmlFor=""
          className="top-0 w-full px-3 mt-1 mb-3 text-lg font-normal truncate transition-all pointer-events-none z-1 text-[#999] block"
          onClick={() => setShow(!show)}
        >
          {label}
        </label>
        <span className="top-0 bottom-0 right-0 w-[50px] place-content-center bg-center icon">
          <AiFillCaretDown className="h-full m-auto"></AiFillCaretDown>
        </span>
      </div> */}
      <div
        className={`absolute top-full left-0 w-full rounded-lg bg-white focus:shadow-[0_0_0_2px_#338dbc] focus:outline-none focus:ring-sky-500 delay-200 shadow-md transition-all ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {data.map((item, index) => (
          <div
            className="p-3 cursor-pointer hover:bg-blue-300"
            onClick={handleClickSelectItem}
            data-value={item.value}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
