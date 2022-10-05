import { Link } from "react-router-dom";
import styles from "./CheckoutPage.module.css";

const Payment = () => {
  return (
    <>
      <div className={styles["main-header"]}>
        <Link to="/" className={styles["logo"]}>
          <h1 className={styles["logo-text"]}>Pashi</h1>
        </Link>
        <ul className={styles["breadcrumb"]}>
          <li className={styles["breadcrumb-item"]}>
            <Link to="/cart">Giỏ hàng</Link>
          </li>
          <li className={styles["breadcrumb-item"]}>Thông tin giao hàng</li>
          <li className={styles["breadcrumb-item breadcrumb-item-current"]}>
            Phương thức thanh toán
          </li>
        </ul>
      </div>
      <div className={styles["main-content"]}>
        <div className={styles["step"]}>
          <div id="section-shipping-rate" className={styles["section"]}>
            <div className={styles["section-header"]}>
              <h2 className={styles["section-title"]}>Phương thức vận chuyển</h2>
            </div>
            <div className={styles["section-content"]}>
              <div className={styles["content-box"]}>
                <div className={styles["content-box-row"]}>
                  <div className={styles["radio-wrapper"]}>
                    <label
                      className={styles["radio-label"]}
                      htmlFor="shipping_rate_id_1000095079"
                    >
                      <div className={styles["radio-input"]}>
                        <input
                          id="shipping_rate_id_1000095079"
                          className={styles["input-radio"]}
                          type="radio"
                          name="shipping_rate_id"
                          value="1000095079"
                          defaultChecked
                        />
                      </div>
                      <span className={styles["radio-label-primary"]}>
                        Giao hàng tận nơi
                      </span>
                      <span className={styles["radio-accessory content-box-emphasis"]}>
                        40,000₫
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="section-payment-method" className={styles["section"]}>
            <div className={styles["section-header"]}>
              <h2 className={styles["section-title"]}>Phương thức thanh toán</h2>
            </div>
            <div className={styles["section-content"]}>
              <div className={styles["content-box"]}>
                <div className={styles["radio-wrapper content-box-row"]}>
                  <label
                    className={styles["two-page"]}
                    htmlFor="payment_method_id_1000746393"
                  >
                    <div className={styles["radio-input payment-method-checkbox"]}>
                      <input
                        type-id="1"
                        id="payment_method_id_1000746393"
                        className={styles["input-radio"]}
                        name="payment_method_id"
                        type="radio"
                        value="1000746393"
                        defaultChecked
                      />
                    </div>

                    <div className={styles["radio-content-input"]}>
                      <img
                        className={styles["main-img"]}
                        src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1"
                      />
                      <div className={styles["content-wrapper"]}>
                        <span className={styles["radio-label-primary"]}>
                          Thanh toán khi giao hàng (COD)
                        </span>
                        <span className={styles["quick-tagline hidden"]}></span>
                        <span className={styles["quick-tagline  hidden "]}>
                          Buy Now, Pay Later
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
                <div className={styles["radio-wrapper content-box-row"]}>
                  <label
                    className={styles["two-page"]}
                    htmlFor="payment_method_id_1002351320"
                  >
                    <div className={styles["radio-input payment-method-checkbox"]}>
                      <input
                        type-id="21"
                        id="payment_method_id_1002351320"
                        className={styles["input-radio"]}
                        name="payment_method_id"
                        type="radio"
                        value="1002351320"
                      />
                    </div>

                    <div className={styles["radio-content-input"]}>
                      <img
                        className={styles["main-img"]}
                        src="https://hstatic.net/0/0/global/design/seller/image/payment/momo.svg?v=1"
                      />
                      <div className={styles["content-wrapper"]}>
                        <span className={styles["radio-label-primary"]}>Ví Momo</span>
                        <span className={styles["quick-tagline hidden"]}></span>
                        <span className={styles["quick-tagline  hidden "]}>
                          Buy Now, Pay Later
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
                <div className={styles["radio-wrapper content-box-row"]}>
                  <label
                    className={styles["two-page"]}
                    htmlFor="payment_method_id_1002492004"
                  >
                    <div className={styles["radio-input payment-method-checkbox"]}>
                      <input
                        type-id="8"
                        id="payment_method_id_1002492004"
                        className={styles["input-radio"]}
                        name="payment_method_id"
                        type="radio"
                        value="1002492004"
                      />
                    </div>

                    <div className={styles["radio-content-input"]}>
                      <img
                        className={styles["main-img"]}
                        src="https://hstatic.net/0/0/global/design/seller/image/payment/vnpay_new.svg?v=1"
                      />
                      <div className={styles["content-wrapper"]}>
                        <span className={styles["radio-label-primary"]}>
                          Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY
                        </span>
                        <span className={styles["quick-tagline hidden"]}></span>
                        <span className={styles["quick-tagline  hidden "]}>
                          Buy Now, Pay Later
                        </span>

                        <img
                          className={styles["child-img"]}
                          src="https://hstatic.net/0/0/global/design/seller/image/payment/atm_visa_master_jcb.svg?v=1"
                        />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["step-footer"]}>
          <form id="form_next_step">
            <input name="utf8" type="hidden" value="✓" />
            <button type="button" className={styles["step-footer-continue-btn btn"]}>
              <span className={styles["btn-content"]}>
                <Link className={styles["k-c-hover" ]}to="/checkout/success">
                  Hoàn tất đơn hàng
                </Link>
              </span>
              <i className={styles["btn-spinner icon icon-button-spinner"]}></i>
            </button>
          </form>
          <Link
            to="/checkout/information"
            className={styles["step-footer-previous-link k-a"]}
          >
            Quay lại thông tin giao hàng
          </Link>
        </div>
      </div>
    </>
  );
};

export default Payment;
