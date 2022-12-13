import styles from './style.module.css';

const HowToShop = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles["title"]}>
                <h1 className={styles["title-heading"]}>hướng dẫn mua hàng</h1>
            </div>
            <div className="content-page">
                <p><em><span className={'underline'}>Bước 1:</span></em><span>&nbsp;</span>Thêm sản
                    phẩm vào giỏ hàng</p><p>Quý khách vui lòng chọn sản phẩm, size và số lượng cần mua. Click vào ô
                "THÊM VÀO GIỎ".</p>
                <p><em><span className={'underline'}>Bước 2:</span><span>&nbsp;</span></em>Kiểm
                    tra số lượng + sản phẩm&nbsp;</p><p>Quý khách vui lòng kiểm tra chính xác số lượng và sản phẩm có
                trong
                giỏ hàng. Sau đó tiến hành đi đến bước "THANH TOÁN".</p>
                <p>
                    <em><span className={'underline'}>Bước 3:</span></em><span>&nbsp;</span>Điền
                    thông tin nhận hàng và hình thức thanh toán</p><p>Quý khách vui lòng điền đầy đủ thông tin đặt hàng
                cần
                thiết. Lưu ý: điền đúng và chính xác các thông tin để việc xử lý đơn hàng được nhanh chóng hơn.</p><p>Ví
                dụ: Họ và tên, Email, Địa chỉ, Số điện thoại ...</p>
                <p><em><span className={'underline'}>Bước 4:</span></em><span>&nbsp;</span>Xác
                    nhận thông tin thanh toán</p><p>Sau khi quý khách đã kiểm tra đầy đủ thông tin và biết rõ giá trị
                đơn
                hàng, click vào "HOÀN TẤT ĐƠN HÀNG"</p><p>Nhân viên sẽ tiếp nhận đơn hàng từ website và điện thoại cho
                khách để xác thực thông tin đơn hàng. Đơn hàng chỉ được giao khi và chỉ khi khách hàng được nhân viên
                điện thoại xác nhận thành công.</p>
            </div>
        </div>
    )
}

export default HowToShop;