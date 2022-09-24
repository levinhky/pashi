import react, { useState } from "react";
import styles from "./Partner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { A11y, Autoplay, Lazy, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/lazy";

function Partner() {
  const partnerData = [
    "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_3.png?v=870",
    "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_4.png?v=870",
    "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_5.png?v=870",
    "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_6.png?v=870",
    "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_7.png?v=870",
    "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_8.png?v=870",
    "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_1.png?v=870",
    "https://theme.hstatic.net/1000370235/1000472578/14/home_brand_logo_2.png?v=870",
  ];

  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <h1 className={styles["title-heading"]}>ĐỐI TÁC</h1>
      </div>
      <Swiper
        navigation
        modules={[Autoplay, Lazy, Navigation, A11y]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={5}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {partnerData.map((partner, index) => (
          <SwiperSlide key={index}>
            <img src={partner} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Partner;
