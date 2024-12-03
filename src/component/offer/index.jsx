import React from "react";
import styles from "./offer.module.css";

function Offer() {
  return (
    <div className={styles.offer}>
      <div className={styles.offerItem}>
        <img
          src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732613845/Group_12_yutffx.png"
          alt="Restaurant 1"
        />
      </div>
      <div className={styles.offerItem}>
        <img
          src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732613854/Group_11_equ6wc.png"
          alt="Restaurant 2"
        />
      </div>
      <div className={styles.offerItem}>
        <img
          src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732613855/Group_10_sgkms5.png"
          alt="Restaurant 3"
        />
      </div>
    </div>
  );
}

export default Offer;
