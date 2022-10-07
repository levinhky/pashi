import React from "react";
import styles from "./Login.module.css";
import {
  createUser,
  logInUser,
  signInWithFacebook,
  signInWithGoogle,
} from "configs/auth";
// ICONS
import { BsFacebook } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { GiPadlock } from "react-icons/gi";
import { AiFillGooglePlusCircle } from "react-icons/ai";
// ICONS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./components/input/Input";
import Register from "./Register";

const schema = yup.object({
  email: yup
    .string()
    .email(
      // "Please enter valid email address"
      "Vui lòng nhập địa chỉ email hợp lệ"
    )
    .required(
      // "Please enter your email address"
      "Hãy điền địa chỉ email của bạn"
    ),
  password: yup
    .string()
    .min(
      8,
      // "Your password must be at least 8 characters long or greater"
      "Mật khẩu của bạn phải dài ít nhất 8 ký tự trở lên"
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          // "Your password must have at least 8 characters, 1 uppercase, 1 lowercase, 1 special character"
          "Mật khẩu của bạn phải có ít nhất 8 ký tự, 1 chữ hoa, 1 chữ thường, 1 ký tự đặc biệt",
      }
    )
    .required("Vui lòng nhập mật khẩu"),
});

const Login = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  console.log(isSubmitting);
  console.log(errors);

  const onSubmitLogin = (value) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(value);
      }, 5000);
    });
  };

  return (
    <div className={styles["wrapper"]}>
      <div className="my-20 login-top">
        <h2 className="mb-4 text-3xl font-light text-center">Đăng nhập bằng</h2>
        <div className="flex flex-row items-center justify-center gap-x-4">
          <button
            className="max-w-[110px] h-full rounded-3xl py-2 px-3 bg-[#546ea6] text-white flex items-center hover:bg-[#b2c9fb] transition-all"
            onClick={signInWithFacebook}
          >
            <span className="mr-4">
              <BsFacebook size="18"></BsFacebook>
            </span>
            Facebook
          </button>
          <button
            className="max-w-[110px] h-full rounded-3xl py-2 px-3 bg-[#df5656] text-white flex items-center hover:bg-[#ffb5b5] transition-all"
            onClick={signInWithGoogle}
          >
            <span className="h-full mr-4">
              <AiFillGooglePlusCircle size="18"></AiFillGooglePlusCircle>
            </span>
            Google
          </button>
        </div>
      </div>
      {/* =========================================== LINE =========================================== */}
      <div className="relative border-[#dfdfdf] border-bottom">
        <span className="absolute inline-block text-2xl text-[#999] bg-white p-2 -translate-x-2/4 left-2/4 -top-5 font-medium">
          HOẶC
        </span>
      </div>
      {/* =========================================== FORM =========================================== */}
      <div className="flex flex-row justify-between">
        <form
          action=""
          className="login-form col-sm-6 col-xs-12"
          onSubmit={handleSubmit(onSubmitLogin)}
        >
          <h2 className="m-5 text-3xl font-light text-center">Đăng nhập</h2>
          <div className="w-[410px] mx-auto my-0">
            <div className="relative flex items-center ">
              <span className="absolute top-3 right-1 text-[#ed1846] text-3xl z-1">
                *
              </span>
              <span className="absolute inline-block top-2 left-3">
                <HiMail size="22"></HiMail>
              </span>
              <Input
                type="email"
                control={control}
                name="emaillogin"
                placeholder="Nhập email của bạn"
              ></Input>
            </div>
            {errors.emaillogin && (
              <p className="mb-4 text-2xl text-red-500">
                {errors.emaillogin.message}
              </p>
            )}

            <div className="relative flex items-center ">
              <span className="absolute top-3 right-1 text-[#ed1846] text-3xl z-1">
                *
              </span>
              <span className="absolute inline-block top-2 left-3">
                <GiPadlock size="22"></GiPadlock>
              </span>
              <Input
                type="password"
                control={control}
                name="passwordlogin"
                placeholder="Mật khẩu"
              ></Input>
            </div>
            {errors.passwordlogin && (
              <p className="mb-4 text-2xl text-red-500">
                {errors.passwordlogin.message}
              </p>
            )}
            <div className="relative flex flex-col items-center group ">
              <button
                className={`w-full h-[40px] mb-4 bg-slate-50 block border border-black rounded-lg hover:bg-slate-700 hover:text-white transition-all delay-100 leading-5 ${
                  isSubmitting ? "opacity-50" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
                ) : (
                  "Đăng nhập"
                )}
              </button>
              <a href="sss" className="underline">
                Quên mật khẩu?
              </a>
            </div>
          </div>
        </form>
        {/* Đăng ký */}
        <Register></Register>
      </div>
    </div>
  );
};

export default Login;
