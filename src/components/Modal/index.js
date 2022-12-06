import styles from './Modal.module.css';
import {useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {vnd} from "../../configs/functions";
import {Link} from "react-router-dom";
import {toastError, toastSuccess} from "../../configs/toast";
import {addToCart} from "../../slices/cartSlice";
import {useDispatch} from "react-redux";

const ModalCustom = ({isModal, setIsModal, productDetail}) => {
    const [images, setImages] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [sizeValue, setSizeValue] = useState("");
    const [checked, setChecked] = useState(0);
    const [sizeS, setSizeS] = useState("");
    const [sizeM, setSizeM] = useState("");
    const [sizeL, setSizeL] = useState("");
    const dispath = useDispatch();

    useEffect(() => {
        if (productDetail._id) {
            productDetail.size = '';
            productDetail.sizeArr = [];
            setImages(productDetail?.thumbnails)
            setSizeS(productDetail?.sizes[0]?.size);
            setSizeM(productDetail?.sizes[1]?.size);
            setSizeL(productDetail?.sizes[2]?.size);
        }
    }, [productDetail]);

    return (
        <>
            {isModal && <div className={styles["overlay"]}>
                <div className={styles['content']}>
                    <div className={styles['close-icon']} onClick={() => {
                        setIsModal(false);
                        setQuantity(1);
                        setChecked(0);
                    }
                    }>
                        <i className='bx bx-x'></i>
                    </div>
                    <div className={'flex'}>
                        <div className={'w-2/5'}>
                            <div className={styles["image"]}>
                                <Carousel thumbWidth={40}>
                                    {images.map((image, i) => (
                                        <div key={i}>
                                            <img src={image.thumbnail} alt={productDetail.name}/>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                        <div className={'w-3/5 ml-5'}>
                            <div className={styles["info"]}>
                                <h2>{productDetail.name}</h2>
                                <div className={styles["price"]}>{vnd(productDetail.price)}</div>
                                <div className={styles["status"]}>
                                            <span
                                                className={'text-2xl font-medium'}>Trạng thái</span> : <span>{productDetail.quantity === 0 ? 'Hết hàng' : 'Còn hàng'}</span>
                                </div>
                                <div className={styles["desc"]}>
                                            <span
                                                className={'font-normal font-sans'}>Chưa có mô tả cho sản phẩm này!</span>
                                </div>
                                <div><span className={'text-2xl font-medium'}>Mã sản phẩm</span>: <span
                                    className={'text-1xl font-light'}>{productDetail.sku}</span></div>
                            </div>
                            <div className={styles['action']}>
                                <div>
                                    <label className="block text-gray-700 text-1xl mt-1 mb-2"
                                           htmlFor="quantity">
                                        Số lượng
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-20 text-center py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        id="quantity" type="text"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}/>
                                </div>
                                <div className={styles["variants"]}>
                                    <div className={styles["title"]}>Size</div>
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
                                <div className={'flex items-center'}>
                                    <div className={styles["add-cart"]}>
                                        <button
                                            onClick={() => {
                                                productDetail.sizeArr = [...productDetail.sizeArr, {
                                                    size: sizeValue,
                                                    quantity: +quantity
                                                }];
                                                productDetail.size = sizeValue;
                                                if (sizeValue === '') {
                                                    toastError("Vui lòng chọn kích cỡ trước khi thêm vào giỏ hàng!");
                                                } else if (isNaN(quantity) === true) {
                                                    toastError("Số lượng không thể chứa ký tự!");
                                                } else {
                                                    dispath(addToCart({...productDetail, quantity: +quantity}));
                                                    toastSuccess("Thêm sản phẩm thành công!");
                                                }
                                            }}
                                        >
                                            Thêm vào giỏ
                                        </button>
                                    </div>
                                    <Link
                                        to={`/products/detail/?slug=${productDetail.slug}`}>Xem chi tiết</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ModalCustom;