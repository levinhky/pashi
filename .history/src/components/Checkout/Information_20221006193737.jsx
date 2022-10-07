import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
const Information = () => {
  return (
    <div className="flex flex-row-reverse">
      <div className="flex flex-col flex-auto pt-16 main">
        <div className="pb-4 header">
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
            <div className="flex items-center content-text">
              <p>
                Bạn đã có tài khoản?{" "}
                <Link to="" className="text-[#338dbc]">
                  Đăng nhập
                </Link>
              </p>
            </div>
            <div className="enter">
              <input
                type="text"
                className="w-full border shadow-md focus:ring-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 transition-all delay-300 bg-white text-[#333] rounded-md p-[10px_40px_10px_12px]"
                placeholder="Họ và tên"
              />
              <div className="grid grid-cols-[300px_minmax(100px,_1fr)_auto] gap-x-2  my-2">
                <input
                  type="text"
                  className="w-full border shadow-md focus:ring-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 transition-all delay-300 bg-white text-[#333] rounded-md p-[10px_40px_10px_12px]"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="w-full border shadow-md focus:ring-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 transition-all delay-300 bg-white text-[#333] rounded-md p-[10px_40px_10px_12px]"
                  placeholder="Số điện thoại"
                />
              </div>
              <input
                type="text"
                className="w-full border shadow-md focus:ring-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 transition-all delay-300 bg-white text-[#333] rounded-md p-[10px_40px_10px_12px]"
                placeholder="Địa chỉ"
              />
              <div className="grid grid-cols-3 select">
                <div className="field-select">
                  <label htmlFor="">Tỉnh / thành</label>
                  <select name="" id="">
                    <option value="">TP.HCM</option>
                    <option value="">HN</option>
                    <option value="">Thanh Hóa</option>
                    <option value="">Hải Phòng</option>
                  </select>
                </div>
                <div className="field-select">
                  <label htmlFor="">Tỉnh / thành</label>
                  <select name="" id="">
                    <option value="">TP.HCM</option>
                    <option value="">HN</option>
                    <option value="">Thanh Hóa</option>
                    <option value="">Hải Phòng</option>
                  </select>
                </div>
                <div className="field-select">
                  <label htmlFor="">Tỉnh / thành</label>
                  <select name="" id="">
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
      </div>
    </div>
  );
};

export default Information;