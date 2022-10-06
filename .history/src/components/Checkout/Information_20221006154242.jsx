import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="flex flex-row-reverse">
      <div className="flex flex-col flex-auto pt-16 main">
        <div className="header">
          <Link to="/" className="text-5xl font-medium">
            Pashi
          </Link>
          <ul className="mt-4">
            <li className="inline-block text-lg text-[#999]">
              <Link to="/cart">Giỏ hàng</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Information;
