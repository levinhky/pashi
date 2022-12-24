import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import "yup-phone";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineRight} from "react-icons/ai";
import Input from "./components/Input";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../configs/firebase";
import {getUserInfo, setLogOut} from "../../slices/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {toastError, toastSuccess} from "../../configs/toast";
import Radio from "./components/Radio";
import axiosClient from "../../configs/api";
import Loading from "../Loading/Loading";
import {setBuyer, setEmptyCart} from "../../slices/cartSlice";

const InformationStyles = styled.div`
  @media screen and (min-width: 1000px) {
    width: 100%;
    padding-right: 6%;
    .container-form {
      flex-direction: column;
    }

    .main {
      padding-top: 4em;
    }
  }
  @media (min-width: 750px) {
    padding-top: 21px;
  }
  @media screen and (max-width: 999px) {
    .main-header {
      display: none;
    }

    .content {
    }

    .title {
      font-size: 16px;
    }
  }
`;
const dataSelect = [
    {
        id: 1,
        text: "TP.HCM",
        value: "hcm",
    },
    {
        id: 2,
        text: "Hà Nội",
        value: "hanoi",
    },
    {
        id: 3,
        text: "Thừa Thiên Huế",
        value: "hue",
    },
];

const schema = yup.object({
    fullname: yup.string().required("Vui lòng nhập họ tên của bạn."),
    email: yup
        .string()
        .email("Vui lòng nhập địa chỉ email hợp lệ")
        .required("Hãy điền địa chỉ email của bạn"),
    phoneNumber: yup
        .string()
        .phone("VN", true, "Vui lòng nhập đúng số điện thoại của bạn.")
        .required("Vui lòng nhập đúng số điện thoại của bạn."),
    address: yup.string().required("Vui lòng nhập địa chỉ của bạn."),
    // province: yup
    //   .string()
    //   .required("Vui lòng chọn tỉnh / thành")
    //   .oneOf(["hcm", "hanoi", "hue"]),
    // district: yup
    //   .string()
    //   .required("Vui lòng chọn quận / huyện")
    //   .oneOf(["hcm", "hanoi", "hue"]),
    // wards: yup
    //   .string()
    //   .required("Vui lòng chọn phường / xã")
    //   .oneOf(["hcm", "hanoi", "hue"]),
});

