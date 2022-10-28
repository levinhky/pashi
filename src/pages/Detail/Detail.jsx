import Loading from "components/Loading/Loading";
import RequencyProduct from "components/requencyProduct/requencyProduct";
import axiosClient from "configs/api";
import { vnd } from "configs/functions";
import { toastError, toastSuccess } from "configs/toast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart, caculateTotal } from "slices/cartSlice";
import styles from "./Detail.module.css";

function Detail(props) {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [sizeValue, setSizeValue] = useState("");
  const [loading, setLoading] = useState(true);

  const dispath = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispath(caculateTotal());
  }, [cartItems]);

  useEffect(() => {
    const getProductDetail = async () => {
      const data = await axiosClient.get("products", { params: { id: id } });
      setProductDetail(data[0]);
      setLoading(false);
    };

    getProductDetail();
  }, [id]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const addSuccess = () => {
    toastSuccess("Thêm sản phẩm thành công!");
  };

  useEffect(() => {
    const checkSizes = document.querySelectorAll(`.${styles["size"]}`);
    checkSizes.forEach((size) => {
      size.addEventListener("click", () => {
        const value = size.querySelector(".size-value").value;
        const sizeChecked = document.querySelector(
          `.${styles["size"]}.${styles["size-checked"]}`
        );
        if (sizeChecked)
          sizeChecked.classList.remove(`${styles["size-checked"]}`);
        size.classList.add(`${styles["size-checked"]}`);

        if (value) setSizeValue(value);
      });
    });
  }, []);

  if (sizeValue) {
    productDetail.size = sizeValue;
  }

  console.log(productDetail);

  return (
    <>
      {productDetail && (
        <div className={styles["wrapper"]}>
          <div className={styles["box-right"]}>
            <div className={styles["image"]}>
              <img src={productDetail.thumbnail} alt={productDetail.name} />
            </div>
          </div>
          <div className={styles["box-left"]}>
            <div className={styles["info"]}>
              <h2>{productDetail.name}</h2>
              <div className={styles["price"]}>{vnd(productDetail.price)}</div>
              <div className={styles["status"]}>
                Trạng thái : <span>Còn hàng</span>
              </div>
              <div className={styles["desc"]}>
                Chưa có mô tả cho sản phẩm này
              </div>
            </div>
            <div className={styles["action"]}>
              <form>
                <button
                  type="button"
                  onClick={() => {
                    if (quantity <= 1) {
                      return;
                    } else {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button type="button" onClick={() => setQuantity(quantity + 1)}>
                  +
                </button>
              </form>
              <div className={styles["add-cart"]}>
                <button
                  onClick={() => {
                    if (sizeValue == "") {
                      toastError(
                        "Vui lòng chọn kích cỡ trước khi thêm vào giỏ hàng!"
                      );
                    } else {
                      dispath(addToCart({ ...productDetail, quantity }));
                      addSuccess();
                    }
                  }}
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>
            <div className={styles["variants"]}>
              <div className={styles["title"]}>Size</div>
              <div className={styles["sizes"]}>
                <div className={styles["size"]}>
                  <label>S</label>
                  <img
                    alt="img"
                    src="https://theme.hstatic.net/1000370235/1000472578/14/select-pro.png?v=870"
                  />
                  <input className="size-value" type="hidden" value="S" />
                </div>
                <div className={styles["size"]}>
                  <label>M</label>
                  <img
                    alt="img"
                    src="https://theme.hstatic.net/1000370235/1000472578/14/select-pro.png?v=870"
                  />
                  <input className="size-value" type="hidden" value="M" />
                </div>
                <div className={styles["size"]}>
                  <label>L</label>
                  <img
                    alt="img"
                    src="https://theme.hstatic.net/1000370235/1000472578/14/select-pro.png?v=870"
                  />
                  <input className="size-value" type="hidden" value="L" />
                </div>
              </div>
            </div>
            <div className={styles["addtion"]}>
              <div className={styles["product-id"]}>
                Mã sản phẩm : <span>250702</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <RequencyProduct />
      {loading && <Loading />}
    </>
  );
}

export default Detail;
