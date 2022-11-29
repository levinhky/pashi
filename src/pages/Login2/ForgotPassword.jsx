import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { HiMail } from "react-icons/hi";
import Input from "./components/input/Input";
import { resetPassword } from "configs/auth";

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
});

const ForgotPassword = ({ children }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
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
        reset({
          email: "",
        });
        resetPassword(value.email);
      }, 500);
    });
  };
  return (
    <form
      className="login-form col-sm-6 col-xs-12"
      onSubmit={handleSubmit(onSubmitLogin)}
    >
      <h2 className="m-5 text-3xl font-light text-center">Quên mật khẩu</h2>
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
            name="email"
            placeholder="Nhập email của bạn"
          ></Input>
        </div>
        {errors.email && (
          <p className="mb-4 text-2xl text-red-500">{errors.email.message}</p>
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
              "Gửi mã xác minh"
            )}
          </button>
          {children}
        </div>
      </div>
    </form>
  );
};

export default ForgotPassword;
