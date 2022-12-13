import styles from './style.module.css';
const StoreInfo = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles["title"]}>
                <h1 className={styles["title-heading"]}>hệ thống cửa hàng</h1>
            </div>
            <p>
                <strong>Store:</strong> <br/>
                Lầu 1, 42 Chung cư Tôn Thất Thiệp, phường Bến Nghé, quận 1, TP.HCM.
            </p>
        </div>
    )
}

export default StoreInfo;

