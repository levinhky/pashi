import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmitLogin = (value) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(value);
        reset({
          email: "",
          password: "",
          reEmail: "",
        });
      }, 5000);
    });
  };
  return <div></div>;
};

export default ForgotPassword;
