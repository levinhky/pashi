import styles from './style.module.css';

const Contact = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles["title"]}>
                <h1 className={styles["title-heading"]}>liên hệ</h1>
            </div>
            <div className="content-page">
                <p><strong>Liên hệ (Contact us)</strong></p><p>&nbsp;</p><p>- Hotline: 069 03 27 12</p><p>- Address:
                Lầu 1 - chung cư 42 Tôn Thất Thiệp, Q1.</p><p>- Email: <a
                href="mailto:pashion.shopping@gmail.com">pashion.shopping@gmail.com</a></p><p>- Instagram: <a
                href="http://instagram.com/pashi" target="_blank">http://instagram.com/pashi</a></p><p>- Facebook: <a
                href="https://www.facebook.com/pashi/" target="_blank">https://www.facebook.com/pashi/</a></p><p>- Liên hệ làm đại
                lý, bán sỉ: <a href="mailto:pashion.shopping@gmail.com">pashion.shopping@gmail.com</a></p>
                <p>&nbsp;</p>
            </div>
        </div>
    )
}

export default Contact;