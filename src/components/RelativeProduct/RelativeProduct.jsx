import react, {useState} from "react";
import styles from "./RelativeProduct.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {A11y, Autoplay, Lazy, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/lazy";
import {Link} from "react-router-dom";
import {vnd} from "../../configs/functions";

function RelativeProduct({products}) {
    const productData = [
        {
            name: "ao",
            price: 123123,
            img: "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_3.png?v=870"
        },
        {
            name: "quan",
            price: 123123,
            img: "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_3.png?v=870"
        },
        {
            name: "quan",
            price: 123123,
            img: "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_3.png?v=870"
        },
        {
            name: "quan",
            price: 123123,
            img: "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_3.png?v=870"
        },
        {
            name: "quan",
            price: 123123,
            img: "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_3.png?v=870"
        },
        {
            name: "quan",
            price: 123123,
            img: "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_3.png?v=870"
        },

    ]

    return (
        <div className={styles["container"]}>
            <div className={styles["title"]}>
                <h1 className={styles["title-heading"]}>Sản phẩm liên quan</h1>
            </div>
            <Swiper
                navigation
                modules={[Autoplay, Lazy, Navigation]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
                spaceBetween={0}
                slidesPerView={5}
            >
                <div className={styles["product-grid"]}>
                    {products.length > 0 && products.map((product) => (
                        <SwiperSlide key={product._id}>
                            <div className={styles["item"]} key={product._id}>
                                <Link to={`/products/detail?slug=${product.slug}`} className={styles["image"]}>
                                    <img src={product.thumbnails[0].thumbnail} alt="product"/>
                                </Link>
                                <div className={styles["info"]}>
                                    <h2>
                                        <Link to={`/products/detail/?slug${product.slug}`} className={styles["name"]}>
                                            {product.name}
                                        </Link>
                                    </h2>
                                    <div className={styles["price"]}>
                                        <span>{vnd(product.price)}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {products.length === 0 && <p>Không có sản phẩm!</p>}
                </div>
            </Swiper>
        </div>
    );
}

export default RelativeProduct;
