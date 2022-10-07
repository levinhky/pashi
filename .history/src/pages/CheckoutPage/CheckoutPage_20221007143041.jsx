import { vnd } from "configs/functions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = ({ children }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  console.log(cartItems);

  return (
    <div className="flex flex-row flex-[1_0_auto] py-0 px-[5%] mx-auto w-[90%] max-w-screen-xl">
      <div className="flex flex-column w-[62%] pr-[6%] pt-20">{children}</div>
      <div className="sidebar w-[38%] relative bg-[#fafafa]">
        <div className="block w-[300%] top-0 absolute bottom-0 -z-10 shadow-[1px_0_0_#e1e1e1_inset]"></div>
        <div className="sidebar-content pl-[4%] pt-20">
          <div className="content-item w-auto h-[65px] grid grid-cols-[65px_minmax(270px,_1fr)_100px] ">
            <div className="product-img w-[65px] h-[65px] relative">
              <div className="bg-[#d8d8d8] w-full h-full rounded-lg relative overflow-hidden">
                <img
                  src="https://product.hstatic.net/1000370235/product/z3733404419397_d753e3ea8a8f70f3d5acedb6b1a0deaa_5129de1d90b3454fa990016555e13999_small.jpg"
                  alt=""
                  className="object-cover w-full h-full p-2 "
                />
              </div>
              <span className="absolute bg-[rgba(153,153,153,0.9)] z-50 px-3 py-2 text-xl quantity rounded-full -top-4 -right-4 text-white font-bold">
                1
              </span>
            </div>
            <div className="flex flex-col px-4 description">
              <span className="text-2xl font-bold">Purple Jayden Dress</span>
              <span>S</span>
            </div>
            <div className="right-0 flex items-center price">
              <span className="font-semibold text-">590.000đ</span>
            </div>
          </div>
          <div className="line border-[#e1e1e1] border-bottom my-4 border-x-0 border-t-0 w-full h-full"></div>
        </div>
        <div className="flex code">
          <div className="relative grow code-input group">
            <label
              htmlFor="discount-code"
              className="absolute z-30 flex items-center h-full pl-2 text-2xl transition-all transform top-10 left-5 group-focus-within:text-base peer-valid:text-base group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Mã giảm giá
            </label>
            <input
              type="text"
              className="w-full border shadow-md focus:ring-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 transition-all delay-300 bg-white text-[#333] rounded-md p-[10px_40px_10px_12px] mb-4 absolute"
              // placeholder="Số điện thoại"
              id="discount-code"
            />
          </div>
          <button>ádasdasd</button>
        </div>
      </div>
    </div>
    // <div className={styles["bao"]}>
    //   <div className={styles["content"]}>
    //     <div className={styles["wrap"]}>
    //       <div className={styles["sidebar"]}>
    //         <div className={styles["sidebar-content"]}>
    //           <div
    //             className={styles["order-summary order-summary-is-collapsed"]}
    //           >
    //             <h2 className={styles["visually-hidden"]}>
    //               Thông tin đơn hàng
    //             </h2>
    //             <div className={styles["order-summary-sections"]}>
    //               <div
    //                 className={
    //                   styles[
    //                     "order-summary-section order-summary-section-product-list"
    //                   ]
    //                 }
    //               >
    //                 <table className={styles["product-table"]}>
    //                   <tbody>
    //                     {cartItems.length > 0 &&
    //                       cartItems.map((product) => (
    //                         <tr
    //                           className={styles["product"]}
    //                           data-product-id="1040710178"
    //                           key={product.id}
    //                         >
    //                           <td className={styles["product-image"]}>
    //                             <div className={styles["product-thumbnail"]}>
    //                               <div
    //                                 className={
    //                                   styles["product-thumbnail-wrapper"]
    //                                 }
    //                               >
    //                                 <img
    //                                   className={
    //                                     styles["product-thumbnail-image"]
    //                                   }
    //                                   alt={product.name}
    //                                   src={product.thumbnail}
    //                                 />
    //                               </div>
    //                               <span
    //                                 className={
    //                                   styles["product-thumbnail-quantity"]
    //                                 }
    //                                 aria-hidden="true"
    //                               >
    //                                 {product.quantity}
    //                               </span>
    //                             </div>
    //                           </td>
    //                           <td className={styles["product-description"]}>
    //                             <span
    //                               className={
    //                                 styles[
    //                                   "product-description-name order-summary-emphasis"
    //                                 ]
    //                               }
    //                             >
    //                               {product.name}
    //                             </span>

    //                             <span
    //                               className={
    //                                 styles[
    //                                   "product-description-variant order-summary-small-text"
    //                                 ]
    //                               }
    //                             >
    //                               S
    //                             </span>
    //                           </td>
    //                           <td
    //                             className={
    //                               styles["product-quantity visually-hidden"]
    //                             }
    //                           >
    //                             1
    //                           </td>
    //                           <td className={styles["product-price"]}>
    //                             <span
    //                               className={styles["order-summary-emphasis"]}
    //                             >
    //                               {vnd(product.price)}
    //                             </span>
    //                           </td>
    //                         </tr>
    //                       ))}
    //                   </tbody>
    //                 </table>
    //               </div>

    //               <div
    //                 className={
    //                   styles[
    //                     "order-summary-section order-summary-section-discount"
    //                   ]
    //                 }
    //               >
    //                 <form
    //                   id="form_discount_add"
    //                   acceptCharset="UTF-8"
    //                   method="post"
    //                 >
    //                   <input name="utf8" type="hidden" value="✓" />
    //                   <div className={styles["fieldset"]}>
    //                     <div className={styles["field  "]}>
    //                       <div className={styles["field-input-btn-wrapper"]}>
    //                         <div className={styles["field-input-wrapper"]}>
    //                           <label
    //                             className={styles["field-label"]}
    //                             htmlFor="discount.code"
    //                           >
    //                             Mã giảm giá
    //                           </label>
    //                           <input
    //                             placeholder="Mã giảm giá"
    //                             className={styles["field-input"]}
    //                             size="30"
    //                             type="text"
    //                             id="discount.code"
    //                             name="discount.code"
    //                           />
    //                         </div>
    //                         <button
    //                           type="submit"
    //                           className={
    //                             styles[
    //                               "field-input-btn btn btn-default btn-disabled"
    //                             ]
    //                           }
    //                         >
    //                           <span className={styles["btn-content"]}>
    //                             Sử dụng
    //                           </span>
    //                           <i
    //                             className={
    //                               styles["btn-spinner icon icon-button-spinner"]
    //                             }
    //                           ></i>
    //                         </button>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </form>
    //               </div>

    //               <div
    //                 className={
    //                   styles[
    //                     "order-summary-section order-summary-section-total-lines payment-lines"
    //                   ]
    //                 }
    //               >
    //                 <table className={styles["total-line-table"]}>
    //                   <thead>
    //                     <tr>
    //                       <th scope="col">
    //                         <span className={styles["visually-hidden"]}>
    //                           Mô tả
    //                         </span>
    //                       </th>
    //                       <th scope="col">
    //                         <span className={styles["visually-hidden"]}>
    //                           Giá
    //                         </span>
    //                       </th>
    //                     </tr>
    //                   </thead>
    //                   <tbody>
    //                     <tr
    //                       className={styles["total-line total-line-subtotal"]}
    //                     >
    //                       <td className={styles["total-line-name"]}>
    //                         Tạm tính
    //                       </td>
    //                       <td className={styles["total-line-price"]}>
    //                         <span className={styles["order-summary-emphasis"]}>
    //                           {vnd(cartTotal)}
    //                         </span>
    //                       </td>
    //                     </tr>

    //                     <tr
    //                       className={styles["total-line total-line-shipping"]}
    //                     >
    //                       <td className={styles["total-line-name"]}>
    //                         Phí vận chuyển
    //                       </td>
    //                       <td className={styles["total-line-price"]}>
    //                         <span className={styles["order-summary-emphasis"]}>
    //                           —
    //                         </span>
    //                       </td>
    //                     </tr>
    //                   </tbody>
    //                   <tfoot className={styles["total-line-table-footer"]}>
    //                     <tr className={styles["total-line"]}>
    //                       <td
    //                         className={
    //                           styles["total-line-name payment-due-label"]
    //                         }
    //                       >
    //                         <span className={styles["payment-due-label-total"]}>
    //                           Tổng cộng
    //                         </span>
    //                       </td>
    //                       <td className={styles["total-line-name payment-due"]}>
    //                         {/* <span className={styles["payment-due-currency">VND</span> */}
    //                         <span className={styles["payment-due-price"]}>
    //                           {vnd(cartTotal)}
    //                         </span>
    //                       </td>
    //                     </tr>
    //                   </tfoot>
    //                 </table>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
  );
};

export default CheckoutPage;
