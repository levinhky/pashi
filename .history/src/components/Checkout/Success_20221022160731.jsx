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
        </div>
        <div className="pb-16 content"></div>
        <div className="flex items-center justify-between step">
          <div className="support">
            <MdContactSupport size="22"></MdContactSupport>
            <Link
              to="/checkout/information"
              className="text-[#338dbc] hover:brightness-125"
            >
              Quay lại thông tin giao hàng
            </Link>
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
