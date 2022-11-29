import React from "react";

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
