import { log } from "console";
import react, { useState } from "react";
import styles from "./Partner.module.css";
import styled from "styled-component";

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
  //   let count = 0;

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOnPrevClick = () => {
    // count = (currentIndex + partnerData.length - 1) % partnerData.length;
    setCurrentIndex(
      (currentIndex + partnerData.length - 1) % partnerData.length
    );
  };
  const handleOnNextClick = () => {
    // count = (currentIndex + 1) % partnerData.length;
    setCurrentIndex((currentIndex + 1) % partnerData.length);
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <h1 className={styles["title-heading"]}>ĐỐI TÁC</h1>
      </div>
      <div className={styles["slider"]}>
        {partnerData.map((partner, index) => {
          <div key={index} className={styles["slider-img"]}>
            <img src={partner} alt="" />
          </div>;
        })}
        <div className={styles["slider-children"]}>
          <button onClick={handleOnPrevClick}>Prev</button>
          <button onClick={handleOnNextClick}>Next</button>
          <div className="px"></div>
        </div>
      </div>
    </div>
  );
}

const PartnerContainer = styled.div``;
export default Partner;
