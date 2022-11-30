import styles from "./Footer.module.css";
import {useEffect, useState} from "react";
import axiosClient from "../../configs/api";
import {Link} from "react-router-dom";

function Footer(props) {
  const [categories, setCategories] = useState([]);

  // api
  useEffect(() => {
    const getCategories = async () => {
      const data = await axiosClient.get("categories");
      setCategories(data);
    };

    getCategories();
  }, []);

  return (
    <footer>
      <div className={styles["wrapper"]}>
        <div className={styles["item"]}>
          <h3>Thông tin</h3>
          <ul>
            <li>
              <a href="/">Giới thiệu</a>
            </li>
            <li>
              <a href="/">Thông tin cửa hàng</a>
            </li>
          </ul>
        </div>
        <div className={styles["item"]}>
          <h3>Sản phẩm</h3>
          <ul>
            {categories &&
                categories.map((category) => (
                    <li key={category._id}>
                      <Link to={`/collections/${category.category_slug}`}>
                        {category.name}
                      </Link>
                    </li>
                ))}
          </ul>
        </div>
        <div className={styles["item"]}>
          <h3>Chính sách</h3>
          <ul>
            <li>
              <a href="/">Chính sách và quy định chung</a>
            </li>
            <li>
              <a href="/">Hướng dẫn mua hàng</a>
            </li>
            <li>
              <a href="/">Hướng dẫn thanh toán</a>
            </li>
          </ul>
        </div>
        <div className={styles["item"]}>
          <h3>Khác</h3>
          <ul>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Liên hệ</a>
            </li>
            <li>
              <a href="/">Tuyển dụng</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["wrapper"]}>
        <div className={styles["item"]}>
          <ul>
            <li>
              <img className={styles['footer-logo']} src="https://i.imgur.com/b3O0yx2.png" alt="Pashi-logo" />
            </li>
          </ul>
        </div>
        <div className={styles["item"]}>
          <div className='flex'>
            <span><i className='bx bxs-home text-white text-4xl'></i></span>
            <li className='text-white ml-2 w-60'>Lầu 1, 42 Chung cư Tôn Thất Thiệp, phường Bến Nghé, quận 1, TP.HCM.</li>
          </div>
        </div>
        <div className={styles["item"]}>
          <div className='flex'>
            <span><i className='bx bxs-envelope text-white text-4xl'></i></span>
            <li className='text-white ml-2'>Email: pashicareer@pashi.com</li>
          </div>
        </div>
        <div className={styles["item"]}>
          <div className='flex'>
            <span><i className='bx bxs-phone text-white text-4xl'></i></span>
            <li className='text-white ml-2'>Phone: 0998777999</li>
          </div>
        </div>
      </div>
      <div className={styles['wrapper']}>
        <div className="mx-auto my-0">
          <img src={'https://theme.hstatic.net/1000370235/1000472578/14/payment-icon.png?v=909'} alt={'logo'}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
