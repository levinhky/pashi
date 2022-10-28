import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Radio from "./components/Radio";

const Success = () => {
  return (
    <div className="flex flex-row-reverse">
      <form
        className="flex flex-col flex-auto main"
        // onSubmit={handleSubmit(onSubmitHandler)}
      >
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
            <li className="inline-block text-xl text-[#338dbc]">
              <Link to="/information">Thông tin giao hàng</Link>
            </li>
            <span className="mx-2">
              <AiOutlineRight size="14"></AiOutlineRight>
            </span>
            <li className="inline-block text-xl font-semibold text-[#333]">
              Phương thức thanh toán
            </li>
          </ul>
        </div>
        <div className="pb-16 content">
          <div className="relative z-10">
            <h2 className="mb-4 text-[#333] text-3xl">
              Phương thức vận chuyển
            </h2>
            <label
              className="flex justify-between items-center mb-4 content-text cursor-pointer w-auto p-[18px] border rounded-lg"
              htmlFor="shipping"
            >
              <input
                type="radio"
                id="shipping"
                className="mr-2 pr-2 border-none rounded-full w-[18px] h-[18px]transition-all relative cursor-pointer outline-0"
              />
              <span className="w-full">FREE SHIP</span>
              <span className="pl-2 whitespace-nowrap font-medium text-[#4d4d4d]">
                0đ
              </span>
            </label>
          </div>
          {/* <div className="relative z-10">
            <h2 className="mb-4 text-[#333] text-3xl">
              Phương thức vận chuyển
            </h2>
            <Radio
              control="control"
              name="payment"
              value="payment-on-delivery"
            ></Radio>
          </div> */}
        </div>
        <div className="flex items-center justify-between step">
          <Link to="/cart" className="text-[#338dbc] hover:brightness-125">
            Giỏ hàng
          </Link>
          {/* <form action=""></form> */}
          <button className="text-white font-medium transition-all hover:brightness-125 bg-[#338dbc] text-center rounded-lg px-3 py-6">
            Hoàn tất đơn hàng
          </button>
        </div>
      </form>
    </div>
  );
};

export default Success;