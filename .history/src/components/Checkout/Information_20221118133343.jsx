import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Input from "./components/Input";
import Select from "./components/Select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import styled from "styled-components";
import Button from "./components/Button";

const InformationStyles = styled.div`
  @media screen and (min-width: 1000px) {
    width: 100%;
    padding-right: 6%;
    .container-form {
      flex-direction: column;
    }
    .main {
      padding-top: 4em;
    }
  }
  @media (min-width: 750px) {
    padding-top: 21px;
  }
  @media screen and (max-width: 999px) {
    .main-header {
      display: none;
    }
    .content {
    }
    .heading {
      font-size: 18px;
    }
    .title {
      font-size: 16px;
    }
  }
`;

const dataSelect = [
  {
    id: 1,
    text: "TP.HCM",
    value: "hcm",
  },
  {
    id: 2,
    text: "Hà Nội",
    value: "hanoi",
  },
  {
    id: 3,
    text: "Thừa Thiên Huế",
    value: "hue",
  },
];

const schema = yup.object({
  username: yup.string().required("Vui lòng nhập họ tên của bạn."),
  email: yup
    .string()
    .email("Vui lòng nhập địa chỉ email hợp lệ")
    .required("Hãy điền địa chỉ email của bạn"),
  phoneNumber: yup
    .string()
    .phone("VN", true, "Vui lòng nhập đúng số điện thoại của bạn.")
    .required("Vui lòng nhập đúng số điện thoại của bạn."),
  address: yup.string().required("Vui lòng nhập địa chỉ của bạn."),
  province: yup
    .string()
    .required("Vui lòng chọn tỉnh / thành")
    .oneOf(["hcm", "hanoi", "hue"]),
  district: yup
    .string()
    .required("Vui lòng chọn quận / huyện")
    .oneOf(["hcm", "hanoi", "hue"]),
  wards: yup
    .string()
    .required("Vui lòng chọn phường / xã")
    .oneOf(["hcm", "hanoi", "hue"]),
});

const Information = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  // console.log(isSubmitting);
  // console.log(errors);

  const onSubmitHandler = (values) => {
    console.log(values);
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
        // reset({});
      }, 5000);
    });
  };
  useEffect(() => {
    document.title = "Checkout";
  }, []);

  return (
    <InformationStyles>
      <form
        className="flex flex-col flex-auto main container-form"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="pb-4 header z-1 main-header">
          <Link to="/" className="text-5xl font-medium ">
            Pashi
          </Link>
          <ul className="flex items-center mt-4">
            <li className="inline-block text-xl text-[#338dbc]">
              <Link to="/cart">Giỏ hàng</Link>
            </li>
            <span className="mx-2">
              <AiOutlineRight size="14"></AiOutlineRight>
            </span>
            <li className="inline-block text-xl text-[#4d4d4d]">
              Thông tin giao hàng
            </li>
            <span className="mx-2">
              <AiOutlineRight size="14"></AiOutlineRight>
            </span>
            <li className="inline-block text-xl text-[#999999]">
              Phương thức thanh toán
            </li>
          </ul>
        </div>
        <div className="pb-16 content">
          <div className="relative z-10">
            <h2 className="mb-4 text-[#333] text-3xl heading">
              Thông tin giao hàng
            </h2>
            <div className="flex items-center mb-4 content-text title">
              <p>
                Bạn đã có tài khoản?{" "}
                <Link to="" className="text-[#338dbc]">
                  Đăng nhập
                </Link>
              </p>
            </div>
            <div className="enter">
              <Input
                name="username"
                id="username"
                placeholder="Họ và tên"
                control={control}
                type="text"
              ></Input>
              {errors.username && (
                <p className="mb-4 text-2xl text-red-500">
                  {errors.username.message}
                </p>
              )}
              <div className="grid grid-cols-2 gap-x-2">
                <div>
                  <Input
                    name="email"
                    id="email"
                    placeholder="Email"
                    control={control}
                    type="text"
                  ></Input>
                  {errors.email && (
                    <p className="mb-4 text-2xl text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Số điện thoại"
                    control={control}
                    type="text"
                  ></Input>
                  {errors.phoneNumber && (
                    <p className="mb-4 text-2xl text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>
              <Input
                name="address"
                id="address"
                placeholder="Địa chỉ"
                control={control}
                type="text"
              ></Input>
              {errors.address && (
                <p className="mb-4 text-2xl text-red-500">
                  {errors.address.message}
                </p>
              )}
              <div className="grid grid-cols-3 gap-x-2 select">
                <div>
                  <Select
                    control={control}
                    setValue={setValue}
                    name="province"
                    data={dataSelect}
                    selectLabel="Chọn tỉnh / thành"
                  ></Select>
                  {errors.province && (
                    <p className="mb-4 text-2xl text-red-500">
                      {errors.province.message}
                    </p>
                  )}
                </div>
                <div>
                  <Select
                    control={control}
                    setValue={setValue}
                    name="district"
                    data={dataSelect}
                    selectLabel="Chọn quận / huyện"
                  ></Select>
                  {errors.district && (
                    <p className="mb-4 text-2xl text-red-500">
                      {errors.district.message}
                    </p>
                  )}
                </div>
                <div>
                  <Select
                    control={control}
                    setValue={setValue}
                    name="wards"
                    data={dataSelect}
                    selectLabel="Chọn phường / xã"
                  ></Select>
                  {errors.wards && (
                    <p className="mb-4 text-2xl text-red-500">
                      {errors.wards.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between step">
          <Link to="/cart" className="text-[#338dbc] hover:brightness-125">
            Giỏ hàng
          </Link>
          <Button
            className="mx-auto w-[200px]"
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Tiếp tục thanh toán
          </Button>
        </div>
      </form>
    </InformationStyles>
  );
};

export default Information;
