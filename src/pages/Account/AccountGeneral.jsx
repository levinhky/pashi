import styles from './AccountGeneral.module.css';
import {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../configs/firebase";
import {getUserInfo, setLogOut} from "../../slices/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {authSignOut} from "../../configs/auth";

const AccountGeneral = () => {
    const [activeTab, setActiveTab] = useState(1);
    const {userInfo} = useSelector((state) => state.auth);
    const dispath = useDispatch();

    //auth
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userInfo = {
                    uid: user.uid,
                    photoUrl: user.photoUrl,
                    phoneNumber: user.phoneNumber,
                    email: user.email,
                    displayName: user.displayName,
                    accessToken: user.accessToken,
                };
                dispath(getUserInfo(userInfo));
            } else {
                console.log("User signed out");
            }
        });
    }, [dispath, auth]);

    return (
        <div className={styles['wrapper']}>
            <div className={styles['account-sidebar']}>
                <div className={styles['feature-user']}>
                    <div className={styles['icon']}>
                        <img src='https://theme.hstatic.net/1000370235/1000472578/14/icon_avatar.png?v=891'
                             alt={'icon'}/>
                    </div>
                    <div className={styles['user']}>
                        <span>Tài khoản của</span>
                        <h3>  {userInfo.email.substring(0, userInfo.email.indexOf("@"))}</h3>
                    </div>
                </div>
                <div className={styles['link-account']}>
                    <ul>
                        <li
                            onClick={() => setActiveTab(1)}
                            className={
                                activeTab === 1 ? `${styles['tab']} ${styles['active']}` : `${styles['tab']}`
                            }>Thông tin chung
                        </li>
                        <li
                            onClick={() => setActiveTab(2)}
                            className={
                                activeTab === 2 ? `${styles['tab']} ${styles['active']}` : `${styles['tab']}`
                            }>Đơn hàng của tôi
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles['account-main-content']}>
                <div className={styles['head']}>
                    {activeTab === 1 ? <h3>Bảng thông tin của tôi</h3> : <h3>Danh sách đơn hàng của tôi</h3>}
                    <span
                        onClick={() => {
                            authSignOut();
                            dispath(setLogOut());
                        }}>Đăng xuất</span>
                </div>
                {activeTab === 1 && <div className={styles['info']}>
                    <h4 className={styles['info-text']}>Thông tin tài khoản</h4>
                    <div className={styles['person']}>
                        <span> Họ và tên: {userInfo.displayName}</span>
                        <span>Email: {userInfo.email}</span>
                    </div>
                </div>}
                <div className={styles['order-info']}>
                    {activeTab === 1 && <h4 className={styles['info-text']}>Các đơn hàng vừa đặt</h4>}
                    <table className={styles['table']}>
                        <thead>
                        <tr>
                            <th>Mã đơn hàng</th>
                            <th>Ngày đặt</th>
                            <th>Sản phẩm</th>
                            <th>Tổng tiền</th>
                            <th>Trạng thái đơn hàng</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><span>#110643</span></td>
                            <td>19/09/2022</td>
                            <td className={styles['order-item']}>
                                <a href="/products/layla-dress" title="">1. Layla Dress - S</a>
                            </td>
                            <td>416,000₫</td>
                            <td>chờ xử lý</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AccountGeneral;