import Loading from "components/Loading/Loading";
import ProductList from "components/ProductList/ProductList";
import axiosClient from "configs/api";
import {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import styles from "./ProductGrid.module.css";

function ProductGrid(props) {
    const [productList, setProductList] = useState([]);
    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [loading, setLoading] = useState(true);

    const {search} = useLocation();
    const {category} = useParams();
    const navigate = useNavigate();

    const pageNumbers = Array.from({length: Math.ceil(productList.length / 2)}, (v, i) => i + 1);
    const searchValue = new URLSearchParams(search).get("q");

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });

    useEffect(() => {
        const getRows = async () => {
            let length = 0;
            if (category === "all") {
                length = await axiosClient.get("products", {params: {page}});
            } else if (category === "new-arrivals") {
                length = await axiosClient.get("products", {
                    params: {page},
                });
            } else if (category === "hot-products") {
                length = await axiosClient.get("products", {
                    params: {page},
                });
            } else {
                length = await axiosClient.get("products/find/category", {
                    params: {page, name: category},
                });
            }
            setTotalPages(Math.ceil(length.length / limit));
        }
        getRows();
    });

    useEffect(() => {
        const getProductList = async () => {
            let data = null;
            if (category === "all") {
                data = await axiosClient.get("products", {
                    params: {limit, page},
                });
                document.querySelector(".current").innerHTML = "Sản phẩm nổi bật";
            } else if (category === "new-arrivals") {
                data = await axiosClient.get("products", {
                    params: {
                        limit: 2, page:2
                    },
                });
                document.querySelector(".current").innerHTML = "Sản phẩm nổi bật";
            } else if (category === "hot-products") {
                data = await axiosClient.get("products", {
                    params: {limit: 2, page},
                });
                document.querySelector(".current").innerHTML = "Sản phẩm nổi bật";
            } else {
                data = await axiosClient.get("products/find/category", {
                    params: {limit, page, name: category},
                });
            }

            setProductList(data);
            setLoading(false);
        };

        getProductList();
    }, [category, limit, page, searchValue]);

    return (
        <>
            <div className={styles["wrapper"]}>
                <ProductList
                    products={productList}
                    isNav={true}
                    page={page}
                    limit={limit}
                    setProductList={setProductList}
                />

                <div className={styles["product-pagination"]}>
                    <ul>
                        <li>
                            {page >= pageNumbers.length && <button
                                onClick={() => {
                                    setPage(page - 1)
                                    window.scroll({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                <i className="bx bx-chevrons-left"></i>
                            </button>}
                        </li>
                        {pageNumbers.map((number, index) => (
                            <li key={index}>
                                <button
                                    className={number === page ? styles["active"] : ""}
                                    onClick={() => {
                                        setPage(number)
                                        window.scroll({
                                            top: 0,
                                            left: 0,
                                            behavior: "smooth",
                                        });
                                    }}
                                >
                                    {number}
                                </button>
                            </li>
                        ))}
                        <li>
                            {page < pageNumbers.length && <button
                                onClick={() => {
                                    setPage(page + 1)
                                    window.scroll({
                                        top: 0,
                                        left: 0,
                                        behavior: "smooth",
                                    });
                                }}
                            >
                                <i className="bx bx-chevrons-right"></i>
                            </button>}
                        </li>
                    </ul>
                </div>
            </div>
            {loading && <Loading/>}
        </>
    );
}

export default ProductGrid;
