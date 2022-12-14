import Loading from "components/Loading/Loading";
import RelativeProduct from "components/RelativeProduct/RelativeProduct";
import axiosClient from "configs/api";
import {vnd} from "configs/functions";
import {toastError, toastSuccess} from "configs/toast";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation, useParams} from "react-router-dom";
import {addToCart, caculateTotal} from "slices/cartSlice";
import styles from "./Detail.module.css";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../configs/firebase";
import {getUserInfo} from "../../slices/authSlice";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

function Detail(props) {
    const [productDetail, setProductDetail] = useState({});
    const [images, setImages] = useState([]);
    const [relativeProduct, setRelativeProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [sizeValue, setSizeValue] = useState("");
    const [sizeS, setSizeS] = useState("");
    const [sizeM, setSizeM] = useState("");
    const [sizeL, setSizeL] = useState("");
    const [checked, setChecked] = useState(0);
    const [loading, setLoading] = useState(true);
    const [tabActive, setTabActive] = useState(1);
    const [commentContent, setCommentContent] = useState('');
    const [commentList, setCommentList] = useState([]);
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
            data.size = '';
            data.sizeArr = [];
            setProductDetail(data);
            setImages(data?.thumbnails)
            setSizeS(data?.sizes[0]?.size);
            setSizeM(data?.sizes[1]?.size);
            setSizeL(data?.sizes[2]?.size);
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

    useEffect(() => {
        const getRelative = async () => {
            const response = await axiosClient.get('products', {params: {limit: 6}})
            setRelativeProduct(response.products);
        }
        getRelative();
    }, []);

    useEffect(() => {
        const getComments = async () => {
            const data = await axiosClient.get(`comments/find/${productDetail._id}`);
            setCommentList(data);
        }

        getComments();
    }, [productDetail._id, commentList])

    const handlePostComment = async () => {
        const content = {
            displayName: userInfo.displayName,
            userId: userInfo.uid,
            commentContent,
            photoUrl: userInfo.photoUrl,
            productId: productDetail._id,
            productName: productDetail.name
        };
        if (commentContent === '') {
            toastError('Vui l??ng nh???p n???i dung!');
        } else {
            await axiosClient.post('comments', content).then(res => {
                toastSuccess('B??nh lu???n c???a b???n ???? ???????c g???i!');
                setCommentContent('');
                setCommentList(res);
            });
        }
    };

    return (
        <>
            {productDetail && (
                <div className={styles["wrapper"]}>
                    <div className={styles["box-right"]}>
                        <div className={styles["image"]}>
                            {/*<img src={productDetail.thumbnails[0].thumbnail} alt={productDetail.name}/>*/}
                            <Carousel>
                                {images.map((image, i) => (
                                    <div key={i}>
                                        <img src={image.thumbnail} alt={productDetail.name}/>
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
                                    H?????ng d???n ch???n size
                                </div>
                                <div onClick={() => {
                                    setTabActive(2)
                                }} className={
                                    tabActive === 2 ? `${styles['tab-item']} ${styles['active']}` : `${styles['tab-item']}`
                                }>
                                    B??nh lu???n
                                </div>
                            </div>
                            <div className={styles["tab-content"]}>
                                {tabActive === 1 && <div className={`${styles['tab-pane']} ${styles['size-table']}`}>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>K??ch th?????c</td>
                                            <td>Chi???u cao (cm)</td>
                                            <td>C??n n???ng (kg)</td>
                                            <td>Ng???c (cm)</td>
                                            <td>V??ng Eo (cm)</td>
                                            <td>M??ng (cm)</td>
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
                                                    <img src={userInfo.photoUrl} alt={'error'}/>
                                                </div>
                                                <textarea name="comment-box" rows="1" cols="50"
                                                          value={commentContent}
                                                          onChange={(e) => setCommentContent(e.target.value)}
                                                          placeholder={'Nh???p b??nh lu???n c???a b???n ??? ????y...'}></textarea>
                                            </div> :
                                            <h3 id={styles['login-warn']}>Vui l??ng <Link to='/account/login'>????ng
                                                nh???p</Link> ????? b??nh lu???n</h3>
                                        }
                                        {userInfo.uid &&
                                            <span onClick={handlePostComment} className={styles['send-icon']}><i
                                                className='bx bxs-send'></i></span>}
                                        <div className={styles['comment-content']}>
                                            {commentList.length > 0 ? commentList.map(item => (
                                                item.display && <div className={styles['comment-item']} key={item._id}>
                                                    <div className={styles['thumbnail']}>
                                                        <img src={item.photoUrl} alt={'error'}/>
                                                    </div>
                                                    <div className={styles['content']}>
                                                        <div className={styles['name']}>{item.displayName} </div>
                                                        <div className={styles['text']}>{item.commentContent}</div>
                                                    </div>
                                                </div>
                                            )) : <span>Ch??a c?? b??nh lu???n cho s???n ph???m n??y!</span>}
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
                                Tr???ng th??i : <span>{productDetail.quantity === 0 ? 'H???t h??ng' : 'C??n h??ng'}</span>
                            </div>
                            <div className={styles["desc"]}>
                                Ch??a c?? m?? t??? cho s???n ph???m n??y
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
                                        if (sizeValue === '') {
                                            toastError("Vui l??ng ch???n k??ch c??? tr?????c khi th??m v??o gi??? h??ng!");
                                        } else if (isNaN(quantity) === true) {
                                            toastError("S??? l?????ng kh??ng th??? ch???a k?? t???!");
                                        } else {
                                            productDetail.sizeArr = [...productDetail.sizeArr, {
                                                size: sizeValue,
                                                quantity: +quantity
                                            }];
                                            productDetail.size = sizeValue;
                                            dispath(addToCart({...productDetail, quantity: +quantity}));
                                            toastSuccess("Th??m s???n ph???m th??nh c??ng!");
                                        }
                                    }}
                                >
                                    Th??m v??o gi???
                                </button>
                            </div>
                        </div>
                        <div className={styles["variants"]}>
                            <div className={styles["title"]}>K??ch Th?????c</div>
                            <div className={styles["sizes"]}>
                                {sizeS && <div
                                    className={checked === 1 ? `${styles["size"]} ${styles["size-checked"]}` : styles["size"]}
                                    onClick={() => {
                                        setChecked(1)
                                        setSizeValue('S')
                                    }}
                                >
                                    <label>{sizeS}</label>
                                    <img
                                        alt="img"
                                        src="https://theme.hstatic.net/1000370235/1000472578/14/select-pro.png?v=870"
                                    />
                                    <input className="size-value" type="hidden" value={sizeS}/>
                                </div>}
                                {sizeM && <div
                                    className={checked === 2 ? `${styles["size"]} ${styles["size-checked"]}` : styles["size"]}
                                    onClick={() => {
                                        setChecked(2)
                                        setSizeValue('M')
                                    }}
                                >
                                    <label>{sizeM}</label>
                                    <img
                                        alt="img"
                                        src="https://theme.hstatic.net/1000370235/1000472578/14/select-pro.png?v=870"
                                    />
                                    <input className="size-value" type="hidden" value={sizeM}/>
                                </div>}
                                {sizeL && <div
                                    className={checked === 3 ? `${styles["size"]} ${styles["size-checked"]}` : styles["size"]}
                                    onClick={() => {
                                        setChecked(3)
                                        setSizeValue('L')
                                    }}
                                >
                                    <label>{sizeL}</label>
                                    <img
                                        alt="img"
                                        src="https://theme.hstatic.net/1000370235/1000472578/14/select-pro.png?v=870"
                                    />
                                    <input className="size-value" type="hidden" value={sizeL}/>
                                </div>}

                            </div>
                        </div>
                        <div className={styles["addtion"]}>
                            <div className={styles["product-id"]}>
                                M?? s???n ph???m : <span>{productDetail.sku}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <RelativeProduct products={relativeProduct}/>
            {loading && <Loading/>}
        </>
    );
}

export default Detail;