import React from "react";
import { useWatch } from "react-hook-form";
import { AiFillCaretDown } from "react-icons/ai";
import useClickOutSide from "../hooks/useClickOutSide";

const Select = ({ control, setValue, name, data, selectLabel, ...props }) => {
  const { show, setShow, nodeRef } = useClickOutSide();

  const selectValue = useWatch({ control, name: props.name });

  return (
    <div className="relative field-select " ref={nodeRef}>
      <label
        htmlFor=""
        className="absolute top-0 w-full px-3 mt-1 mb-3 text-lg font-normal truncate transition-all pointer-events-none z-1 text-[#999] block"
      >
        Tỉnh / thành
      </label>
      <span className="absolute top-0 bottom-0 right-0 w-[50px] place-content-center bg-center icon">
        <AiFillCaretDown className="h-full m-auto"></AiFillCaretDown>
      </span>
      <select
        name=""
        id=""
        className="text-2xl shadow-md block transition-all text-[#333] w-full break-normal p-[17px_40px_5px_11px] rounded-lg focus:shadow-[0_0_0_2px_#338dbc] focus:outline-none focus:ring-sky-500 delay-300"
      >
        <option value="">Chọn tỉnh / thành</option>
        <option value="">TP.HCM</option>
        <option value="">HN</option>
        <option value="">Thanh Hóa</option>
        <option value="">Hải Phòng</option>
      </select>
    </div>
  );
};

export default Select;
