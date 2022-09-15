import styles from "./Inbox.module.css";

function Inbox(props) {
  return (
    <>
      <div className={styles["title"]}>
        <h1 className={styles["title-heading"]}>treat your inbox</h1>
      </div>

      <div className={styles["news-email-box"]}>
        <p>Nhập địa chỉ email của bạn để nhận được tin tức mới nhất</p>
        <div className={styles["news-email-form"]}>
          <form action="">
            <input type="text" placeholder="Nhập email của bạn..." />
            <button>Đăng kí</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Inbox;
