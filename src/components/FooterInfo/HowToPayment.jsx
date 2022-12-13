import styles from './style.module.css';

const HowToPayment = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles["title"]}>
                <h1 className={styles["title-heading"]}>hướng dẫn mua hàng</h1>
            </div>
            <div className="content-page">
                <p>Khách hàng khi mua sắm tại pashion.netlify.app thanh toán theo các cách sau:</p><p>&nbsp;</p><p><strong>-
                Cách 1: Thanh toán trước online qua thẻ tín dụng (Visa, Master card, ATM....):</strong></p><p>&nbsp;</p>
                <p>+ Bước 1: Khách hàng đặt hàng, cung cấp thông tin đầy đủ, xác thực.</p><p>&nbsp;</p><p>+ Bước 2:
                Khách hàng thanh toán trước.</p><p>&nbsp;</p><p>+ Bước 3: pashion.netlify.app kiểm tra, xác nhận đơn hàng và
                chuyển hàng.</p><p>&nbsp;</p><p>+ Bước 4: Khách hàng kiểm tra và nhận hàng.</p><p>&nbsp;</p><p><strong>-
                Cách 2: Thanh toán sau(COD):</strong></p><p>&nbsp;</p><p>+ Bước 1: Khách hàng đặt hàng; cung cấp thông
                tin đầy đủ, xác thực</p><p>&nbsp;</p><p>+ Bước 2: pashion.netlify.app xác thực đơn hàng;</p><p>&nbsp;</p>
                <p>+ Bước 3: pashion.netlify.app xác nhận thông tin khách hàng (điện thoại, tin nhắn, email).</p>
                <p>&nbsp;</p><p>+ Bước 4: pashion.netlify.app chuyển hàng.</p><p>&nbsp;</p><p>+ Bước 5: Khách hàng nhận hàng
                và thanh toán.</p>
            </div>
        </div>
    )
}

export default HowToPayment;