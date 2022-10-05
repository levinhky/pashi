import React from "react";
import styles from "./Login.module.css";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className="my-20 login-top">
        <h2 className="mb-4 text-3xl font-light text-center">Đăng nhập bằng</h2>
        <div className="flex flex-row items-center justify-center gap-x-4">
          <button className="rounded-3xl px-3 bg-[#546ea6] text-white flex items-center">
            <span className="mr-4">
              <BsFacebook></BsFacebook>
            </span>
            Facebook
          </button>
          <button className="rounded-3xl px-3 bg-[#df5656] text-white flex items-center">
            <span className="mr-4">
              <BsFacebook></BsFacebook>
            </span>
            Google
          </button>
        </div>
      </div>
      <div className="relative border-[#dfdfdf] border-bottom">
        <span className="absolute inline-block text-2xl text-[#999] bg-white p-2 -translate-x-2/4 left-2/4 -top-5 font-medium">
          HOẶC
        </span>
      </div>
      <div className="flex flex-row items-center justify-between">
        <form action="" className="login-form col-sm-6 col-xs-12">
          <h2 className="m-5 text-3xl font-light text-center">Đăng nhập</h2>
          <div className="w-[410px] mx-auto my-0">
            <div className="relative block">
              <span className="absolute top-3 right-1 text-[#ed1846] text-xl z-1">
                *
              </span>
              <span className="">{/* <HiMail></HiMail> */}</span>
              <span>{/* <AiFillLock></AiFillLock> */}</span>
            </div>
          </div>
        </form>
        <form action="" className="register-form">
          <h2 className="m-5 text-3xl font-light text-center">
            Đăng ký thành viên mới
          </h2>
          <div className="w-[410px] mx-auto my-0">
            <div className="relative block">
              <span className="absolute top-3 right-1 text-[#ed1846] text-xl z-1">
                *
              </span>
              <span className=""></span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
