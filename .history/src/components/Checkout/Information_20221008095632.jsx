import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiOutlineRight, AiFillCaretDown } from "react-icons/ai";
import Input from "./components/Input";
import Select from "./components/Select";

const dataSelect = [
  {
    id: 1,
    text: "Teacher",
    value: "teacher",
  },
  {
    id: 2,
    text: "Developer",
    value: "developer",
  },
  {
    id: 3,
    text: "Doctor",
    value: "doctor",
  },
];
const Information = () => {
  const { control, setValue } = useForm({});

  return (
    <div className="flex flex-row-reverse">
      <div className="flex flex-col flex-auto main">
        <div className="pb-4 header z-1">
          <Link to="/" className="text-5xl font-medium">
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
            <h2 className="mb-4 text-[#333] text-3xl">Thông tin giao hàng</h2>
            <div className="flex items-center mb-4 content-text">
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
              <div className="grid grid-cols-[300px_minmax(100px,_1fr)_auto] gap-x-2">
                <Input
                  name="email"
                  id="email"
                  placeholder="Email"
                  control={control}
                  type="text"
                ></Input>
                <Input
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Số điện thoại"
                  control={control}
                  type="text"
                ></Input>
              </div>
              <Input
                name="address"
                id="address"
                placeholder="Địa chỉ"
                control={control}
                type="text"
              ></Input>
              {/* Select */}
              <div className="grid grid-cols-3 gap-x-2 select">
                <div className="relative field-select">
                  <label
                    htmlFor=""
                    className="absolute top-0 w-full px-3 mt-1 mb-3 text-lg font-normal truncate transition-all pointer-events-none z-1 text-[#999] block"
                  >
                    Chọn tỉnh / thành
                  </label>
                  <Select
                    control={control}
                    setValue={setValue}
                    name="province"
                    data={dataSelect}
                    // selectLabel="Select your province"
                  ></Select>
                </div>
                <div className="relative field-select">
                  <label
                    htmlFor=""
                    className="absolute top-0 w-full px-3 mt-1 mb-3 text-lg font-normal truncate transition-all pointer-events-none z-1 text-[#999] block"
                  >
                    Tỉnh / thành
                  </label>
                  <span className="absolute top-0 bottom-0 right-0 w-[50px] place-content-center bg-center icon">
                    <AiFillCaretDown className="h-full m-auto"></AiFillCaretDown>
                  </span>
                  <select
                    name=""
                    id=""
                    className="text-2xl shadow-md block transition-all text-[#333] w-full break-normal p-[17px_40px_5px_11px] rounded-lg focus:shadow-[0_0_0_2px_#338dbc] focus:outline-none focus:ring-sky-500 delay-300"
                  >
                    <option value="">Chọn tỉnh / thành</option>
                    <option value="">TP.HCM</option>
                    <option value="">HN</option>
                    <option value="">Thanh Hóa</option>
                    <option value="">Hải Phòng</option>
                  </select>
                </div>
                <div className="relative field-select ">
                  <label
                    htmlFor=""
                    className="absolute top-0 w-full px-3 mt-1 mb-3 text-lg font-normal truncate transition-all pointer-events-none z-1 text-[#999] block"
                  >
                    Quận / huyện
                  </label>
                  <span className="absolute top-0 bottom-0 right-0 w-[50px] place-content-center bg-center icon">
                    <AiFillCaretDown className="h-full m-auto"></AiFillCaretDown>
                  </span>
                  <select
                    name=""
                    id=""
                    className="text-2xl shadow-md block transition-all text-[#333] bg-white w-full break-normal p-[17px_40px_5px_11px] rounded-lg focus:shadow-[0_0_0_2px_#338dbc] focus:outline-none focus:ring-sky-500 delay-300"
                  >
                    <option value="">Chọn quận / huyện</option>
                    <option value="">TP.HCM</option>
                    <option value="">HN</option>
                    <option value="">Thanh Hóa</option>
                    <option value="">Hải Phòng</option>
                  </select>
                </div>
                <div className="relative field-select">
                  <label
                    htmlFor=""
                    className="absolute top-0 w-full px-3 mt-1 mb-3 text-lg font-normal truncate transition-all pointer-events-none z-1 text-[#999] block"
                  >
                    Phường / xã
                  </label>
                  <span className="absolute top-0 bottom-0 right-0 w-[50px] place-content-center bg-center icon">
                    <AiFillCaretDown className="h-full m-auto"></AiFillCaretDown>
                  </span>
                  <select
                    name=""
                    id=""
                    className="text-2xl shadow-md block transition-all text-[#333] bg-white w-full break-normal p-[17px_40px_5px_11px] rounded-lg focus:shadow-[0_0_0_2px_#338dbc] focus:outline-none focus:ring-sky-500 delay-300"
                  >
                    <option value="">Chọn phường / xã</option>
                    <option value="">TP.HCM</option>
                    <option value="">HN</option>
                    <option value="">Thanh Hóa</option>
                    <option value="">Hải Phòng</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between step">
          <Link to="/cart" className="text-[#338dbc] hover:brightness-125">
            Giỏ hàng
          </Link>
          {/* <form action=""></form> */}
          <button className="text-white font-medium transition-all hover:brightness-125 bg-[#338dbc] text-center rounded-lg px-3 py-6">
            Tiếp tục đến phương thức thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
