import { vnd } from "configs/functions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const InformationStyles = styled.div`
  @media screen and (max-width: 1000px) {
    .container-form {
      flex-direction: column;
    }
  }
`;
const CheckoutPage = ({ children }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  console.log(cartItems);

  return (
    <div className="h-auto">
      <div className="flex flex-row-reverse flex-[1_0_auto] py-0 px-[5%] mx-auto w-[90%] h-auto max-w-screen-xl">
        <div className="sidebar w-[44%] relative bg-[#fafafa]">
          <div className="sidebar-content pl-[8%] pt-20">
            {cartItems.length > 0 &&
              cartItems.map((product) => (
                <div
                  className="content-item mb-4 w-auto h-[65px] grid grid-cols-[65px_minmax(auto,_1fr)_auto]"
                  key={product.id}
                >
                  <div className="product-img w-[65px] h-[65px] relative">
                    <div className="bg-[#d8d8d8] w-full h-full rounded-lg relative overflow-hidden">
                      <img
                        src={product.thumbnail}
                        alt=""
                        className="object-cover w-full h-full p-2 "
                      />
                    </div>
                    <span
                      className="absolute bg-[rgba(153,153,153,0.9)] z-50 px-3 py-2 text-xl quantity rounded-full -top-4 -right-4 text-white font-bold"
                      ariaHidden="true"
                    >
                      {product.quantity}
                    </span>
                  </div>
                  <div className="flex flex-col px-4 description">
                    <span className="text-2xl font-bold">{product.name}</span>
                    <span>S</span>
                  </div>
                  <div className="w-full price">
                    <span className="font-semibold text-">
                      {vnd(product.price)}
                    </span>
                  </div>
                </div>
              ))}

            <div className="line border-[#e1e1e1] border-bottom my-4 border-x-0 border-t-0 w-full h-full"></div>
            <div className="flex h-[47px] items-center code">
              <div className="relative w-full h-full p-2 code-input grow group">
                <input
                  type="text"
                  id="discount-code"
                  required
                  className="absolute w-full h-full px-4 my-auto  border shadow-md focus:ring-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 transition-all delay-300 text-[#333] rounded-md p-[10px_40px_10px_12px] mb-4 bg-gray-100 outline-none peer text-2xl"
                />
                <label
                  for="discount-code"
                  className="absolute top-0 flex items-center pl-0 my-[17px] text-2xl transition-all transform left-8 group-focus-within:text-base peer-valid:text-base group-focus-within:h-1.5 peer-valid:h-1.5 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 cursor-text"
                >
                  Mã giảm giá
                </label>
              </div>
              <button className="inline-block w-auto px-6 py-0 ml-8 text-center rounded-lg whitespace-nowrap bg-[#338dbc] hover:brightness-125 text-white relative transition-all cursor-pointer font-medium h-full">
                Sử dụng
              </button>
            </div>
            <div className="line border-[#e1e1e1] border-bottom my-4 border-x-0 border-t-0 w-full h-2"></div>

            <div className="bill">
              <div className="flex items-center justify-between bill-product">
                <span>Tạm tính</span>
                <span className="text-[#4b4b4b] font-semibold text-3xl">
                  {vnd(cartTotal)}
                </span>
              </div>
              <div className="flex items-center justify-between bill-ship">
                <span>Phí vận chuyển</span>
                <span className="text-[#4b4b4b] font-semibold text-3xl">—</span>
              </div>
            </div>
            <div className="line border-[#e1e1e1] border-bottom my-4 border-x-0 border-t-0 w-full h-2"></div>

            <div className="flex items-center justify-between total">
              <span className="">Tổng cộng</span>
              <div className="total-number">
                {/* <span className="mr-4 text-2xl">VND</span> */}
                <span className="text-4xl font-bold ">{vnd(cartTotal)}</span>
              </div>
            </div>
          </div>

          <div className="absolute line border-[#e1e1e1] border-left top-0 border-x-0 border-t-0 w-1 h-full shadow-[1px_0_0_#e1e1e1] left-0"></div>
        </div>

        <div className="flex flex-column w-[56%] pr-[6%] pt-20">{children}</div>
      </div>
    </div>
  );
};

export default CheckoutPage;
