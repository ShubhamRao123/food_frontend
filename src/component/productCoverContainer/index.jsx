import React from "react";
import styles from "./productCover.module.css";

function ProductCover() {
  return (
    <div className={styles.productCoverMargin}>
      <div className={styles.productCoverContainer}>
        <div className={styles.coverContent}>
          <span className={styles.coverContentSpan}>I'm lovin' it!</span>
          <h2>McDonald’s East London</h2>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.infoBox}>
            <img
              className={styles.infoIcon}
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732737030/Order_Completed_ss6fm0.png"
              alt=""
            />
            <span>Minimum Order: 12 GBP</span>
          </div>
          <div className={styles.infoBox}>
            <img
              className={styles.infoIcon}
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732737030/Motocross_bubdqd.png"
              alt=""
            />
            <span>Delivery in 20–25 Minutes</span>
          </div>
        </div>
        <div className={styles.backgroundImage}>
          <img
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732704418/Rectangle_44_fkwkc5.png"
            alt=""
          />
        </div>
        <div className={styles.backgroundImageColor}></div>
        <div className={styles.productCoverContainerSideImage}>
          <img
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732704418/Rectangle_44_fkwkc5.png"
            alt=""
          />
        </div>
        <div className={styles.productCoverContainerTopImage}>
          <img
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732704417/Rectangle_64_m8tvq2.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.productTimingContainer}>
        <div className={styles.productTiming}>
          <img
            className={styles.productTimingIcon}
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732738008/Clock_xxtkqr.png"
            alt=""
          />
          <span>Open until 3:00 AM</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCover;
