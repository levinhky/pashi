import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineRight } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Radio from "./components/Radio";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoadingSpinner from "./components/LoadingSpinner";
import styled from "styled-components";

const PaymentStyles = styled.div`
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

const Payment = () => {
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
    defaultValues: {
      payment: "delivery",
      shipping: "freeship",
    },
  });

  const watchPayment = watch("payment");
  const watchShipping = watch("shipping");
  const navigate = useNavigate();
  const onSubmitHandler = (value) => {
    if (!isValid) return;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(value);
        if (isSubmitSuccessful === false) {
          navigate("/checkout/success");
        }
      }, 5000);
    });
  };
  return (
    <PaymentStyles className="flex flex-row-reverse">
      <form
        className="flex flex-col flex-auto main"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="pb-4 main-header z-1">
          <Link to="/" className="text-5xl font-medium">
            Pashi
          </Link>
          <ul className="flex items-center mt-4">
            <li className="inline-block text-xl text-[#338dbc]">
              <Link to="/cart">Gi??? h??ng</Link>
            </li>
            <span className="mx-2">
              <AiOutlineRight size="14"></AiOutlineRight>
            </span>
            <li className="inline-block text-xl text-[#338dbc]">
              <Link to="/information">Th??ng tin giao h??ng</Link>
            </li>
            <span className="mx-2">
              <AiOutlineRight size="14"></AiOutlineRight>
            </span>
            <li className="inline-block text-xl font-semibold text-[#333]">
              Ph????ng th???c thanh to??n
            </li>
          </ul>
        </div>
        <div className="pb-16 content">
          <div className="relative z-10">
            <h2 className="mb-4 text-[#333] font-medium text-4xl">
              Ph????ng th???c v???n chuy???n
            </h2>
            <Radio
              control={control}
              id="freeship"
              name="shipping"
              value="freeship"
              classNameImg="hidden"
              text="FREE SHIP"
              defaultChecked={true}
              checked={watchShipping === "freeship"}
              price="0??"
            ></Radio>
          </div>

          <div className="relative z-10">
            <h2 className="my-4 text-[#333] text-3xl">
              Ph????ng th???c thanh to??n
            </h2>
            <Radio
              control={control}
              id="delivery"
              name="payment"
              value="delivery"
              img="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1"
              text="Giao h??ng khi nh???n h??ng (COD)"
              defaultChecked={true}
              checked={watchPayment === "delivery"}
            ></Radio>
            <Radio
              control={control}
              id="momo"
              name="payment"
              value="momo"
              img="https://hstatic.net/0/0/global/design/seller/image/payment/momo.svg?v=1"
              text="V?? Momo"
              defaultChecked={true}
              checked={watchPayment === "momo"}
            ></Radio>
            <Radio
              control={control}
              id="vnpay"
              name="payment"
              value="vnpay"
              img="https://hstatic.net/0/0/global/design/seller/image/payment/vnpay_new.svg?v=1"
              text="Th??? ATM/Visa/Master/JCB/QR Pay qua c???ng VNPAY"
              defaultChecked={true}
              checked={watchPayment === "vnpay"}
            ></Radio>
          </div>
        </div>
        <div className="flex items-center justify-between step">
          <Link
            to="/checkout/information"
            className="text-[#338dbc] hover:brightness-125"
          >
            Quay l???i th??ng tin giao h??ng
          </Link>
          <button
            className={`w-[200px] p-4 bg-[#338dbc] text-white rounded-lg mt-5 font-semibold ${
              isSubmitting ? "opacity-50" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <LoadingSpinner></LoadingSpinner>
            ) : (
              "Ho??n t???t ????n h??ng"
            )}
          </button>
        </div>
      </form>
    </PaymentStyles>
  );
};

export default Payment;
