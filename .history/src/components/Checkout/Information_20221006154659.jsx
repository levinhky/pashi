import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
const Information = () => {
  return (
    <div className="flex flex-row-reverse">
      <div className="flex flex-col flex-auto pt-16 main">
        <div className="header">
          <Link to="/" className="text-5xl font-medium">
            Pashi
          </Link>
          <ul className="flex mt-4">
            <li className="inline-block text-xl text-[#338dbc]">
              <Link to="/cart">Giỏ hàng</Link>
            </li>
            <span>
              <AiOutlineRight></AiOutlineRight>{" "}
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Information;
