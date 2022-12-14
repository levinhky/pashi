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
    <div
      className="relative focus:shadow-[0_0_0_2px_#338dbc] focus:outline-none focus:ring-sky-500 delay-200 shadow-md transition-all focus:ring-2 focus:border-transparent select-none mb-4"
      ref={nodeRef}
    >
      <div
        className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <span className="whitespace-nowrap">{label}</span>
        <span className="flex items-center place-content-center gap-x-4 icon">
          <div className="h-[20px] line border-[#e1e1e1] border-r-2 border-y-0 border-l-0 w-1 line"></div>
          <AiFillCaretDown className=""></AiFillCaretDown>
        </span>
      </div>
      <div
        className={`absolute top-full left-0 w-full rounded-lg border bg-white ${
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
