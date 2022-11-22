import { vnd } from "configs/functions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useClickOutSide from "components/Checkout/hooks/useClickOutSide";

const CheckoutPageStyles = styled.div`
  display: -webkit-flex;
  display: -ms-flexbox;

  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex: 1 0 auto;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
  .wrap {
    margin: 0 auto;
    max-width: 40em;
    zoom: 1;
  }

  @media screen and (min-width: 1000px) {
    .wrap,
    .main {
      padding: 0 5%;
      width: 90%;
      max-width: 78.57143em;
    }
    .content {
      /* height: 800px; */
    }
  }
  @media screen and (max-width: 999px) {
    .banner {
      display: block;
    }
    .toggle-summary {
      display: block;
    }
    .content-second {
      display: block;
    }
    .sidebar {
      width: 100%;
      box-sizing: border-box;
      flex-direction: column !important;
      border-bottom: 1px solid rgb(209 213 219);
      height: inherit;
    }
    .sidebar-content {
      /* height: 0;
      overflow: hidden; */
      padding: 0 !important;
    }
    .sidebar:after {
      content: "";
      margin: 10px 0;
      height: inherit;
      display: block;
      width: 300%;
      position: absolute;
      top: 0;
      left: -100%;
      bottom: 0;
      background: #fafafa;
      z-index: -1;
      box-shadow: 0 -1px 0 #e1e1e1 inset;
    }
    .line-left,
    .line-code,
    .code-sidebar {
      display: none;
    }
    .wrap {
      width: 100%;
      box-sizing: border-box;
      padding: 0 1em;
      flex-direction: column !important;
    }
    .main {
      width: 100%;
      padding: 0;
      box-sizing: border-box;
      flex-direction: column !important;
    }
  }
`;
const CheckoutPage = ({ children }) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  // console.log(cartItems);

  return (
    <CheckoutPageStyles ref={nodeRef}>
      <div className="hidden py-10 banner">
        <div className="wrap ">
          <Link to="/" className="font-medium text-7xl ">
            Pashi
          </Link>
        </div>
      </div>
      <div className="hidden border-gray-300 py-7 bg-[#fafafa] toggle-summary border-y-[1px]">
        <div className="wrap">
          <div className="flex items-center justify-between order-summary">
            <button
              className="flex items-center order-summary-toggle-text"
              onClick={() => setShow(!show)}
            >
              <div className="pr-4 icon">
                <svg
                  width="20"
                  height="19"
                  xmlns="http://www.w3.org/2000/svg"
                  className="order-summary-toggle-icon"
                >
                  <path d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"></path>
                </svg>
              </div>
              {!show ? (
                <span className="text">Ẩn thông tin đơn hàng</span>
              ) : (
                <span className="text">Hiện thông tin đơn hàng</span>
              )}
            </button>
            <div className="text-4xl font-medium price">{vnd(cartTotal)}</div>
          </div>
        </div>
      </div>
      <div className="hidden content-second bg-[#fafafa] py-7 border-gray-300 border-b-[1px]">
        <div className="wrap">
          <div className="flex items-center h-[47px] code">
            <input
              type="text"
              id="discount-code"
              className=" px-4 my-auto h-full flex-1 border shadow-md focus:ring-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 transition-all delay-300 text-[#333] rounded-md p-[10px_40px_10px_12px] mb-4 bg-gray-100 outline-none peer text-2xl"
              placeholder="Mã giảm giá"
            />
            <button className="inline-block h-full w-auto px-9 py-0 ml-8 text-center rounded-lg whitespace-nowrap bg-[#338dbc] hover:brightness-125 text-white relative transition-all cursor-pointer font-medium">
              Sử dụng
            </button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="flex flex-row-reverse h-full max-w-screen-xl py-0 mx-auto wrap">
          <div
            className={`sidebar w-[44%] relative bg-[#fafafa] ${
              !show ? "" : "hidden h-0"
            }`}
          >
            <div className={`sidebar-content pl-[8%] pt-20 `}>
              {cartItems.length > 0 &&
                cartItems.map((product) => (
                  <div
                    className="content-item border-gray-300 border-b-[1px] mb-4 w-auto h-[65px] grid grid-cols-[65px_minmax(auto,_1fr)_auto]"
                    key={product._id}
                  >
                    <div className="product-img w-[65px] h-[65px] relative">
                      <div className="bg-[#d8d8d8] w-full h-full rounded-lg relative overflow-hidden">
                        <img
                          src={product.thumbnails[0].thumbnail}
                          alt={product.name}
                          className="object-cover w-full h-full p-2 "
                        />
                      </div>
                      <span
                        className="absolute bg-[rgba(153,153,153,0.9)] z-50 px-3 py-2 text-xl quantity rounded-full -top-4 -right-4 text-white font-bold"
                        aria-hidden="true"
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

              {/* <div className="line-code border-[#e1e1e1] border-bottom my-4 border-x-0 border-t-0 w-full h-full"></div> */}

              <div className="flex py-4 h-[80px] items-center border-gray-300 border-b-[1px] code-sidebar">
                <div className="relative w-full h-full p-2 code-input grow group">
                  <input
                    type="text"
                    id="discount-code"
                    required
                    className="absolute w-full h-full px-4 my-auto  border shadow-md focus:ring-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 transition-all delay-300 text-[#333] rounded-md p-[10px_40px_10px_12px] mb-4 bg-gray-100 outline-none peer text-2xl"
                  />
                  <label
                    htmlFor="discount-code"
                    className="absolute top-0 flex items-center pl-0 my-[17px] text-2xl transition-all transform left-8 group-focus-within:text-base peer-valid:text-base group-focus-within:h-1.5 peer-valid:h-1.5 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 cursor-text"
                  >
                    Mã giảm giá
                  </label>
                </div>
                <button className="inline-block w-auto px-6 py-0 ml-8 text-center rounded-lg whitespace-nowrap bg-[#338dbc] hover:brightness-125 text-white relative transition-all cursor-pointer font-medium h-full">
                  Sử dụng
                </button>
              </div>

              {/* <div className="line border-[#e1e1e1] border-bottom my-4 border-x-0 border-t-0 w-full h-2"></div> */}

              <div className="bill mb-4 py-4 border-gray-300 border-b-[1px]">
                <div className="flex items-center justify-between bill-product">
                  <span>Tạm tính</span>
                  <span className="text-[#4b4b4b] font-semibold text-3xl">
                    {vnd(cartTotal)}
                  </span>
                </div>
                <div className="flex items-center justify-between bill-ship">
                  <span>Phí vận chuyển</span>
                  <span className="text-[#4b4b4b] font-semibold text-3xl">
                    —
                  </span>
                </div>
              </div>
              {/* <div className="line border-[#e1e1e1] border-bottom my-4 border-x-0 border-t-0 w-full h-2"></div> */}

              <div className="flex items-center justify-between border-none total">
                <span className="">Tổng cộng</span>
                <div className="total-number">
                  {/* <span className="mr-4 text-2xl">VND</span> */}
                  <span className="text-4xl font-bold ">{vnd(cartTotal)}</span>
                </div>
              </div>
            </div>

            <div className="absolute line-left border-[#e1e1e1] border-left top-0 border-x-0 border-t-0 w-1 h-full shadow-[1px_0_0_#e1e1e1] left-0"></div>
          </div>

          <div className="main overflow-x-hidden flex flex-column w-[56%] pr-[6%] pt-20">
            {children}
          </div>
        </div>
      </div>
    </CheckoutPageStyles>
  );
};

export default CheckoutPage;
