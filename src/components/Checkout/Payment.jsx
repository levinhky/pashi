import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <>
      <div className="main-header">
        <Link to="/" className="logo">
          <h1 className="logo-text">Pashi</h1>
        </Link>
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/cart">Giỏ hàng</Link>
          </li>
          <li className="breadcrumb-item">Thông tin giao hàng</li>
          <li className="breadcrumb-item breadcrumb-item-current">
            Phương thức thanh toán
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="step">
          <div id="section-shipping-rate" className="section">
            <div className="section-header">
              <h2 className="section-title">Phương thức vận chuyển</h2>
            </div>
            <div className="section-content">
              <div className="content-box">
                <div className="content-box-row">
                  <div className="radio-wrapper">
                    <label
                      className="radio-label"
                      htmlFor="shipping_rate_id_1000095079"
                    >
                      <div className="radio-input">
                        <input
                          id="shipping_rate_id_1000095079"
                          className="input-radio"
                          type="radio"
                          name="shipping_rate_id"
                          value="1000095079"
                          defaultChecked
                        />
                      </div>
                      <span className="radio-label-primary">
                        Giao hàng tận nơi
                      </span>
                      <span className="radio-accessory content-box-emphasis">
                        40,000₫
                      </span>
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
                  <label
                    className="two-page"
                    htmlFor="payment_method_id_1000746393"
                  >
                    <div className="radio-input payment-method-checkbox">
                      <input
                        type-id="1"
                        id="payment_method_id_1000746393"
                        className="input-radio"
                        name="payment_method_id"
                        type="radio"
                        value="1000746393"
                        defaultChecked
                      />
                    </div>

                    <div className="radio-content-input">
                      <img
                        className="main-img"
                        src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1"
                      />
                      <div className="content-wrapper">
                        <span className="radio-label-primary">
                          Thanh toán khi giao hàng (COD)
                        </span>
                        <span className="quick-tagline hidden"></span>
                        <span className="quick-tagline  hidden ">
                          Buy Now, Pay Later
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="radio-wrapper content-box-row">
                  <label
                    className="two-page"
                    htmlFor="payment_method_id_1002351320"
                  >
                    <div className="radio-input payment-method-checkbox">
                      <input
                        type-id="21"
                        id="payment_method_id_1002351320"
                        className="input-radio"
                        name="payment_method_id"
                        type="radio"
                        value="1002351320"
                      />
                    </div>

                    <div className="radio-content-input">
                      <img
                        className="main-img"
                        src="https://hstatic.net/0/0/global/design/seller/image/payment/momo.svg?v=1"
                      />
                      <div className="content-wrapper">
                        <span className="radio-label-primary">Ví Momo</span>
                        <span className="quick-tagline hidden"></span>
                        <span className="quick-tagline  hidden ">
                          Buy Now, Pay Later
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="radio-wrapper content-box-row">
                  <label
                    className="two-page"
                    htmlFor="payment_method_id_1002492004"
                  >
                    <div className="radio-input payment-method-checkbox">
                      <input
                        type-id="8"
                        id="payment_method_id_1002492004"
                        className="input-radio"
                        name="payment_method_id"
                        type="radio"
                        value="1002492004"
                      />
                    </div>

                    <div className="radio-content-input">
                      <img
                        className="main-img"
                        src="https://hstatic.net/0/0/global/design/seller/image/payment/vnpay_new.svg?v=1"
                      />
                      <div className="content-wrapper">
                        <span className="radio-label-primary">
                          Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY
                        </span>
                        <span className="quick-tagline hidden"></span>
                        <span className="quick-tagline  hidden ">
                          Buy Now, Pay Later
                        </span>

                        <img
                          className="child-img"
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
        <div className="step-footer">
          <form id="form_next_step">
            <input name="utf8" type="hidden" value="✓" />
            <button type="button" className="step-footer-continue-btn btn">
              <span className="btn-content">
                <Link className="k-c-hover" to="/checkout/success">
                  Hoàn tất đơn hàng
                </Link>
              </span>
              <i className="btn-spinner icon icon-button-spinner"></i>
            </button>
          </form>
          <Link
            to="/checkout/information"
            className="step-footer-previous-link k-a"
          >
            Quay lại thông tin giao hàng
          </Link>
        </div>
      </div>
    </>
  );
};

export default Payment;
