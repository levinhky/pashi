import Loading from "components/Loading/Loading";
import axiosClient from "configs/api";
import {useEffect, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import styles from "./ProductSearch.module.css";
import ProductList from "../../components/ProductList/ProductList";

function ProductSearch(props) {
    const [productList, setProductList] = useState([]);
    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [loading, setLoading] = useState(true);

    const {search} = useLocation();
    const {category, value} = useParams();
    const navigate = useNavigate();
    const pageNumbers = Array.from({length: totalPages}, (v, i) => i + 1);
    const searchValue = new URLSearchParams(search).get("q");

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });

    useEffect(() => {
        const getProductList = async () => {
            let data = null;
            data = await axiosClient.get("products", {
                params: {limit, page, q: value},
            });

            setProductList(data.products);
            setTotalPages(1);
            setLoading(false);
        };

        getProductList();
    }, [category, limit, page, value]);

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
                            {page > pageNumbers.length && <button
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

export default ProductSearch;
