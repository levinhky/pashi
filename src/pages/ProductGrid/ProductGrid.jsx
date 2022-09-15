import ProductList from "components/ProductList/ProductList";
import axiosClient from "configs/api";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./ProductGrid.module.css";

function ProductGrid(props) {
  const [productList, setProductList] = useState([]);
  const [limit, setLimit] = useState(8);
  const [totalPages, setTotalPages] = useState(null);

  const { search } = useLocation();
  const { category } = useParams();
  const navigate = useNavigate();

  const pageNumbers = Array.from({ length: totalPages }, (v, i) => i + 1);
  const searchValue = new URLSearchParams(search).get("q");
  const page = new URLSearchParams(search).get("page");

  useEffect(() => {
    const getProductList = async () => {
      let data = null;
      if (category === "all") {
        if (!searchValue) {
          data = await axiosClient.get("products", {
            params: { _page: page, _limit: limit },
          });
        } else {
          data = await axiosClient.get("products", {
            params: { _page: page, _limit: limit, q: searchValue },
          });
        }
        document.querySelector(".current").innerHTML = "Sản phẩm nổi bật";
      } else if (category === "new-arrivals") {
        data = await axiosClient.get("products", {
          params: {
            _page: page,
            _limit: limit,
            _sort: "name",
            _order: "asc",
          },
        });
        document.querySelector(".current").innerHTML = "Sản phẩm nổi bật";
      } else if (category === "hot-products") {
        data = await axiosClient.get("products", {
          params: { _page: page, _limit: limit, q: "hot-product" },
        });
        document.querySelector(".current").innerHTML = "Sản phẩm nổi bật";
      } else {
        data = await axiosClient.get("products", {
          params: { _page: page, _limit: limit, category_id: +category },
        });
      }

      setTotalPages(Math.ceil(data.pagination._totalRows / limit));
      setProductList(data.data);
    };

    getProductList();
  }, [category, limit, page, searchValue]);
  console.log('page',page);

  return (
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
            <button
              onClick={() => {
                navigate(`/collections/all/?page=${Math.max(page - 1, 1)}`);
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <i className="bx bx-chevrons-left"></i>
            </button>
          </li>
          {pageNumbers.map((number, index) => (
            <li key={index}>
              <button
                className={number == page ? styles["active"] : ""}
                onClick={() => {
                  console.log('number',number);
                  navigate(`/collections/all/?page=${number}`)
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
            <button
              onClick={() => {
                navigate(`/collections/all/?page=${Math.min(page + 1, totalPages)}`);
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <i className="bx bx-chevrons-right"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductGrid;
