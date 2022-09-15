import axiosClient from "configs/api";
import { vnd } from "configs/functions";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./ProductList.module.css";

function ProductList(props) {
  const { products, isNav, setProductList, page, limit } = props;
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const sortParam = new URLSearchParams(search).get("sort");
  const orderParam = new URLSearchParams(search).get("order");

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
    if (search.length > 0) {
      const getFilterProducts = async () => {
        const data = await axiosClient.get("products", {
          params: {
            _page: page,
            _limit: limit,
            _sort: sortParam,
            _order: orderParam,
          },
        });
        setProductList(data.data);
      };

      getFilterProducts();
    }
  }, [orderParam, sortParam, search, limit, page, setProductList]);

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
                onClick={() => navigate(`${pathname}?sort=id&order=asc`)}
                className={`${styles["option"]} option`}
                text="Sản phẩm nổi bật"
              >
                Sản phẩm nổi bật
              </li>
              <li
                onClick={() => navigate(`${pathname}?sort=price&order=asc`)}
                className={`${styles["option"]} option`}
                text="Giá : Tăng dần"
              >
                Giá : Tăng dần
              </li>
              <li
                onClick={() => navigate(`${pathname}?sort=price&order=desc`)}
                className={`${styles["option"]} option`}
                text="Giá : Giảm dần"
              >
                Giá : Giảm dần
              </li>
              <li
                onClick={() => navigate(`${pathname}?sort=name&order=asc`)}
                className={`${styles["option"]} option`}
                text="Tên : A-Z"
              >
                Tên : A-Z
              </li>
              <li
                onClick={() => navigate(`${pathname}?sort=name&order=desc`)}
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
          <div className={styles["item"]} key={product.id}>
            <Link to={`/products/${product.id}`} className={styles["image"]}>
              <img src={product.thumbnail} alt="product" />
            </Link>
            <div className={styles["info"]}>
              <h2>
                <Link to={`/products/${product.id}`} className={styles["name"]}>
                  {product.name}
                </Link>
              </h2>
              <div className={styles["price"]}>
                <span>{vnd(product.price)}</span>
              </div>
            </div>
          </div>
        ))}
        {products.length === 0 && <p>Không có sản phẩm!</p>}
      </div>
    </>
  );
}

export default ProductList;
