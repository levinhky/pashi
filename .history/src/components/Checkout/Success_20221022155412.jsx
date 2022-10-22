import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineRight } from "react-icons/ai";
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
    defaultValues: {
      payment: "delivery",
      shipping: "freeship",
    },
  });

  const watchPayment = watch("payment");
  const watchShipping = watch("shipping");
  console.log(watchPayment);

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
            <Radio
              control={control}
              id="freeship"
              name="shipping"
              value="freeship"
              classNameImg="hidden"
              text="FREE SHIP"
              defaultChecked={true}
              checked={watchShipping === "freeship"}
              price="0đ"
            ></Radio>
          </div>

          <div className="relative z-10">
            <h2 className="my-4 text-[#333] text-3xl">
              Phương thức thanh toán
            </h2>
            <Radio
              control={control}
              id="delivery"
              name="payment"
              value="delivery"
              img="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1"
              text="Giao hàng khi nhận hàng (COD)"
              defaultChecked={true}
              checked={watchPayment === "delivery"}
            ></Radio>
            <Radio
              control={control}
              id="momo"
              name="payment"
              value="momo"
              img="https://hstatic.net/0/0/global/design/seller/image/payment/momo.svg?v=1"
              text="Ví Momo"
              defaultChecked={true}
              checked={watchPayment === "momo"}
            ></Radio>
            <Radio
              control={control}
              id="vnpay"
              name="payment"
              value="vnpay"
              img="https://hstatic.net/0/0/global/design/seller/image/payment/vnpay_new.svg?v=1"
              text="Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY"
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
            Quay lại thông tin giao hàng
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
