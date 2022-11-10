import react, { useState } from "react";
import styles from "./RelativeProduct.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { A11y, Autoplay, Lazy, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/lazy";

function RelativeProduct() {
  const productData = [
      {
        name : "ao", 
        price : 123123,
        img: "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_3.png?v=870"
      },
      {
        name : "quan", 
        price : 123123,
        img: "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_3.png?v=870"
      },
      {
        name : "quan", 
        price : 123123,
        img: "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_3.png?v=870"
      },
      {
        name : "quan", 
        price : 123123,
        img: "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_3.png?v=870"
      },
      {
        name : "quan", 
        price : 123123,
        img: "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_3.png?v=870"
      },
      {
        name : "quan", 
        price : 123123,
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
        {
        productData.map((sp, index) => (
          <SwiperSlide key={index}>
            <img src={sp.img} alt="" />
            <p>{sp.name}</p>
            <p>{sp.price}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default RelativeProduct;
