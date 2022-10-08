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
        className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-lg cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span>{label}</span>
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
        className={`absolute top-full left-0 w-full rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {data.map((item, index) => (
          <div
            className="p-5 cursor-pointer hover:bg-gray-100"
            onClick={handleClickSelectItem}
            data-value={item.value}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
      </div>
      {/* <div
        name=""
        id=""
        className={`text-2xl shadow-md block transition-all text-[#333] w-full break-normal p-[17px_40px_5px_11px] rounded-lg focus:shadow-[0_0_0_2px_#338dbc] focus:outline-none focus:ring-sky-500 delay-300 ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {data.map((item, index) => (
          <div
            value={item.value}
            className="cursor-pointer"
            onClick={handleClickSelectItem}
            data-value={item.value}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Select;
