import React from "react";
import styles from "./Login.module.css";
// ICONS
import { HiMail } from "react-icons/hi";
import { GiPadlock } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
// ICONS
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./components/input/Input";

const schema = yup.object({
  username: yup.string().required("Please enter your username"),
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

const Register = () => {
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
    reValidateMode: "onChange",
  });
  console.log(isSubmitting);
  console.log(errors);

  const onSubmitRegister = (value) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(value);
      }, 5000);
    });
  };

  return (
    <form
      action=""
      className="register-form col-sm-6 col-xs-12"
      onSubmit={handleSubmit(onSubmitRegister)}
    >
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
          <Input
            type="text"
            control={control}
            name="username"
            placeholder="Họ và tên"
          ></Input>
        </div>
        {errors.username && (
          <p className="mb-4 text-2xl text-red-500">
            {errors.username.message}
          </p>
        )}
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
            name="email"
            placeholder="Nhập email của bạn"
          ></Input>
        </div>
        {errors.email && (
          <p className="mb-4 text-2xl text-red-500">{errors.email.message}</p>
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
            name="password"
            placeholder="Mật khẩu"
          ></Input>
        </div>
        {errors.password && (
          <p className="mb-4 text-2xl text-red-500">
            {errors.password.message}
          </p>
        )}
        <div className="relative flex flex-col items-center group ">
          {/* <button className="w-full h-[40px] mb-4 bg-slate-50 block border border-black rounded-lg hover:bg-slate-700 hover:text-white transition-all delay-100 leading-5">
                Đăng ký
              </button> */}
          <button
            className={`w-full h-[40px] mb-4 bg-slate-50 block border border-black rounded-lg hover:bg-slate-700 hover:text-white transition-all delay-100 leading-5 ${
              isSubmitting ? "opacity-50" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
            ) : (
              "Đăng ký"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
