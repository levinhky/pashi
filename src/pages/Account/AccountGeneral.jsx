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
            setOrders(orders);
        }

        if (userInfo.uid) getOrders();
    }, [userInfo.uid])
    orders.map(item => console.log(item.products))
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
                        <span>T??i kho???n c???a</span>
                        <h3>  {userInfo?.email ? userInfo.email.substring(0, userInfo.email.indexOf("@")) : userInfo.displayName}</h3>
                    </div>
                </div>
                <div className={styles['link-account']}>
                    <ul>
                        <li
                            onClick={() => setActiveTab(1)}
                            className={
                                activeTab === 1 ? `${styles['tab']} ${styles['active']}` : `${styles['tab']}`
                            }>Th??ng tin chung
                        </li>
                        <li
                            onClick={() => setActiveTab(2)}
                            className={
                                activeTab === 2 ? `${styles['tab']} ${styles['active']}` : `${styles['tab']}`
                            }>????n h??ng c???a t??i
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles['account-main-content']}>
                <div className={styles['head']}>
                    {activeTab === 1 ? <h3>B???ng th??ng tin c???a t??i</h3> : <h3>Danh s??ch ????n h??ng c???a t??i</h3>}
                    <span
                        onClick={() => {
                            // authSignOut();
                            dispath(setLogOut());
                            navigate('/');
                        }}>????ng xu???t</span>
                </div>
                {activeTab === 1 && <div className={styles['info']}>
                    <h4 className={styles['info-text']}>Th??ng tin t??i kho???n</h4>
                    <div className={styles['person']}>
                        <span> H??? v?? t??n: {userInfo.displayName}</span>
                        <span>Email: {userInfo.email ? userInfo.email : 'r???ng'}</span>
                    </div>
                </div>}
                <div className={styles['order-info']}>
                    {activeTab === 1 && <h4 className={styles['info-text']}>C??c ????n h??ng v???a ?????t</h4>}
                    <table className={styles['table']}>
                        <thead>
                        <tr>
                            <th>M?? ????n h??ng</th>
                            <th>Ng??y ?????t</th>
                            <th>S???n ph???m</th>
                            <th>T???ng ti???n</th>
                            <th>Tr???ng th??i ????n h??ng</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.length > 0 ? orders.map(order => {
                            return (
                                <tr key={order._id}>
                                    <td><span>{order._id}</span></td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    {order.products.map((product, i) => (<td className={styles['order-item']}>
                                        <Link to={`/products/detail/?slug=${product.slug}`}
                                              title="">{i + 1}. {product.name} -
                                            {product.sizes.map(item => item.size)}</Link>
                                    </td>))}
                                    <td>{vnd(order.total)}</td>
                                    <td>{order.status}</td>
                                </tr>
                            )
                        }) : <tr>
                            <td colSpan='5'><h3 className='text-center py-3 italic'>B???n ch??a ?????t mua s???n ph???m
                                n??o!...</h3></td>
                        </tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AccountGeneral;