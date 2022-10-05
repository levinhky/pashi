import React from "react";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
  return (
    <div className="mt-28">
      <div className="">
        <h2 className="text-4xl font-light text-center">Đăng nhập bằng</h2>
        <div className="flex flex-col items-center justify-between login-top">
          <button className="bg-[#546ea6] text-white ">
            <span className="">
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
