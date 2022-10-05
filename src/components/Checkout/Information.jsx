import { Link } from "react-router-dom";

function Information(props) {
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
          <li className="breadcrumb-item breadcrumb-item-current">
            Thông tin giao hàng
          </li>
          <li className="breadcrumb-item"> Phương thức thanh toán </li>
        </ul>
      </div>
      <div className="main-content">
        <div
          id="checkout_order_information_changed_error_message"
          className="hidden"
        >
          {/* <p className="field-message field-message-error alert alert-danger" >
                  <svg x="0px" y="0px" viewBox="0 0 286.054 286.054" style="enable-background:new 0 0 286.054 286.054;" xml:space="preserve"> 
                  <g> <path style="fill:#E2574C;" d="M143.027,0C64.04,0,0,64.04,0,143.027c0,78.996,64.04,143.027,143.027,143.027 c78.996,0,143.027-64.022,143.027-143.027C286.054,64.04,222.022,0,143.027,0z M143.027,259.236 c-64.183,0-116.209-52.026-116.209-116.209S78.844,26.818,143.027,26.818s116.209,52.026,116.209,116.209 S207.21,259.236,143.027,259.236z M143.036,62.726c-10.244,0-17.995,5.346-17.995,13.981v79.201c0,8.644,7.75,13.972,17.995,13.972 c9.994,0,17.995-5.551,17.995-13.972V76.707C161.03,68.277,153.03,62.726,143.036,62.726z M143.036,187.723 c-9.842,0-17.852,8.01-17.852,17.86c0,9.833,8.01,17.843,17.852,17.843s17.843-8.01,17.843-17.843 C160.878,195.732,152.878,187.723,143.036,187.723z" /> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> <span></span></p> */}
        </div>

        <div className="step">
          <div className="step-sections ">
            <div className="section">
              <div className="section-header">
                <h2 className="section-title">Thông tin giao hàng</h2>
              </div>
              <div className="section-content section-customer-information no-mb">
                <input name="utf8" type="hidden" value="✓" />
                <div className="inventory_location_data">
                  <input
                    name="customer_shipping_country"
                    type="hidden"
                    value="241"
                  />
                  <input name="customer_shipping_province" type="hidden" />
                  <input name="customer_shipping_district" type="hidden" />
                  <input name="customer_shipping_ward" type="hidden" />
                </div>
                <p className="section-content-text">
                  Bạn đã có tài khoản?
                  <Link className="k-a" to="/account/login">
                    Đăng nhập
                  </Link>
                </p>
                <div className="fieldset">
                  <div className="field field-required">
                    <div className="field-input-wrapper">
                      <input
                        placeholder="Họ và tên"
                        className="field-input"
                        size="30"
                        type="text"
                        id="billing_address_full_name"
                        name="billing_address[full_name]"
                      />
                    </div>
                  </div>
                  <div className="field  field-two-thirds">
                    <div className="field-input-wrapper">
                      <input
                        placeholder="Email"
                        className="field-input"
                        size="30"
                        type="email"
                        id="checkout_user_email"
                        name="checkout_user[email]"
                      />
                    </div>
                  </div>
                  <div className="field field-required field-third  ">
                    <div className="field-input-wrapper">
                      <input
                        placeholder="Số điện thoại"
                        className="field-input"
                        size="30"
                        maxLength="15"
                        type="tel"
                        id="billing_address_phone"
                        name="billing_address[phone]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-content">
                <div className="fieldset">
                  <form
                    id="form_update_shipping_method"
                    className="field default"
                    acceptCharset="UTF-8"
                    method="post"
                  >
                    <input name="utf8" type="hidden" value="✓" />
                    <div className="content-box mt0">
                      <div
                        id="form_update_location_customer_shipping"
                        className="order-checkout__loading radio-wrapper content-box-row content-box-row-padding content-box-row-secondary "
                        htmlFor="customer_pick_at_location_false"
                      >
                        <input name="utf8" type="hidden" value="✓" />
                        <div className="order-checkout__loading--box">
                          <div className="order-checkout__loading--circle"></div>
                        </div>

                        <div className="field field-required  ">
                          <div className="field-input-wrapper">
                            <label
                              className="field-label"
                              htmlFor="billing_address_address1"
                            >
                              Địa chỉ
                            </label>
                            <input
                              placeholder="Địa chỉ"
                              className="field-input"
                              size="30"
                              type="text"
                              id="billing_address_address1"
                              name="billing_address[address1]"
                            />
                          </div>
                        </div>
                        <input
                          name=" _customer_shipping_country"
                          type="hidden"
                        />
                        <input
                          name=" _customer_shipping_province"
                          type="hidden"
                        />
                        <input
                          name=" _customer_shipping_district"
                          type="hidden"
                        />
                        <input name=" _customer_shipping_ward" type="hidden" />
                        <div className="field field-show-floating-label field-required field-third ">
                          <div className="field-input-wrapper field-input-wrapper-select">
                            <label
                              className="field-label"
                              htmlFor="customer_shipping_province"
                            >
                              Tỉnh / thành{" "}
                            </label>
                            <select
                              className="field-input"
                              id="customer_shipping_province"
                              name="customer_shipping_province"
                            >
                              <option data-code="null" value="null">
                                Chọn tỉnh / thành{" "}
                              </option>
                              <option data-code="null" value="null">
                                ?
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="field field-show-floating-label field-required field-third ">
                          <div className="field-input-wrapper field-input-wrapper-select">
                            <label
                              className="field-label"
                              htmlFor="customer_shipping_district"
                            >
                              Quận / huyện
                            </label>
                            <select
                              className="field-input"
                              id="customer_shipping_district"
                              name="customer_shipping_district"
                            >
                              <option data-code="null" value="null">
                                Chọn quận / huyện
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="field field-show-floating-label   field-third  ">
                          <div className="field-input-wrapper field-input-wrapper-select">
                            <label
                              className="field-label"
                              htmlFor="customer_shipping_ward"
                            >
                              Phường / xã
                            </label>
                            <select
                              className="field-input"
                              id="customer_shipping_ward"
                              name="customer_shipping_ward"
                            >
                              <option data-code="null" value="null">
                                Chọn phường / xã
                              </option>
                            </select>
                          </div>
                        </div>

                        <div
                          id="div_location_country_not_vietnam"
                          className="section-customer-information "
                        >
                          <div className="field field-two-thirds">
                            <div className="field-input-wrapper">
                              <label
                                className="field-label"
                                htmlFor="billing_address_city"
                              >
                                Thành phố
                              </label>
                              <input
                                placeholder="Thành phố"
                                className="field-input"
                                size="30"
                                type="text"
                                id="billing_address_city"
                                name="billing_address[city]"
                              />
                            </div>
                          </div>
                          <div className="field field-third">
                            <div className="field-input-wrapper">
                              <label
                                className="field-label"
                                htmlFor="billing_address_zip"
                              >
                                Mã bưu chính
                              </label>
                              <input
                                placeholder="Mã bưu chính"
                                className="field-input"
                                size="30"
                                type="text"
                                id="billing_address_zip"
                                name="billing_address[zip]"
                              />
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
          <div className="step-footer">
            <form id="form_next_step">
              <input name="utf8" type="hidden" value="✓" />
              <button
                type="button"
                className="dark step-footer-continue-btn btn"
              >
                <span className="btn-content">
                  <Link className="k-c-hover" to="/checkout/payment">
                    Tiếp tục đến phương thức thanh toán
                  </Link>
                </span>
                <i className="btn-spinner icon icon-button-spinner"></i>
              </button>
            </form>
            <Link className="step-footer-previous-link k-a" to="/cart">
              Giỏ hàng
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;
