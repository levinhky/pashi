import './qwerty.css';
import styles from "./thongtin.module.css";
function ThongTinChung() {
    return (
        <div>
            <div className={styles['flex']}>
                <div className={styles['flex-1']}>
                    <div className={styles["title"]}>BẢNG THÔNG TIN CỦA TÔI</div>
                    <p className={styles['titles']}>Thông tin tài khoản</p>
                    <div>
                        <p className={styles['text']}>Họ và tên: WD Kyr</p>
                        <p className={styles['text']}>Email: abc@gmail.com</p>
                    </div>
                </div>
                <div className={styles['flex-2']}>
                    <a href=''>Đăng xuất</a>
                </div>
            </div>
            <div className={styles['flex_table']}>
                <div className={styles['titles_table']}>
                    Các đơn hàng vừa đặt
                </div>
                <div className={styles['end-all']}>
                    <a href=''>Xem tất cả</a>
                </div>
            </div>


            <table class={styles["table"]}>

                <thead>

                    <tr>
                        <th scope="col">Mã đơn hàng</th>
                        <th scope="col">Ngày đặt</th>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Tổng tiền</th>
                        <th scope="col">Trạng thái đơn hàng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td style={{ textAlign: 'left' }}>a</td>
                    </tr>

                </tbody>
            </table>

            <div className={styles['flex_3']}>
                <div className={styles['flex_left']}>
                    Sổ địa chỉ
                </div>
                <div className={styles['end-all']}>
                    <a >Xem tất cả</a>
                </div>
            </div>
            <div className={styles['flex_box']}>
                <div className={styles['flex_box_left']}>
                    <p className={styles['bord']}>WD Kyr<a>Mặc định</a></p>
                    <p>Địa chỉ, VietNam</p>
                    <p>Điện thoại:</p>
                    <div className={styles['box']}>
                        <div className={styles['Sua']}>Sửa</div>
                        <div className={styles['Xoa']}>Xóa</div>
                    </div>
                </div>
                <div className={styles['flex_box_right']}>
                    <p className={styles['bord']}>rock<a>Mặc định</a></p>
                    <p>Địa chỉ: Q9.TP.HCM</p>
                    <p>Điện thoại: 0376297865</p>
                    <div className={styles['box_2']}>
                        <div className={styles['Sua']}>Sửa</div>
                        <div className={styles['Xoa']}>Xóa</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThongTinChung;