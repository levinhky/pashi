import React from "react";
import styles from "./Login.module.css";
import { BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { GiPadlock } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

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
      <div className="flex flex-row justify-between">
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
                className="w-full pl-14 pr-4 h-[40px] border-none bg-[#f2f2f2] text-[#777] outline-none rounded-lg"
                placeholder="Nhập email của bạn"
              />
            </div>
            <p className="text-2xl text-red-500">Please enter your email</p>

            <div className="relative flex items-center ">
              <span className="absolute top-3 right-1 text-[#ed1846] text-3xl z-1">
                *
              </span>
              <span className="absolute inline-block top-2 left-3">
                <GiPadlock size="22"></GiPadlock>
              </span>
              <input
                type="password"
                className="w-full pl-14 pr-4 h-[40px] border-none bg-[#f2f2f2] text-[#777] outline-none rounded-lg"
                placeholder="Mật khẩu"
              />
            </div>

            <div className="relative flex flex-col items-center group ">
              <button className="w-full h-[40px] mb-5 bg-slate-50 block border border-black rounded-lg hover:bg-slate-700 hover:text-white transition-all delay-100 leading-5">
                Đăng nhập
              </button>
              <a href="sss" className="underline">
                Quên mật khẩu?
              </a>
            </div>
          </div>
        </form>
        {/* Đăng ký */}
        <form action="" className="register-form col-sm-6 col-xs-12">
          <h2 className="m-5 text-3xl font-light text-center">
            Đăng ký thành viên
          </h2>
          <div className="w-[410px] mx-auto my-0">
            <div className="relative flex items-center ">
              <span className="absolute top-3 right-1 text-[#ed1846] text-3xl z-1">
                *
              </span>
              <span className="absolute inline-block top-2 left-3">
                <FaUser size="22"></FaUser>
              </span>
              <input
                type="text"
                className="w-full pl-14 pr-5 h-[40px] mb-[15px] border-none bg-[#f2f2f2] text-[#777] outline-none rounded-lg"
                placeholder="Họ và tên"
              />
            </div>
            <div className="relative flex items-center ">
              <span className="absolute top-3 right-1 text-[#ed1846] text-3xl z-1">
                *
              </span>
              <span className="absolute inline-block top-2 left-3">
                <HiMail size="22"></HiMail>
              </span>
              <input
                type="text"
                className="w-full pl-14 pr-5 h-[40px] mb-[15px] border-none bg-[#f2f2f2] text-[#777] outline-none rounded-lg"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div className="relative flex items-center ">
              <span className="absolute top-3 right-1 text-[#ed1846] text-3xl z-1">
                *
              </span>
              <span className="absolute inline-block top-2 left-3">
                <GiPadlock size="22"></GiPadlock>
              </span>
              <input
                type="password"
                className="w-full pl-14 pr-5 h-[40px] mb-[15px] border-none bg-[#f2f2f2] text-[#777] outline-none rounded-lg"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="relative flex flex-col items-center group ">
              <button className="w-full h-[40px] mb-5 bg-slate-50 block border border-black rounded-lg hover:bg-slate-700 hover:text-white transition-all delay-100 leading-5">
                Đăng ký
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
