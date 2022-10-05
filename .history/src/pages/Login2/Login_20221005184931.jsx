import React from "react";
import styles from "./Login.module.css";
import { BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { AiFillLock } from "react-icons/ai";

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
            <div className="relative flex items-center ">
              <span className="absolute top-3 right-1 text-[#ed1846] text-3xl z-1">
                *
              </span>
              <span className="absolute inline-block top-2 left-3">
                <HiMail size="22"></HiMail>
              </span>
              <input
                type="text"
                className="w-full pl-14 pr-4 py-2 h-[40px] mb-[15px] border-none bg-[#f2f2f2] text-[#777] outline-none rounded-lg"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div className="relative flex items-center ">
              <span className="absolute top-3 right-1 text-[#ed1846] text-3xl z-1">
                *
              </span>
              <span className="absolute inline-block top-2 left-3">
                <AiFillLock size="22"></AiFillLock>
              </span>
              <input
                type="password"
                className="w-full pl-14 pr-4 py-2 h-[40px] mb-[15px] border-none bg-[#f2f2f2] text-[#777] outline-none rounded-lg"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="relative flex flex-col items-center group hover:bg-sky-500">
              <button className="w-full h-[40px] mb-5 bg-transparent block border border-black rounded-lg group-hover:bg-black transition-all">
                Đăng nhập
              </button>
              <a href="sss">Quên mật khẩu?</a>
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
