import styles from "./Footer.module.css";

function Footer(props) {
  return (
    <footer>
      <div className={styles["wrapper"]}>
        <div className={styles["item"]}>
          <h3>Thông tin</h3>
          <ul>
            <li>
              <a href="/">Tìm kiếm</a>
            </li>
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
            <li>
              <a href="/">New Arrivals</a>
            </li>
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
    </footer>
  );
}

export default Footer;
