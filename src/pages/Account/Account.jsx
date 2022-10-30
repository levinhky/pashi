import { Outlet } from "react-router-dom";
import styles from "./Account.module.css";
import './Account.css';
import ThongTinChung from "./page/ThongTinChung";
import Imglogo from './image/meomeo.jpg'



function Account_detail() {
    return (
        <div className={styles["wrapper"]}>

            <div className="div">
                <div className="container">

                    <input type="radio" name="slider" id="home" />
                    <input type="radio" name="slider" id="blog" />
                    <input type="radio" name="slider" id="services" />
                    <input type="radio" name="slider" id="about" />
                    <nav>
                        <div className="users">
                            <div style={{ backgroundImage: `url(${Imglogo})`, margin: '10px', height: '50px', width: '50px', backgroundSize: '100% 100%' }} />
                            <div style={{padding:10}}>Tài khoản của Son</div>
                            </div>
                        <label for="home" className="home"><a>Thông tin chung</a></label>
                        <label for="blog" className="blog"><a>Số địa chỉ</a></label>
                        <label for="services" className="services"><a>Đơn Hàng của tôi</a></label>
                        <div className="slider"></div>
                    </nav>
                    <section>
                        
                        <div className="content content-1">
                       
                            <ThongTinChung />
                        </div>
                        <div className="content content-2">
                            <div className="title">Nội Dung Tab Blog</div>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                        <div className="content content-3">
                            <div className="title">Nội Dung Tab Dịch Vụ</div>
                            <p>Lorem ipsum dolor sit amet...</p>
                        </div>
                       
                    </section>
                </div>
            </div>
            <div>
                <Outlet />
            </div>

        </div>
    )
}
export default Account_detail;