import styles from "./Inbox.module.css";
import {toastError, toastSuccess} from "../../configs/toast";
import {useState} from "react";

function Inbox(props) {
    const [value, setValue] = useState('');
    return (
        <>
            <div className={styles["title"]}>
                <h1 className={styles["title-heading"]}>gửi thông báo tới tôi</h1>
            </div>

            <div className={styles["news-email-box"]}>
                <p>Nhập địa chỉ email của bạn để nhận được tin tức mới nhất</p>
                <div className={styles["news-email-form"]}>
                    <form>
                        <input type="email" placeholder="Nhập email của bạn..."
                               onChange={(e) => setValue(e.target.value)}/>
                        <button type={'button'} onClick={() => {
                            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
                            value === "" ?
                                toastError('Vui lòng nhập email của bạn!') : !regex.test(value) ?
                                    toastError('Email sai định dạng!') :
                                    toastSuccess('Cảm ơn bạn đã đăng ký!')
                        }
                        }>Gửi
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Inbox;
