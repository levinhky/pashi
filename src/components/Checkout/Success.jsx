import React from "react";
import { useForm } from "react-hook-form";
import { MdContactSupport } from "react-icons/md";
import {Link, useNavigate} from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoadingSpinner from "./components/LoadingSpinner";
import styled from "styled-components";
import {useSelector} from "react-redux";

const SuccessStyles = styled.div`
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

  const {buyer} = useSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <SuccessStyles className="flex justify-center my-0 mx-auto flex-row-reverse w-50">
      <form
        className="flex flex-col flex-auto main"
        // onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="pb-4 main-header z-1">
          <Link to="/" className="text-5xl font-medium ">
            Pashi
          </Link>
        </div>
        <div className="flex items-center justify-between section">
          <div className="info">
            <h2 className="text-4xl font-medium text[#333]">
              Thanh toán thành công
            </h2>
            {/*<span className="text-2xl break-all text-[#737373]">*/}
            {/*  Mã đơn hàng #{buyer.orderId}*/}
            {/*</span>*/}
          </div>
          <div className="status-icon">
            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#338dbc" strokeWidth="2"
                 className="hanging-icon checkmark">
              <path className="checkmark_circle"
                    d="M25 49c13.255 0 24-10.745 24-24S38.255 1 25 1 1 11.745 1 25s10.745 24 24 24z"></path>
              <path className="checkmark_check" d="M15 24.51l7.307 7.308L35.125 19"></path>
            </svg>
          </div>
        </div>
        <div className="mt-4 mb-10 checkout-info shadow-[0_0_0_1px_#d9d9d9] rounded-lg bg-white text-[#737373] p-4">
          <h2 className="mb-2 text-3xl font-medium">Thông tin đơn hàng</h2>
          <div className="nfo-delivery">
            <h3 className="mb-2 font-medium">Thông tin giao hàng</h3>
            <p className="font-light info-name">
              Tên người nhận: <span>{buyer.fullName}</span>
            </p>
            <p className="font-light info-phone">
              Số điện thoại: <span className="">{buyer.phoneNumber}</span>
            </p>
            <p className="font-light info-address">
              Địa chỉ:{" "}
              <span>{buyer.address}</span>
            </p>
          </div>
          <div className="payment">
            <h3 className="my-2 font-medium">Phương thức thanh toán</h3>
            <p className="font-light">Thanh toán {buyer.paymentMethod}</p>
          </div>
        </div>
        <div className="flex items-center justify-between step">
          <div className="flex items-center support ">
            <MdContactSupport size="22"></MdContactSupport>
            <span>
              Cần hỗ trợ?{" "}
              <a
                href="mailto:pashicareer@pashi.com"
                className="text-[#338dbc] hover:brightness-125"
              >
                Liên hệ chúng tôi
              </a>
            </span>
          </div>
          <button
            className={`w-[200px] p-4 bg-[#338dbc] text-white rounded-lg mt-5 font-semibold ${
              isSubmitting ? "opacity-50" : ""
            }`}
            onClick={() => navigate('/')}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <LoadingSpinner></LoadingSpinner>
            ) : (
              "Tiếp tục mua hàng"
            )}
          </button>
        </div>
      </form>
    </SuccessStyles>
  );
};

export default Success;
