import './qwerty.css';

function ThongTinChung() {
    return (
        <div>
            <div className='flex'>
                <div className='flex-1'>
                    <div className="title">BẢNG THÔNG TIN CỦA TÔI</div>
                    <p className='titles'>Thông tin tài khoản</p>
                    <div>
                        <p className='text'>Họ và tên: WD Kyr</p>
                        <p className='text'>Email: abc@gmail.com</p>
                    </div>
                </div>
                <div className='flex-2'>
                    <a href=''>Đăng xuất</a>
                </div>
            </div>
            <div className='flex_table'>
                <div className='titles_table'>
                    Các đơn hàng vừa đặt
                </div>
                <div className='end-all'>
                    <a href=''>Xem tất cả</a>
                </div>
            </div>


            <table class="table">

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

            <div className='flex_3'>
                <div className='flex_left'>
                    Sổ địa chỉ
                </div>
                <div className='end-all'>
                    <a >Xem tất cả</a>
                </div>
            </div>
            <div className='flex_box'>
                <div className='flex_box_left'>
                    <p className='bord'>WD Kyr<a>Mặc định</a></p>
                    <p>Địa chỉ, VietNam</p>
                    <p>Điện thoại:</p>
                    <div className='box'>
                        <div className='Sua'>Sửa</div>
                        <div className='Xoa'>Xóa</div>
                    </div>
                </div>
                <div className='flex_box_right'>
                    <p className='bord'>rock<a>Mặc định</a></p>
                    <p>Địa chỉ: Q9.TP.HCM</p>
                    <p>Điện thoại: 0376297865</p>
                    <div className='box_2'>
                        <div className='Sua'>Sửa</div>
                        <div className='Xoa'>Xóa</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThongTinChung;