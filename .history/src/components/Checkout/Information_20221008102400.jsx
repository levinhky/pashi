import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import Input from "./components/Input";
import Select from "./components/Select";

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
                <Select
                  control={control}
                  setValue={setValue}
                  name="province"
                  data={dataSelect}
                  selectLabel="Chọn tỉnh / thành"
                ></Select>
                <Select
                  control={control}
                  setValue={setValue}
                  name="district"
                  data={dataSelect}
                  selectLabel="Chọn quận / huyện"
                ></Select>
                <Select
                  control={control}
                  setValue={setValue}
                  name="wards"
                  data={dataSelect}
                  selectLabel="Chọn phường / xã"
                ></Select>
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
            {/* Tiếp tục đến phương thức thanh toán */}ádasdasdasdsa
            <div className="w-8 h-8 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
