import React from "react";
import styles from "./productDiscountImage.module.css";

function ProductDiscountImage() {
  return (
    <div className={styles.offer}>
      <div className={styles.offerItem}>
        <img
          src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732787955/Rectangle_8_2_jtn2lo.png"
          alt="Restaurant"
        />
        <div className={styles.discountBadge}>-20%</div>
        <div className={styles.plusIcon}>
          <img
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732788158/Plus_1_epmbyc.png"
            alt="Plus"
          />
        </div>
        <div className={styles.offerText}>
          <p>McDonald’s East London</p>
          <h3>First Order Discount</h3>
        </div>
      </div>
      <div className={styles.offerItem}>
        <img
          src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732787956/Rectangle_8_1_tdhtxc.png"
          alt="Restaurant 2"
        />
        <div className={styles.discountBadge}>-60%</div>
        <div className={styles.plusIcon}>
          <img
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732788158/Plus_1_epmbyc.png"
            alt="Plus"
          />
        </div>
        <div className={styles.offerText}>
          <p>McDonald’s East London</p>
          <h3>Vegan Discount</h3>
        </div>
      </div>
      <div className={styles.offerItem}>
        <img
          src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732787955/Rectangle_8_a5otom.png"
          alt="Restaurant 3"
        />
        <div className={styles.discountBadge}>-100%</div>
        <div className={styles.plusIcon}>
          <img
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732788158/Plus_1_epmbyc.png"
            alt="Plus"
          />
        </div>
        <div className={styles.offerText}>
          <p>McDonald’s East London</p>
          <h3>Free ice Cream Offer</h3>
        </div>
      </div>
    </div>
  );
}

export default ProductDiscountImage;
