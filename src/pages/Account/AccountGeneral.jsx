import styles from './AccountGeneral.module.css';
import {useEffect, useRef, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../configs/firebase";
import {getUserInfo, setLogOut} from "../../slices/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import axiosClient from "../../configs/api";
import {vnd} from "../../configs/functions";

const AccountGeneral = () => {
    const [activeTab, setActiveTab] = useState(1);
    const {userInfo} = useSelector((state) => state.auth);
    const [orders, setOrders] = useState([]);
    const dispath = useDispatch();
    const navigate = useNavigate();

    //auth
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userInfo = {
                    uid: user.uid,
                    photoUrl: user.photoURL,
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

    useEffect(() => {
        const getOrders = async () => {
            const orders = await axiosClient.get(`orders/user/${userInfo.uid}`);
            console.log(orders,);
            setOrders(orders);
        }

        if (userInfo.uid) getOrders();
    }, [userInfo.uid])

    return (
        <div className={styles['wrapper']}>
            <div className={styles['account-sidebar']}>
                <div className={styles['feature-user']}>
                    <div className={styles['icon']}>
                        <img
                            src='https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c15.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=12b3be&_nc_ohc=nuzRl12qSHkAX-c698M&_nc_ht=scontent.fsgn13-4.fna&edm=AHgPADgEAAAA&oh=00_AfAP593ZJdDftyNPoJyrIRo-Wnf4X3BxZq6mY5A-7Qc_lw&oe=63AD22D9'
                            alt={'icon'}/>
                    </div>
                    <div className={styles['user']}>
                        <span>Tài khoản của</span>
                        <h3>  {userInfo?.email ? userInfo.email.substring(0, userInfo.email.indexOf("@")) : userInfo.displayName}</h3>
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
                            // authSignOut();
                            dispath(setLogOut());
                            navigate('/');
                        }}>Đăng xuất</span>
                </div>
                {activeTab === 1 && <div className={styles['info']}>
                    <h4 className={styles['info-text']}>Thông tin tài khoản</h4>
                    <div className={styles['person']}>
                        <span> Họ và tên: {userInfo.displayName}</span>
                        <span>Email: {userInfo.email ? userInfo.email : 'empty'}</span>
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
                        {orders.length > 0 ? orders.map(order => (
                            <tr key={order._id}>
                                <td><span>{order._id}</span></td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td className={styles['order-item']}>
                                    <a href="/products/layla-dress" title="">1. {order.name} - S</a>
                                </td>
                                <td>{vnd(order.total)}</td>
                                <td>{order.status}</td>
                            </tr>
                        )) : <h3 className='text-center py-3'>Bạn chưa có đơn hàng nào !</h3>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AccountGeneral;