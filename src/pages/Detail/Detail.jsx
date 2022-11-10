import Loading from "components/Loading/Loading";
import RelativeProduct from "components/RelativeProduct/RelativeProduct";
import axiosClient from "configs/api";
import {vnd} from "configs/functions";
import {toastError, toastSuccess} from "configs/toast";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {addToCart, caculateTotal} from "slices/cartSlice";
import styles from "./Detail.module.css";

function Detail(props) {
    const {id} = useParams();

    const [productDetail, setProductDetail] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [sizeValue, setSizeValue] = useState("");
    const [loading, setLoading] = useState(true);
    const [isSizeShow, setIsSizeShow] = useState(true);
    const [isCmtShow, setIsCmtShow] = useState(false);

    const dispath = useDispatch();

    const {cartItems} = useSelector((state) => state.cart);

    useEffect(() => {
        dispath(caculateTotal());
    }, [cartItems]);

    useEffect(() => {
        const getProductDetail = async () => {
            const data = await axiosClient.get("products", {params: {id: id}});
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
                            <img src={productDetail.thumbnail} alt={productDetail.name}/>
                        </div>
                        <div className={styles['user-helper']}>
                            <div className={styles['tabs']}>
                                <div onClick={() => {
                                    setIsSizeShow(true)
                                    setIsCmtShow(false)
                                }} className={`${styles['tab-item']} ${styles['active']}`}>
                                    Hướng dẫn chọn size
                                </div>
                                <div onClick={() => {
                                    setIsSizeShow(false)
                                    setIsCmtShow(true)
                                }} className={`${styles['tab-item']}`}>
                                    Bình luận
                                </div>
                            </div>
                            <div className={styles["tab-content"]}>
                                {isSizeShow && <div className={`${styles['tab-pane']} ${styles['size-table']}`}>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>Size</td>
                                            <td>Chiều cao (cm)</td>
                                            <td>Cân nặng (kg)</td>
                                            <td>Ngực (cm)</td>
                                            <td>Eo (cm)</td>
                                            <td>Mông (cm)</td>
                                        </tr>
                                        <tr style={{backgroundColor:"#eee"}}>
                                            <td>S</td>
                                            <td>150 - 155</td>
                                            <td>-</td>
                                            <td>78 - 81</td>
                                            <td>60 - 62</td>
                                            <td>86 - 88</td>
                                        </tr>
                                        <tr>
                                            <td>M</td>
                                            <td>150 - 160</td>
                                            <td>50 - 52</td>
                                            <td>82 - 84</td>
                                            <td>64 - 66</td>
                                            <td>90 - 92</td>
                                        </tr>
                                        <tr style={{backgroundColor:"#eee"}}>
                                            <td>L</td>
                                            <td>160 - 164</td>
                                            <td>-</td>
                                            <td>86 - 88</td>
                                            <td>68 - 70</td>
                                            <td>94 - 96</td>
                                        </tr>
                                        <tr>
                                            <td>FREESIZE</td>
                                            <td>-</td>
                                            <td>&lt;60</td>
                                            <td>78 - 95</td>
                                            <td>58 - 73</td>
                                            <td>86 - 98</td>
                                        </tr>
                                        </tbody></table>
                                </div>}
                                {isCmtShow &&  <div className={`${styles['tab-pane']} ${styles['comment-section']}`}>
                                   <textarea name="comment-box" rows="2" cols="50" placeholder={'Nhập bình luận của bạn ở đây...'}></textarea>
                                    <span className={styles['send-icon']}><i className='bx bxs-send'></i></span>
                                </div>}
                            </div>
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
                                            dispath(addToCart({...productDetail, quantity}));
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
                                    <input className="size-value" type="hidden" value="S"/>
                                </div>
                                <div className={styles["size"]}>
                                    <label>M</label>
                                    <img
                                        alt="img"
                                        src="https://theme.hstatic.net/1000370235/1000472578/14/select-pro.png?v=870"
                                    />
                                    <input className="size-value" type="hidden" value="M"/>
                                </div>
                                <div className={styles["size"]}>
                                    <label>L</label>
                                    <img
                                        alt="img"
                                        src="https://theme.hstatic.net/1000370235/1000472578/14/select-pro.png?v=870"
                                    />
                                    <input className="size-value" type="hidden" value="L"/>
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
            <RelativeProduct/>
            {loading && <Loading/>}
        </>
    );
}

export default Detail;
