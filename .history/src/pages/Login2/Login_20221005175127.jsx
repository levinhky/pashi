import React from "react";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
  return (
    <div className="mt-28">
      <div className="">
        <h2 className="text-4xl font-light text-center">Đăng nhập bằng</h2>
        <div className="flex flex-col items-center justify-between login-top">
          <button className="rounded-3xl px-3 bg-[#546ea6] text-white flex items-center mr-4">
            <span className="mr-4">
              <BsFacebook></BsFacebook>{" "}
            </span>
            Facebook
          </button>
          <button className="rounded-3xl px-3 bg-[#546ea6] text-white flex items-center">
            <span className="mr-4">
              <BsFacebook></BsFacebook>{" "}
            </span>
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
