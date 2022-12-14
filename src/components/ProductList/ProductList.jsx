import axiosClient from "configs/api";
import {vnd} from "configs/functions";
import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import styles from "./ProductList.module.css";
import ModalCustom from "../Modal";

function ProductList(props) {
    const {products, isNav, setProductList, page, limit} = props;
    const {pathname, search} = useLocation();
    const navigate = useNavigate();
    const [modalId, setModalId] = useState('');
    const [sort, setSort] = useState('');
    const [productDetail, setProductDetail] = useState({});
    const [isModal, setIsModal] = useState(false);

    useEffect(() => {
        const filter = document.querySelector(".current");
        const filterSelect = document.querySelector(".select");
        const options = document.querySelectorAll(".option");

        const openSelect = () => {
            filterSelect.classList.toggle(`${styles["active"]}`);
        };

        const closeSelect = () => {
            filterSelect.classList.remove(`${styles["active"]}`);
        };

        filter.addEventListener("click", openSelect);

        options.forEach((option) => {
            option.addEventListener("click", () => {
                closeSelect();
                filter.innerHTML = option.getAttribute("text");
            });
        });

        return () => {
            filter.removeEventListener("click", openSelect);
            options.forEach((option) => {
                option.removeEventListener("click", closeSelect);
            });
        };
    }, []);

    useEffect(() => {
        const getFilterProducts = async () => {
            const data = await axiosClient.get("products", {
                params: {
                    page,
                    limit,
                    sort
                },
            });
            setProductList(data.products);
        };

        getFilterProducts();
    }, [sort, search, limit, page, setProductList]);

    const getProductDetail = async (slug) => {
        const data = await axiosClient.get("products/find/?slug=" + slug);
        setProductDetail(data);
    };

    return (
        <>
            {isNav && (
                <nav>
                    <div className={styles["title"]}>L???c s???n ph???m</div>
                    <div className={styles["filter"]}>
                        <label>S???p x???p theo:</label>
                        <span className={`${styles["filter-box"]} current`}>
              S???n ph???m n???i b???t
            </span>
                        <ul className={`${styles["filter-select"]} select`}>
                            <li
                                onClick={() => setSort('asc')}
                                className={`${styles["option"]} option`}
                                text="S???n ph???m n???i b???t"
                            >
                                S???n ph???m n???i b???t
                            </li>
                            <li
                                onClick={() => setSort('price-asc')}
                                className={`${styles["option"]} option`}
                                text="Gi?? : T??ng d???n"
                            >
                                Gi?? : T??ng d???n
                            </li>
                            <li
                                onClick={() => setSort('price-desc')}
                                className={`${styles["option"]} option`}
                                text="Gi?? : Gi???m d???n"
                            >
                                Gi?? : Gi???m d???n
                            </li>
                            <li
                                onClick={() => setSort('name-asc')}
                                className={`${styles["option"]} option`}
                                text="T??n : A-Z"
                            >
                                T??n : A-Z
                            </li>
                            <li
                                onClick={() => setSort('name-desc')}
                                className={`${styles["option"]} option`}
                                text="T??n : Z-A"
                            >
                                T??n : Z-A
                            </li>
                        </ul>
                    </div>
                </nav>
            )}

            <div className={styles["product-grid"]}>
                {products.length > 0 && products.map((product) => (
                    <div className={styles["item"]} key={product._id}>
                        <Link to={`/products/detail?slug=${product.slug}`} className={styles["image"]}>
                            <img src={product.thumbnails[0].thumbnail} alt="product"/>
                        </Link>
                        <div className={styles["info"]}>
                            <h2>
                                <Link to={`/products/detail/?slug${product.slug}`} className={styles["name"]}>
                                    {product.name}
                                </Link>
                            </h2>
                            <div className={styles["price"]}>
                                <span>{vnd(product.price)}</span>
                            </div>
                        </div>
                        <button id={styles['quick-view']} onClick={() => {
                            getProductDetail(product.slug);
                            setIsModal(true);
                        }}>
                            Xem nhanh
                        </button>
                    </div>
                ))}
                <ModalCustom isModal={isModal} setIsModal={setIsModal} productDetail={productDetail}/>
                {products.length === 0 && <p>Kh??ng c?? s???n ph???m!</p>}
            </div>
        </>
    );
}

export default ProductList;
