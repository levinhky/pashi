import styles from './style.module.css';

const Recruit = () => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles["title"]}>
                <h1 className={styles["title-heading"]}>tuyển dụng</h1>
            </div>
            <div className="content-page">
                <p>NHÂN VIÊN BÁN HÀNG</p><p>YÊU CẦU:</p>
                <ul>
                    <li>Ứng viên có độ tuổi từ 18 – 25 tuổi.</li>
                    <li>Có khả năng làm việc nhóm, tinh thần trách nhiệm cao.</li>
                    <li>Có kỹ năng giao tiếp tốt.</li>
                    <li>Cẩn thận, nhanh nhẹn có khả năng nắm bắt công việc.</li>
                    <li>Có kinh nghiệm trong lĩnh vực thời trang, bán lẻ là một ưu thế…</li>
                    <li>Siêng năng, chịu khó, ham học hỏi.</li>
                </ul>
                <p>MÔ TẢ CÔNG VIỆC:</p>
                <ul>
                    <li>Đảm bảo doanh số cá nhân và cửa hàng</li>
                    <li>Sắp xếp trưng bày giữ hình ảnh cửa hàng theo quy định</li>
                    <li>Giới thiệu sản phẩm, tư vấn sản phẩm phù hợp với nhu cầu của Khách Hàng.</li>
                    <li>Kiểm kê hàng hàng hóa, sản phẩm.</li>
                    <li>Chăm sóc khách hàng.</li>
                </ul>
                <p>THỜI GIAN LÀM VIỆC:</p>
                <ul>
                    <li>Nhân viên fulltime: làm ca 8h/ngày</li>
                    <li>Nhân viên làm ca xoay theo lịch được quản lý sắp xếp</li>
                </ul>
                <p>CHÍNH SÁCH &amp; LƯƠNG THƯỞNG:</p>
                <ul>
                    <li>Lương cứng + trợ cấp + thưởng hoa hồng ++….</li>
                    <li>Chính sách trao đổi trực tiếp khi phỏng vấn.</li>
                </ul>
                <p>Thông tin ứng tuyển gửi về <a href={'mailto:pashi@job.com.'}>pashi@job.com.</a></p>
            </div>
        </div>
    )
}

export default Recruit;