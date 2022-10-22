import React from "react";
import { useForm } from "react-hook-form";
import { MdContactSupport } from "react-icons/md";
import { Link } from "react-router-dom";
import Radio from "./components/Radio";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({});

const Success = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

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
        </div>
        <div className="relative section">
          <svg
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            className="absolute mr-6 -translate-y-1/2 right-full top-1/2 hanging-icon-error xmark"
          >
            <path
              className="xmark_circle"
              d="M25 49c13.255 0 24-10.745 24-24S38.255 1 25 1 1 11.745 1 25s10.745 24 24 24z"
            ></path>
            <path className="xmark_check1" d="M16 16l18 18"></path>
            <path className="xmark_check2" d="M34 16l-18 18"></path>
          </svg>
          <div className="info">
            <h2 className="text-4xl font-medium text[#333]">
              Thanh toán thành công
            </h2>
            <span className="text-2xl break-all text-[#737373]">
              Mã đơn hàng #110726
            </span>
          </div>
        </div>
        <div className="checkout-info shadow-[0_0_0_1px_#d9d9d9] rounded-lg bg-white text-[#737373] p-4">
          <h2>Thông tin đơn hàng</h2>
          <div className="info-delivery">
            <h3>Thông tin giao hàng</h3>
            <p className="info-name">
              Tên người nhận: <span>Quangdzu</span>
            </p>
            <p className="info-phone">
              Số điện thoại: <span>012345678</span>
            </p>
            <p className="info-address">
              Địa chỉ: <span>Xã Vọng Thê Huyện Thoại Sơn An Giang Vietnam</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between step">
          <div className="flex items-center support ">
            <MdContactSupport size="22"></MdContactSupport>
            <span>
              Cần hỗ trợ?{" "}
              <a
                href="https://mail.google.com/mail/"
                className="text-[#338dbc] hover:brightness-125"
              >
                Liên hệ chúng tôi
              </a>
            </span>
          </div>
          <button
            className="text-white font-medium transition-all hover:brightness-125 bg-[#338dbc] text-center rounded-lg px-3 py-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="w-8 h-8 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
            ) : (
              "Tiếp tục mua hàng"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Success;
