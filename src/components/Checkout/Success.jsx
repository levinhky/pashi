import styles from "./CheckoutPage.module.css";

const Success = () => {
  return (
<>
      <input id="reloadValue" type="hidden" name="reloadValue" value="" />
      <input id="is_vietnam" type="hidden" value="false" />
      <input id="is_vietnam_location" type="hidden" value="false" />

      <div className={styles["banner"]}>
        <div className={styles["wrap"]}>
          <a href="/" className={styles["logo"]}>


            <h1 className={styles["logo-text"]}>She by Shj</h1>

          </a>
        </div>
      </div>

      <button className={styles["order-summary-toggle order-summary-toggle-hide"]}>
        <div className={styles["wrap"]}>
          <div className={styles["order-summary-toggle-inner"]}>
            <div className={styles["order-summary-toggle-icon-wrapper"]}>
              <svg width="20" height="19" xmlns="http://www.w3.org/2000/svg" className={styles["order-summary-toggle-icon"]}><path d="M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z"></path></svg>
            </div>
            <div className={styles["order-summary-toggle-text order-summary-toggle-text-show"]}>
              <span>Hiển thị thông tin đơn hàng</span>
              <svg width="11" height="6" xmlns="http://www.w3.org/2000/svg" className={styles["order-summary-toggle-dropdown" ]} fill="#000"><path d="M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z"></path></svg>
            </div>
            <div className={styles["order-summary-toggle-text order-summary-toggle-text-hide"]}>
              <span>Ẩn thông tin đơn hàng</span>
              <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg" className={styles["order-summary-toggle-dropdown"]} fill="#000"><path d="M6.138.876L5.642.438l-.496.438L.504 4.972l.992 1.124L6.138 2l-.496.436 3.862 3.408.992-1.122L6.138.876z"></path></svg>
            </div>
            <div className={styles["order-summary-toggle-total-recap"]} data-checkout-payment-due-target="24300000">
              <span className={styles["total-recap-final-price"]}>243,000₫</span>
            </div>
          </div>
        </div>
      </button>
      <div className={styles["content content-second"]}>
        <div className={styles["wrap"]}>
          <div className={styles["sidebar sidebar-second"]}>
            <div className={styles["sidebar-content"]}>
              <div className={styles["order-summary"]}>
                <div className={styles["order-summary-sections"]}>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["content"]}>

        <div className={styles["wrap"]}>
          <div className={styles["sidebar"]}>
            <div className={styles["sidebar-content"]}>
              <div className={styles["order-summary order-summary-is-collapsed"]}>
                <h2 className={styles["visually-hidden"]}>Thông tin đơn hàng</h2>
                <div className={styles["order-summary-sections"]}>
                  <div className={styles["order-summary-section order-summary-section-product-list"]} data-order-summary-section="line-items">
                    <table className={styles["product-table"]}>
                      <thead>
                        <tr>
                          <th scope="col"><span className={styles["visually-hidden"]}>Hình ảnh</span></th>
                          <th scope="col"><span className={styles["visually-hidden"]}>Mô tả</span></th>
                          <th scope="col"><span className={styles["visually-hidden"]}>Số lượng</span></th>
                          <th scope="col"><span className={styles["visually-hidden"]}>Giá</span></th>
                        </tr>
                      </thead>
                      <tbody>

                        <tr className={styles["product"]} data-product-id="1040710178" data-variant-id="1088733669">
                          <td className={styles["product-image"]}>
                            <div className={styles["product-thumbnail"]}>
                              <div className={styles["product-thumbnail-wrapper"]}>
                                <img className={styles["product-thumbnail-image"]} alt="Blue Dara Top" src="//product.hstatic.net/1000370235/product/0501_a0e6803ba5de4066936a50e118c7be03_small.jpg" />
                              </div>
                              <span className={styles["product-thumbnail-quantity"]} aria-hidden="true">1</span>
                            </div>
                          </td>
                          <td className={styles["product-description"]}>
                            <span className={styles["product-description-name order-summary-emphasis"]}>Blue Dara Top</span>

                            <span className={styles["product-description-variant order-summary-small-text"]}>
                              S
                            </span>

                          </td>
                          <td className={styles["product-quantity visually-hidden"]}>1</td>
                          <td className={styles["product-price"]}>
                            <span className={styles["order-summary-emphasis"]}>203,000₫</span>
                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>

                  <div className={styles["order-summary-section order-summary-section-total-lines payment-lines"]} data-order-summary-section="payment-lines">
                    <table className={styles["total-line-table"]}>
                      <thead>
                        <tr>
                          <th scope="col"><span className={styles["visually-hidden"]}>Mô tả</span></th>
                          <th scope="col"><span className={styles["visually-hidden"]}>Giá</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className={styles["total-line total-line-subtotal"]}>
                          <td className={styles["total-line-name"]}>Tạm tính</td>
                          <td className={styles["total-line-price"]}>
                            <span className={styles["order-summary-emphasis"]} data-checkout-subtotal-price-target="20300000">
                              203,000₫
                            </span>
                          </td>
                        </tr>
                        <tr className={styles["total-line total-line-shipping"]}>
                          <td className={styles["total-line-name"]}>Phí vận chuyển</td>
                          <td className={styles["total-line-price"]}>
                            <span className={styles["order-summary-emphasis"]} data-checkout-total-shipping-target="4000000">40,000₫</span>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot className={styles["total-line-table-footer"]}>
                        <tr className={styles["total-line"]}>
                          <td className={styles["total-line-name payment-due-label"]}>
                            <span className={styles["payment-due-label-total"]}>Tổng cộng</span>
                          </td>
                          <td className={styles["total-line-name payment-due"]}>
                            <span className={styles["payment-due-currency"]}>VND</span>
                            <span className={styles["payment-due-price"]} data-checkout-payment-due-target="24300000">
                              243,000₫
                            </span>
                            <span className={styles["checkout_version"]}  data_checkout_version="0">
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
          <div className={styles["main"]}>
            <div className={styles["main-header"]}>
              <a href="/" className={styles["logo"]}>
                <h1 className={styles["logo-text"]}>She by Shj</h1>
              </a>
            </div>
            <div className={styles["main-content"]}>



              <div >
                <div className={styles["section"]}>
                  <div className={styles["section-header os-header"]}>

                    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000" strokeWidth="2" className={styles["hanging-icon checkmark"]}>
                      <path className={styles["checkmark_circle"]} d="M25 49c13.255 0 24-10.745 24-24S38.255 1 25 1 1 11.745 1 25s10.745 24 24 24z"></path><path className={styles["checkmark_check"]} d="M15 24.51l7.307 7.308L35.125 19"></path></svg>

                    <div className={styles["os-header-heading"]}>
                      <h2 className={styles["os-header-title"]}>

                        Đặt hàng thành công

                      </h2>
                      <span className={styles["os-order-number"]}>
                        Mã đơn hàng #110686
                      </span>

                      <span className={styles["os-description"]}>
                        Cám ơn bạn đã mua hàng!
                      </span>

                    </div>
                  </div>
                </div>



                <div className={styles["section thank-you-checkout-info"]}>
                  <div className={styles["section-content"]}>
                    <div className={styles["content-box"]}>
                      <div className={styles["content-box-row content-box-row-padding content-box-row-no-border"]}>
                        <h2>Thông tin đơn hàng</h2>
                      </div>
                      <div className={styles["content-box-row content-box-row-padding"]}>
                        <div className={styles["section-content"]}>
                          <div className={styles["section-content-column"]}>
                            <h3>Thông tin giao hàng</h3>

                            tran kiet
                          <br/>

                          0123456789
                        <br/>

                        <p> 472 cộng h&#242;a
                            <br />
                          X&#227; Sơn C&#244;ng
                            <br />
                          Huyện Ứng H&#242;a
                            <br />
                          H&#224; Nội
                            <br />
                         Vietnam
                            <br />
                        </p>
                          <h3>Phương thức thanh toán</h3>
                        <p>Thanh toán khi giao hàng (COD)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["step-footer"]}>

              <a href="/" className={styles["step-footer-continue-btn btn"]}>
                <span className={styles["btn-content"]}>Tiếp tục mua hàng</span>
              </a>

              <p className={styles["step-footer-info"]}>
                <i className={styles["icon icon-os-question"]}></i>
                <span>
                  Cần hỗ trợ? <a href="mailto:online.shebyshj@gmail.com">Liên hệ chúng tôi</a>
                </span>
              </p>
            </div>
          </div>


        </div>
        <div className={styles["hrv-coupons-popup"]}>
          <div className={styles["hrv-title-coupons-popup"]}>
            <p>Chọn giảm giá <span className={styles["count-coupons"]}></span></p>
            <div className={styles["hrv-coupons-close-popup"]}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1663 2.4785L15.5213 0.833496L8.99968 7.35516L2.47801 0.833496L0.833008 2.4785L7.35468 9.00016L0.833008 15.5218L2.47801 17.1668L8.99968 10.6452L15.5213 17.1668L17.1663 15.5218L10.6447 9.00016L17.1663 2.4785Z" fill="#424242"></path>
              </svg>
            </div>
          </div>
          <div className={styles["hrv-content-coupons-code"]}>
            <h3 className={styles["coupon_heading"]}>Mã giảm giá của shop</h3>
            <div className={styles["hrv-discount-code-web"]}>
            </div>
            <div className={styles["hrv-discount-code-external"]}>

            </div>
          </div>
        </div>
      </div>

        </div>
        </div>  
        </>
  );
};

export default Success;
