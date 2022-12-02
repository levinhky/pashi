import axiosClient from "configs/api";
import {vnd} from "configs/functions";
import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import styles from "./ProductList.module.css";
import Modal from "../Modal";

function ProductList(props) {
    const {products, isNav, setProductList, page, limit} = props;
    const {pathname, search} = useLocation();
    const navigate = useNavigate();
    const [modalId,setModalId] = useState('');
    const [sort,setSort] = useState('');
    const [productDetail, setProductDetail] = useState({});

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
            setProductList(data);
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
                    <div className={styles["title"]}>Lọc sản phẩm</div>
                    <div className={styles["filter"]}>
                        <label>Sắp xếp theo:</label>
                        <span className={`${styles["filter-box"]} current`}>
              Sản phẩm nổi bật
            </span>
                        <ul className={`${styles["filter-select"]} select`}>
                            <li
                                onClick={() => setSort('desc')}
                                className={`${styles["option"]} option`}
                                text="Sản phẩm nổi bật"
                            >
                                Sản phẩm nổi bật
                            </li>
                            <li
                                onClick={() => setSort('price-asc')}
                                className={`${styles["option"]} option`}
                                text="Giá : Tăng dần"
                            >
                                Giá : Tăng dần
                            </li>
                            <li
                                onClick={() => setSort('price-desc')}
                                className={`${styles["option"]} option`}
                                text="Giá : Giảm dần"
                            >
                                Giá : Giảm dần
                            </li>
                            <li
                                onClick={() => setSort('name-asc')}
                                className={`${styles["option"]} option`}
                                text="Tên : A-Z"
                            >
                                Tên : A-Z
                            </li>
                            <li
                                onClick={() => setSort('name-desc')}
                                className={`${styles["option"]} option`}
                                text="Tên : Z-A"
                            >
                                Tên : Z-A
                            </li>
                        </ul>
                    </div>
                </nav>
            )}

            <div className={styles["product-grid"]}>
                {products.map((product) => (
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
                            getProductDetail(product.slug)
                            setModalId('productQuickView')
                        }} data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
                            Xem nhanh
                        </button>
                    </div>
                ))}
                <Modal modalId={modalId} productDetail={productDetail}/>
                {products.length === 0 && <p>Không có sản phẩm!</p>}
            </div>
        </>
    );
}

export default ProductList;
