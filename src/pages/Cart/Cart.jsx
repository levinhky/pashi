import {vnd} from "configs/functions";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {
    caculateTotal,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
} from "slices/cartSlice";
import styles from "./Cart.module.css";

function Cart(props) {
    const {cartItems, cartTotal} = useSelector((state) => state.cart);
    console.log(cartItems)
    const dispath = useDispatch();
    useEffect(() => {
        dispath(caculateTotal());
    }, [cartItems]);

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["title"]}>
                <h1 className={styles["title-heading"]}>Giỏ hàng</h1>
            </div>

            {cartItems.length > 0 ? (
                <div className={styles["cart"]}>
                    <div className={styles["left"]}>
                        <div className={styles["items"]}>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th>Đơn giá</th>
                                    <th>Xóa</th>
                                </tr>
                                {cartItems.map((product) => (
                                    <tr className={styles["item"]} key={product._id}>
                                        <td>
                                            <Link to={`/products/detail/?slug=${product.slug}`}>
                                                <div className={styles["product"]}>
                                                    <img src={product.thumbnails[0].thumbnail} alt={product.name}/>
                                                    <div className={styles["info"]}>
                                                        <h4>{product.name}</h4>
                                                        <span>{vnd(product.price)}</span>
                                                        {product.sizeArr.map(product => {
                                                            if (product.size) {
                                                                return <h3 key={product.size}>Size: {product.size},
                                                                    Qty: {product.quantity}</h3>
                                                            }
                                                        })}
                                                    </div>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className={styles["qty"]}>
                                            <div className={styles["qty-number"]}>
                                                <input
                                                    type="button"
                                                    value="<"
                                                    className={styles["qtyminus"]}
                                                    onClick={() => {
                                                        dispath(decreaseQuantity(product._id));
                                                        if (product.quantity <= 1)
                                                            dispath(removeFromCart(product._id));
                                                    }}
                                                />
                                                <input
                                                    type="text"
                                                    name="quantity"
                                                    value={product.quantity}
                                                    onChange={() => console.log(123)}
                                                />
                                                <input
                                                    type="button"
                                                    value=">"
                                                    className={styles["qtyplus"]}
                                                    onClick={() =>
                                                        dispath(increaseQuantity(product._id))
                                                    }
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <b>{vnd(product.price)}</b>
                                        </td>
                                        <td>
                        <span>
                          <i
                              className="bx bx-trash"
                              onClick={() => dispath(removeFromCart(product._id))}
                          ></i>
                        </span>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="block py-4">
                            <Link
                                to="/"
                                style={{fontFamily: 'system-ui'}}
                                className="inline-block px-12 text-[16px] font-light text-white uppercase transition-all delay-300 bg-black rounded-[50px] h-[50px] leading-[50px]"
                            >
                                Tiếp tục mua sắm
                            </Link>
                        </div>
                    </div>

                    <div className={styles["right"]}>
                        <div className={styles["caculate"]}>
                            <div className={styles["box"]}>
                                <div className={styles["total-cart"]}>
                                    <div className={styles["sub-total"]}>
                                        <span>Tổng tiền</span>
                                        <span>{vnd(cartTotal)}</span>
                                    </div>
                                    <div className={styles["pay"]}>
                                        <Link to="/checkout/information">Thanh toán</Link>
                                    </div>
                                </div>
                                <div className={styles["note-item"]}>
                                    <label>Ghi chú</label>
                                    <textarea
                                        className={styles["k-note"]}
                                        placeholder="Bạn muốn mô tả rõ hơn về đơn hàng..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles["empty-cart"]}>
                    <div>
                        <img
                            src="https://theme.hstatic.net/1000370235/1000472578/14/empty_cart.png?v=837"
                            alt="empty_cart"
                        />
                    </div>
                    <p>Không có sản phẩm nào trong giỏ hàng của bạn!</p>
                    <div className={styles["continue-btn"]}>
                        <Link to="/collections/all">Tiếp tục mua hàng</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
