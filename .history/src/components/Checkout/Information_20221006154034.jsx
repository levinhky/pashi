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
          <ul className="mt-4"></ul>
        </div>
      </div>
    </div>
  );
};

export default Information;