const Information = ({cartItems, cartTotal}) => {
    const {userInfo} = useSelector((state) => state.auth);
    const dispath = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const {
        handleSubmit,
        formState: {errors, isValid, isSubmitting, isSubmitSuccessful},
        control,
        watch
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
        defaultValues: {
            payment: "cod",
            shipping: "freeship",
            fullname: userInfo.displayName || '',
            email: userInfo.email || ''
        },
    });
    const watchPayment = watch("payment");
    const watchShipping = watch("shipping");
    const navigate = useNavigate();

    const onSubmitHandler = async (value) => {
        const email = value.email ? value.email : 'empty'
        const products = cartItems.map(product => {
            return {
                name: product.name,
                price: product.price,
                sku: product.sku,
                slug: product.slug,
                sizes: product.sizeArr,
                quantity: product.quantity,
            }
        });
        const buyer = {
            fullName: value.fullname,
            phoneNumber: value.phoneNumber,
            email,
            address: value.address,
            paymentMethod: value.payment
        }
        if (watchPayment === 'momo' || watchPayment === 'vnpay') {
            toastError('Phương thức chưa được hỗ trợ');
        } else {
            axiosClient.post('orders', {
                userId: userInfo.uid,
                fullName: value.fullname,
                phoneNumber: value.phoneNumber,
                email,
                address: value.address,
                deliveryMethod: value.payment,
                shipping: value.shipping,
                status: 'Chờ xử lý',
                total: +cartTotal,
                products
            });
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false)
                navigate('/checkout/success')
                dispath(setBuyer(buyer))
                dispath(setEmptyCart())
            }, 1500);
        }
    };
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
    // console.log(userInfo);
    return (
        <InformationStyles>
            {isLoading && <Loading/>}
            {!isLoading && <form
                onSubmit={handleSubmit(onSubmitHandler)}
                className="flex flex-col flex-auto main container-form"
                autoComplete="off"
            >
                <div className="pb-4 z-1 main-header">
                    <Link to="/" className="text-5xl font-medium ">
                        Pashi
                    </Link>
                    <ul className="flex items-center mt-4">
                        <li className="inline-block text-xl text-[#338dbc]">
                            <Link to="/cart">Giỏ hàng</Link>
                        </li>
                        <span className="mx-2">
              <AiOutlineRight size="14"></AiOutlineRight>
            </span>
                        <li className="inline-block text-xl text-[#4d4d4d]">
                            Thông tin giao hàng
                        </li>
                    </ul>
                </div>
                <div className="pb-10 content">
                    <div className="relative z-10">
                        <h2 className="mb-4 text-[#333] text-4xl font-medium">
                            Thông tin giao hàng
                        </h2>
                        {!userInfo.uid ? (
                            <div className="flex items-center mb-4 content-text title">
                                <p>
                                    Bạn đã có tài khoản?{" "}
                                    <Link to="/account/login" className="text-[#338dbc]">
                                        Đăng nhập
                                    </Link>
                                </p>
                            </div>
                        ) : (
                            <div className="flex mb-3">
                                <div className="w-28">
                                    <img
                                        className="w-full rounded"
                                        src={userInfo?.photoUrl || 'https://theme.hstatic.net/1000370235/1000472578/14/icon_avatar.png?v=909'}
                                        alt={userInfo.displayName}
                                    />
                                </div>
                                <div className="flex flex-col ml-5">
                  <span>
                    {userInfo.displayName} ({userInfo?.email && userInfo.email})
                  </span>
                                    <span
                                        onClick={() => dispath(setLogOut())}
                                        className="text-[#338dbc] cursor-pointer"
                                    >
                    Đăng xuất
                  </span>
                                </div>
                            </div>
                        )}
                        <div className="enter">
                            <Input
                                name="fullname"
                                id="fullname"
                                placeholder="Họ và tên"
                                control={control}
                                type="text"
                            ></Input>
                            {errors.fullname && (
                                <p className="mb-4 text-2xl text-red-500">
                                    {errors.fullname.message}
                                </p>
                            )}
                            <div className="grid grid-cols-2 gap-x-2">
                                <div>
                                    <Input
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        control={control}
                                        type="text"
                                    ></Input>
                                    {errors.email && (
                                        <p className="mb-4 text-2xl text-red-500">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Input
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        placeholder="Số điện thoại"
                                        control={control}
                                        type="text"
                                    ></Input>
                                    {errors.phoneNumber && (
                                        <p className="mb-4 text-2xl text-red-500">
                                            {errors.phoneNumber.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <Input
                                name="address"
                                id="address"
                                placeholder="Địa chỉ"
                                control={control}
                                type="text"
                            ></Input>
                            {errors.address && (
                                <p className="mb-4 text-2xl text-red-500">
                                    {errors.address.message}
                                </p>
                            )}
                            <div className="pb-16 content">
                                <div className="relative z-10">
                                    <h2 className="mb-4 text-[#333] font-medium text-4xl">
                                        Phương thức vận chuyển
                                    </h2>
                                    <Radio
                                        control={control}
                                        id="freeship"
                                        name="shipping"
                                        value="freeship"
                                        classNameImg="hidden"
                                        text="FREE SHIP"
                                        defaultChecked={true}
                                        checked={watchShipping === "freeship"}
                                        price="0đ"
                                    ></Radio>
                                </div>

                                <div className="relative z-10">
                                    <h2 className="my-4 text-[#333] font-medium text-4xl">
                                        Phương thức thanh toán
                                    </h2>
                                    <Radio
                                        control={control}
                                        id="cod"
                                        name="payment"
                                        value="cod"
                                        img="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1"
                                        text="Giao hàng khi nhận hàng (COD)"
                                        defaultChecked={true}
                                        checked={watchPayment === "cod"}
                                    ></Radio>
                                     <Radio
                                        control={control}
                                        id="momo"
                                        name="payment"
                                        value="momo"
                                        img="https://hstatic.net/0/0/global/design/seller/image/payment/momo.svg?v=1"
                                        text="Ví Momo"
                                        defaultChecked={true}
                                        checked={watchPayment === "momo"}
                                    ></Radio>
                                     <Radio
                                        control={control}
                                        id="vnpay"
                                        name="payment"
                                        value="vnpay"
                                        img="https://hstatic.net/0/0/global/design/seller/image/payment/vnpay_new.svg?v=1"
                                        text="Thẻ ATM/Visa/Master/JCB/QR Pay qua cổng VNPAY"
                                        defaultChecked={true}
                                        checked={watchPayment === "vnpay"}
                                    ></Radio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between step">
                    <Link to="/cart" className="text-[#338dbc] hover:brightness-125">
                        Giỏ hàng
                    </Link>
                    <button
                        type="submit"
                        className={`w-[200px] p-4 bg-[#338dbc] text-white rounded-lg mt-5 font-semibold ${
                            isSubmitting ? "opacity-50" : ""
                        }`}
                    >
                        Hoàn tất đơn hàng
                    </button>
                </div>
            </form>}
        </InformationStyles>
    );
};

export default Information;
