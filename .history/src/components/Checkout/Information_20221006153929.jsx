import React from "react";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="flex flex-row-reverse">
      <div className="flex flex-col flex-auto pt-16 main">
        <div className="header">
          <Link to="/" className="text-3xl font-medium">
            Pashi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Information;
