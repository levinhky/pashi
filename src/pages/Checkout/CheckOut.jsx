import { vnd } from "configs/functions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Checkout.css";
import {
  caculateTotal,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "slices/cartSlice";

function CheckOut(props) {
  const { cartItems, cartTotal } = useSelector((state) => state.cart);

  const dispath = useDispatch();

  useEffect(() => {
    dispath(caculateTotal());
  }, [cartItems]);


  return (
    <div className="bao">
      <div className="content" >

        <div className="wrap" >

        <div className="main" >
            <div className="main-header" >
              <a href="/" className="logo" >
                <h1 className="logo-text" >She by Shj</h1>
              </a>
              <ul className="breadcrumb" >
                <li className="breadcrumb-item" > <a href="/cart">Giỏ hàng</a> </li>
                <li className="breadcrumb-item breadcrumb-item-current" > Thông tin giao hàng </li>
                <li className="breadcrumb-item" > Phương thức thanh toán </li>
              </ul>
            </div>
            <div className="main-content" >
              <div id="checkout_order_information_changed_error_message" className="hidden">
                {/* <p className="field-message field-message-error alert alert-danger" >
                  <svg x="0px" y="0px" viewBox="0 0 286.054 286.054" style="enable-background:new 0 0 286.054 286.054;" xml:space="preserve"> 
                  <g> <path style="fill:#E2574C;" d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027 c78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236 c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209 S207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972 c9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723 c-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843 C160.878,195.732,152.878,187.723,143.036,187.723z" /> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> <span></span></p> */}
              </div>


              <div className="step" >
                <div className="step-sections ">
                  <div className="section" >
                    <div className="section-header" >
                      <h2 className="section-title" >Thông tin giao hàng</h2>
                    </div>
                    <div className="section-content section-customer-information no-mb" >

                      <input name="utf8" type="hidden" value="✓" />
                        <div className="inventory_location_data" >

                          <input name="customer_shipping_country"type="hidden" value="241" />
                          <input name="customer_shipping_province" type="hidden"   />
                          <input name="customer_shipping_district" type="hidden"   />
                          <input name="customer_shipping_ward" type="hidden"   />

                        </div>
                        <p className="section-content-text" >
                          Bạn đã có tài khoản?
                          <a href="/account/login?urlredirect=%2Fcheckouts%2F4cb7ad9379fc45ff9fa53554a09e819a%3Fstep%3D1">Đăng nhập</a>
                        </p>
                        <div className="fieldset" >
                          <div className="field field-required" >
                            <div className="field-input-wrapper" >
                              <input placeholder="Họ và tên" className="field-input"  size="30" type="text" id="billing_address_full_name" name="billing_address[full_name]"/>
                            </div>
                          </div>
                          <div className="field  field-two-thirds" >
                            <div className="field-input-wrapper" >
                              <input placeholder="Email"  className="field-input"  size="30" type="email" id="checkout_user_email" name="checkout_user[email]"   />
                            </div>

                          </div>
                          <div className="field field-required field-third  " >
                            <div className="field-input-wrapper" >
                              <input placeholder="Số điện thoại" className="field-input"  size="30" maxLength="15" type="tel" id="billing_address_phone" name="billing_address[phone]"   />
                            </div>

                          </div>
                        </div>
                    </div>
                    
                    <div className="section-content" >
                      <div className="fieldset" >

                        <form  id="form_update_shipping_method" className="field default"   acceptCharset="UTF-8" method="post">
                          <input name="utf8" type="hidden" value="✓" />
                            <div className="content-box mt0" >

                              <div id="form_update_location_customer_shipping" className="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary "  htmlFor="customer_pick_at_location_false">
                                <input name="utf8" type="hidden" value="✓" />
                                  <div className="order-checkout__loading--box" >
                                    <div className="order-checkout__loading--circle" ></div>
                                  </div>

                                  <div className="field field-required  " >
                                    <div className="field-input-wrapper" >
                                      <label className="field-label"  htmlFor="billing_address_address1">Địa chỉ</label>
                                      <input placeholder="Địa chỉ"  className="field-input"  size="30" type="text" id="billing_address_address1" name="billing_address[address1]"   />
                                    </div>

                                  </div> 
                                  <input name=" _customer_shipping_country" type="hidden"   />
                                    <input name=" _customer_shipping_province" type="hidden"   />
                                      <input name=" _customer_shipping_district" type="hidden"   />
                                        <input name=" _customer_shipping_ward" type="hidden"   />
                                          <div className="field field-show-floating-label field-required field-third " >
                                            <div className="field-input-wrapper field-input-wrapper-select" >
                                              <label className="field-label"  htmlFor="customer_shipping_province"> Tỉnh / thành  </label>
                                              <select className="field-input"  id="customer_shipping_province" name="customer_shipping_province">
                                                <option data-code="null" value="null" >

                                                  Chọn tỉnh / thành </option>



                                                <option data-code="HC" value="50" >Hồ Chí Minh</option>



                                                <option data-code="HI" value="1" >Hà Nội</option>



                                                <option data-code="DA" value="32" >Đà Nẵng</option>



                                                <option data-code="AG" value="57" >An Giang</option>



                                                <option data-code="BV" value="49" >Bà Rịa - Vũng Tàu</option>



                                                <option data-code="BI" value="47" >Bình Dương</option>



                                                <option data-code="BP" value="45" >Bình Phước</option>



                                                <option data-code="BU" value="39" >Bình Thuận</option>



                                                <option data-code="BD" value="35" >Bình Định</option>



                                                <option data-code="BL" value="62" >Bạc Liêu</option>



                                                <option data-code="BG" value="15" >Bắc Giang</option>



                                                <option data-code="BK" value="4" >Bắc Kạn</option>



                                                <option data-code="BN" value="18" >Bắc Ninh</option>



                                                <option data-code="BT" value="53" >Bến Tre</option>



                                                <option data-code="CB" value="3" >Cao Bằng</option>



                                                <option data-code="CM" value="63" >Cà Mau</option>



                                                <option data-code="CN" value="59" >Cần Thơ</option>



                                                <option data-code="GL" value="41" >Gia Lai</option>



                                                <option data-code="HG" value="2" >Hà Giang</option>



                                                <option data-code="HM" value="23" >Hà Nam</option>



                                                <option data-code="HT" value="28" >Hà Tĩnh</option>



                                                <option data-code="HO" value="11" >Hòa Bình</option>



                                                <option data-code="HY" value="21" >Hưng Yên</option>



                                                <option data-code="HD" value="19" >Hải Dương</option>



                                                <option data-code="HP" value="20" >Hải Phòng</option>



                                                <option data-code="HU" value="60" >Hậu Giang</option>



                                                <option data-code="KH" value="37" >Khánh Hòa</option>



                                                <option data-code="KG" value="58" >Kiên Giang</option>



                                                <option data-code="KT" value="40" >Kon Tum</option>



                                                <option data-code="LI" value="8" >Lai Châu</option>



                                                <option data-code="LA" value="51" >Long An</option>



                                                <option data-code="LO" value="6" >Lào Cai</option>



                                                <option data-code="LD" value="44" >Lâm Đồng</option>



                                                <option data-code="LS" value="13" >Lạng Sơn</option>



                                                <option data-code="ND" value="24" >Nam Định</option>



                                                <option data-code="NA" value="27" >Nghệ An</option>



                                                <option data-code="NB" value="25" >Ninh Bình</option>



                                                <option data-code="NT" value="38" >Ninh Thuận</option>



                                                <option data-code="PT" value="16" >Phú Thọ</option>



                                                <option data-code="PY" value="36" >Phú Yên</option>



                                                <option data-code="QB" value="29" >Quảng Bình</option>



                                                <option data-code="QM" value="33" >Quảng Nam</option>



                                                <option data-code="QG" value="34" >Quảng Ngãi</option>



                                                <option data-code="QN" value="14" >Quảng Ninh</option>



                                                <option data-code="QT" value="30" >Quảng Trị</option>



                                                <option data-code="ST" value="61" >Sóc Trăng</option>



                                                <option data-code="SL" value="9" >Sơn La</option>



                                                <option data-code="TH" value="26" >Thanh Hóa</option>



                                                <option data-code="TB" value="22" >Thái Bình</option>



                                                <option data-code="TY" value="12" >Thái Nguyên</option>



                                                <option data-code="TT" value="31" >Thừa Thiên Huế</option>



                                                <option data-code="TG" value="52" >Tiền Giang</option>



                                                <option data-code="TV" value="54" >Trà Vinh</option>



                                                <option data-code="TQ" value="5" >Tuyên Quang</option>



                                                <option data-code="TN" value="46" >Tây Ninh</option>



                                                <option data-code="VL" value="55" >Vĩnh Long</option>



                                                <option data-code="VT" value="17" >Vĩnh Phúc</option>



                                                <option data-code="YB" value="10" >Yên Bái</option>



                                                <option data-code="DB" value="7" >Điện Biên</option>



                                                <option data-code="DC" value="42" >Đắk Lắk</option>



                                                <option data-code="DO" value="43" >Đắk Nông</option>



                                                <option data-code="DN" value="48" >Đồng Nai</option>



                                                <option data-code="DT" value="56" >Đồng Tháp</option>



                                              </select>
                                            </div>
                                          </div>

                                          <div className="field field-show-floating-label field-required field-third " >
                                            <div className="field-input-wrapper field-input-wrapper-select" >
                                              <label className="field-label"  htmlFor="customer_shipping_district">Quận / huyện</label>
                                              <select className="field-input"  id="customer_shipping_district" name="customer_shipping_district">
                                                <option data-code="null" value="null" >Chọn quận / huyện</option>

                                              </select>
                                            </div>

                                          </div>

                                          <div className="field field-show-floating-label   field-third  " >
                                            <div className="field-input-wrapper field-input-wrapper-select" >
                                              <label className="field-label"  htmlFor="customer_shipping_ward">Phường / xã</label>
                                              <select className="field-input"  id="customer_shipping_ward" name="customer_shipping_ward">
                                                <option data-code="null" value="null" >Chọn phường / xã</option>

                                              </select>
                                            </div>

                                          </div>



                                          <div id="div_location_country_not_vietnam" className="section-customer-information " >
                                            <div className="field field-two-thirds" >
                                              <div className="field-input-wrapper" >
                                                <label className="field-label"  htmlFor="billing_address_city">Thành phố</label>
                                                <input placeholder="Thành phố" className="field-input"  size="30" type="text" id="billing_address_city" name="billing_address[city]"   />
                                              </div>
                                            </div>
                                            <div className="field field-third" >
                                              <div className="field-input-wrapper" >
                                                <label className="field-label"  htmlFor="billing_address_zip">Mã bưu chính</label>
                                                <input placeholder="Mã bưu chính" className="field-input"  size="30" type="text" id="billing_address_zip" name="billing_address[zip]"   />
                                              </div>
                                            </div>
                                          </div>
                              </div>

                            </div>
                        </form>

                      </div>

                  </div>
                    <div id="change_pick_location_or_shipping"></div>
                  </div>



                </div>
                          <div className="step-footer" >


                            <form id="form_next_step"  acceptCharset="UTF-8" method="post">
                              <input name="utf8" type="hidden" value="✓" />
                                <button type="submit" className="dark step-footer-continue-btn btn" >
                                  <span className="btn-content" >Tiếp tục đến phương thức thanh toán</span>
                                  <i className="btn-spinner icon icon-button-spinner" ></i>
                                </button>
                            </form>
                            <a className="step-footer-previous-link"  href="/cart">
                              Giỏ hàng
                            </a>


                          </div>


{/* Thanh toán */}
                      <div id="section-shipping-rate" className="section">
                        <div className="section-header">
                          <h2 className="section-title">Phương thức vận chuyển</h2>
                        </div>
                        <div className="section-content">
                          <div className="content-box">
                            <div className="content-box-row">
                              <div className="radio-wrapper">
                                <label className="radio-label" htmlFor="shipping_rate_id_1000095079">
                                  <div className="radio-input">
                                    <input id="shipping_rate_id_1000095079" className="input-radio" type="radio" name="shipping_rate_id" value="1000095079" defaultChecked />
                                  </div>
                                  <span className="radio-label-primary">Giao hàng tận nơi</span>
                                  <span className="radio-accessory content-box-emphasis">40,000₫</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="section-payment-method" className="section">
                        <div className="section-header">
                          <h2 className="section-title">Phương thức thanh toán</h2>
                        </div>
                        <div className="section-content">
                          <div className="content-box">
                            <div className="radio-wrapper content-box-row">
                              <label className="two-page" htmlFor="payment_method_id_1000746393">
                                <div className="radio-input payment-method-checkbox">
                                  <input type-id='1' id="payment_method_id_1000746393" className="input-radio" name="payment_method_id" type="radio" value="1000746393" defaultChecked />
                                </div>

                                <div className='radio-content-input'>
                                  <img className='main-img' src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1" />
                                  <div className='content-wrapper'>
                                    <span className="radio-label-primary">Thanh toán khi giao hàng (COD)</span>
                                    <span className='quick-tagline hidden'></span>
                                    <span className='quick-tagline  hidden '>Buy Now, Pay Later</span>

                                  </div>
                                </div>
                              </label>
                            </div>
                            <div className="radio-wrapper content-box-row">
                              <label className="two-page" htmlFor="payment_method_id_1002351320">
                                <div className="radio-input payment-method-checkbox">
                                  <input type-id='21' id="payment_method_id_1002351320" className="input-radio" name="payment_method_id" type="radio" value="1002351320" />
                                </div>

                                <div className='radio-content-input'>
                                  <img className='main-img' src="https://hstatic.net/0/0/global/design/seller/image/payment/momo.svg?v=1" />
                                  <div className='content-wrapper'>
                                    <span className="radio-label-primary">Ví Momo</span>
                                    <span className='quick-tagline hidden'></span>
                                    <span className='quick-tagline  hidden '>Buy Now, Pay Later</span>

                                  </div>
                                </div>
                              </label>
                            </div>
                            <div className="radio-wrapper content-box-row">
                              <label className="two-page" htmlFor="payment_method_id_1002492004">
                                <div className="radio-input payment-method-checkbox">
                                  <input type-id='8' id="payment_method_id_1002492004" className="input-radio" name="payment_method_id" type="radio" value="1002492004" />
                                </div>

                                <div className='radio-content-input'>
                                  <img className='main-img' src="https://hstatic.net/0/0/global/design/seller/image/payment/vnpay_new.svg?v=1" />
                                  <div className='content-wrapper'>
                                    <span className="radio-label-primary">Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY</span>
                                    <span className='quick-tagline hidden'></span>
                                    <span className='quick-tagline  hidden '>Buy Now, Pay Later</span>

                                    <img className="child-img" src="https://hstatic.net/0/0/global/design/seller/image/payment/atm_visa_master_jcb.svg?v=1" />

                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="step-footer">
                      <form id="form_next_step" acceptCharset="UTF-8" method="post">
                        <input name="utf8" type="hidden" value="✓" />
                        <button type="submit" className="step-footer-continue-btn btn">
                          <span className="btn-content">Hoàn tất đơn hàng</span>
                          <i className="btn-spinner icon icon-button-spinner"></i>
                        </button>
                      </form>
                      <a href="/checkouts/4cb7ad9379fc45ff9fa53554a09e819a?step=1" className="step-footer-previous-link">
                        Quay lại thông tin giao hàng
                      </a>
                    </div>
                  </div>




                  
                    <div className="hrv-coupons-popup" >
                      <div className="hrv-title-coupons-popup" >
                        <p>Chọn giảm giá <span className="count-coupons" >123</span></p>
                        <div className="hrv-coupons-close-popup" >
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.1663 2.4785L15.5213 0.833496L8.99968 7.35516L2.47801 0.833496L0.833008 2.4785L7.35468 9.00016L0.833008 15.5218L2.47801 17.1668L8.99968 10.6452L15.5213 17.1668L17.1663 15.5218L10.6447 9.00016L17.1663 2.4785Z" fill="#424242"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="hrv-content-coupons-code" >
                        <h3 className="coupon_heading" >Mã giảm giá của shop</h3>
                        <div className="hrv-discount-code-web" >
                        </div>
                        <div className="hrv-discount-code-external" >

                        </div>
                      </div>
                    </div>
          </div>
          <div className="sidebar" >
            <div className="sidebar-content" >
              <div className="order-summary order-summary-is-collapsed" >
                <h2 className="visually-hidden" >Thông tin đơn hàng</h2>
                <div className="order-summary-sections" >
                  <div className="order-summary-section order-summary-section-product-list" >
                    <table className="product-table" >
                      <thead>
                        <tr>
                          <th scope="col"><span className="visually-hidden" >Hình ảnh</span></th>
                          <th scope="col"><span className="visually-hidden" >Mô tả</span></th>
                          <th scope="col"><span className="visually-hidden" >Số lượng</span></th>
                          <th scope="col"><span className="visually-hidden" >Giá</span></th>
                        </tr>
                      </thead>
                      <tbody>

                        <tr className="product"  data-product-id="1040710178">
                          <td className="product-image" >
                            <div className="product-thumbnail" >
                              <div className="product-thumbnail-wrapper" >
                                <img className="product-thumbnail-image"  alt="Blue Dara Top" src="//product.hstatic.net/1000370235/product/0501_a0e6803ba5de4066936a50e118c7be03_small.jpg" />
                              </div>
                              <span className="product-thumbnail-quantity"  aria-hidden="true">1</span>
                            </div>
                          </td>
                          <td className="product-description" >
                            <span className="product-description-name order-summary-emphasis" >Blue Dara Top</span>

                            <span className="product-description-variant order-summary-small-text" >
                              S
                            </span>

                          </td>
                          <td className="product-quantity visually-hidden" >1</td>
                          <td className="product-price" >
                            <span className="order-summary-emphasis" >203,000₫</span>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>

                  <div className="order-summary-section order-summary-section-discount" >
                    <form id="form_discount_add"  acceptCharset="UTF-8" method="post">
                      <input name="utf8" type="hidden" value="✓" />
                        <div className="fieldset" >
                          <div className="field  " >
                            <div className="field-input-btn-wrapper" >
                              <div className="field-input-wrapper" >
                                <label className="field-label"  htmlFor="discount.code">Mã giảm giá</label>
                                <input placeholder="Mã giảm giá" className="field-input"  size="30" type="text" id="discount.code" name="discount.code"   />
                              </div>
                              <button type="submit" className="field-input-btn btn btn-default btn-disabled" >
                                <span className="btn-content" >Sử dụng</span>
                                <i className="btn-spinner icon icon-button-spinner" ></i>
                              </button>
                            </div>

                          </div>
                        </div>
                    </form>
                  </div>



                  <div className="order-summary-section order-summary-section-total-lines payment-lines" >
                    <table className="total-line-table" >
                      <thead>
                        <tr>
                          <th scope="col"><span className="visually-hidden" >Mô tả</span></th>
                          <th scope="col"><span className="visually-hidden" >Giá</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="total-line total-line-subtotal" >
                          <td className="total-line-name" >Tạm tính</td>
                          <td className="total-line-price" >
                            <span className="order-summary-emphasis" >
                              203,000₫
                            </span>
                          </td>
                        </tr>


                        <tr className="total-line total-line-shipping" >
                          <td className="total-line-name" >Phí vận chuyển</td>
                          <td className="total-line-price" >
                            <span className="order-summary-emphasis" >

                              —

                            </span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot className="total-line-table-footer" >
                        <tr className="total-line" >
                          <td className="total-line-name payment-due-label" >
                            <span className="payment-due-label-total" >Tổng cộng</span>
                          </td>
                          <td className="total-line-name payment-due" >
                            <span className="payment-due-currency" >VND</span>
                            <span className="payment-due-price" >
                              203,000₫
                            </span>
                            <span className="checkout_version" >
                        123
                            </span>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          

        </div>

      </div>
    </div>  


  );
}

            export default CheckOut;
