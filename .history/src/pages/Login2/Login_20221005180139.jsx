import React from "react";
import styles from "./Login.module.css";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className="my-20 login-top">
        <h2 className="mb-4 text-4xl font-light text-center">Đăng nhập bằng</h2>
        <div className="flex flex-row items-center justify-center gap-x-4">
          <button className="rounded-3xl px-3 bg-[#546ea6] text-white flex items-center">
            <span className="mr-4">
              <BsFacebook></BsFacebook>{" "}
            </span>
            Facebook
          </button>
          <button className="rounded-3xl px-3 bg-[#df5656] text-white flex items-center">
            <span className="mr-4">
              <BsFacebook></BsFacebook>{" "}
            </span>
            Google
          </button>
        </div>
      </div>
      <div className="w-full border-black border-bottom"></div>
      <div className="flex-flex-row">
        <form action="" className="login-form"></form>
        <form action="" className="register-form"></form>
      </div>
    </div>
  );
};

export default Login;
