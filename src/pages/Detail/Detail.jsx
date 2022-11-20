import Loading from "components/Loading/Loading";
import RelativeProduct from "components/RelativeProduct/RelativeProduct";
import axiosClient from "configs/api";
import {vnd} from "configs/functions";
import {toastError, toastSuccess} from "configs/toast";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import {addToCart, caculateTotal} from "slices/cartSlice";
import styles from "./Detail.module.css";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../configs/firebase";
import {getUserInfo} from "../../slices/authSlice";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Detail(props) {
    const {id} = useParams();

    const [productDetail, setProductDetail] = useState({});
    const [sizes,setSizes] = useState([]);
    const [images,setImages] = useState([]);
    const [relativeProduct,setRelativeProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [sizeValue, setSizeValue] = useState("");
    const [loading, setLoading] = useState(true);
    const [tabActive, setTabActive] = useState(1);
    const {userInfo} = useSelector((state) => state.auth);
    const {search} = useLocation();
    const dispath = useDispatch();
    const {cartItems} = useSelector((state) => state.cart);
    const slug = new URLSearchParams(search).get("slug");

    useEffect(() => {
        dispath(caculateTotal());
    }, [cartItems]);

    useEffect(() => {
        const getProductDetail = async () => {
            const data = await axiosClient.get("products/find/?slug=" + slug);
            setProductDetail(data);
            setSizes(data?.sizes);
            setImages(data?.thumbnails)
            setLoading(false);
        };

        getProductDetail();
    }, [slug]);

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, [slug]);

    //auth
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userInfo = {
                    uid: user.uid,
                    photoUrl: user.photoURL,
                    phoneNumber: user.phoneNumber,
                    email: user.email,
                    displayName: user.displayName,
                    accessToken: user.accessToken,
                };
                dispath(getUserInfo(userInfo));
            } else {
                console.log("User signed out");
            }
        });
    }, [dispath, auth]);

    const addSuccess = () => {
        toastSuccess("Thêm sản phẩm thành công!");
    };

    useEffect(() => {
        const getRelative = async () => {
            const products = await axiosClient.get('products',{params:{limit:6}})
            setRelativeProduct(products);
        }
        getRelative();
    })

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

    return (
        <>
            {productDetail && (
                <div className={styles["wrapper"]}>
                    <div className={styles["box-right"]}>
                        <div className={styles["image"]}>
                            {/*<img src={productDetail.thumbnails[0].thumbnail} alt={productDetail.name}/>*/}
                            <Carousel>
                                {images.map((image,i) => (
                                    <div key={i}>
                                        <img src={image.thumbnail} alt={productDetail.name} />
                                        <p className="legend">{productDetail.name}</p>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className={styles['user-helper']}>
                            <div className={styles['tabs']}>
                                <div onClick={() => {
                                    setTabActive(1)
                                }} className={
                                    tabActive === 1 ? `${styles['tab-item']} ${styles['active']}` : `${styles['tab-item']}`
                                }>
                                    Hướng dẫn chọn size
                                </div>
                                <div onClick={() => {
                                    setTabActive(2)
                                }} className={
                                    tabActive === 2 ? `${styles['tab-item']} ${styles['active']}` : `${styles['tab-item']}`
                                }>
                                    Bình luận
                                </div>
                            </div>
                            <div className={styles["tab-content"]}>
                                {tabActive === 1 && <div className={`${styles['tab-pane']} ${styles['size-table']}`}>
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
                                        <tr style={{backgroundColor: "#eee"}}>
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
                                        <tr style={{backgroundColor: "#eee"}}>
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
                                        </tbody>
                                    </table>
                                </div>}
                                {tabActive === 2 &&
                                    <div className={`${styles['tab-pane']} ${styles['comment-section']}`}>
                                        {userInfo.uid ?
                                            <div>
                                                <div id={styles['user-icon']}>
                                                    <img src={userInfo.photoUrl} alt={userInfo.displayName} />
                                                </div>
                                                <textarea name="comment-box" rows="1" cols="50"
                                                          placeholder={'Nhập bình luận của bạn ở đây...'}></textarea>
                                            </div> :
                                            <h3 id={styles['login-warn']}>Vui lòng <Link to='/account/login'>đăng nhập</Link> để bình luận</h3>
                                        }
                                        {userInfo.uid && <span className={styles['send-icon']}><i
                                            className='bx bxs-send'></i></span>}
                                        <div className={styles['comment-content']}>
                                            {/*<div className={styles['comment-item']}>*/}
                                            {/*        <div className={styles['thumbnail']}>*/}
                                            {/*            <img src={userInfo.photoUrl} alt={userInfo.displayName} />*/}
                                            {/*        </div>*/}
                                            {/*   <div className={styles['content']}>*/}
                                            {/*       <div className={styles['name']}>{userInfo.displayName} </div>*/}
                                            {/*       <div className={styles['text']}>Hehehehe</div>*/}
                                            {/*   </div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                    <div className={styles["box-left"]}>
                        <div className={styles["info"]}>
                            <h2>{productDetail.name}</h2>
                            <div className={styles["price"]}>{vnd(productDetail.price)}</div>
                            <div className={styles["status"]}>
                                Trạng thái : <span>{productDetail.quantity === 0 ? 'Hết hàng' : 'Còn hàng'}</span>
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
                                        if (sizeValue === "") {
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
                                    <label>{sizes[0]?.size}</label>
                                    <img
                                        alt="img"
                                        src="https://theme.hstatic.net/1000370235/1000472578/14/select-pro.png?v=870"
                                    />
                                    <input className="size-value" type="hidden" value={sizes[0]?.size} />
                                </div>
                                <div className={styles["size"]}>
                                    <label>{sizes[1]?.size}</label>
                                    <img
                                        alt="img"
                                        src="https://theme.hstatic.net/1000370235/1000472578/14/select-pro.png?v=870"
                                    />
                                    <input className="size-value" type="hidden" value={sizes[1]?.size} />
                                </div>
                                <div className={styles["size"]}>
                                    <label>{sizes[2]?.size}</label>
                                    <img
                                        alt="img"
                                        src="https://theme.hstatic.net/1000370235/1000472578/14/select-pro.png?v=870"
                                    />
                                    <input className="size-value" type="hidden" value={sizes[2]?.size} />
                                </div>

                            </div>
                        </div>
                        <div className={styles["addtion"]}>
                            <div className={styles["product-id"]}>
                                Mã sản phẩm : <span>{productDetail.sku}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <RelativeProduct products={relativeProduct} />
            {loading && <Loading/>}
        </>
    );
}

export default Detail;