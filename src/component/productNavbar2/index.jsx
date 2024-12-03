import React from "react";
import styles from "./productNavbar2.module.css";

function ProductNavbar2() {
  return (
    <div className={styles.subNavbar2}>
      <div className={styles.logoContainer}>
        <h2 className={styles.logoh2}>
          Up to -40% 🎊 Order.uk exclusive deals
        </h2>
      </div>

      <div className={styles.navLinks2}>
        <div className={styles.searchContainer}>
          <img
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732785920/Search_More_lesxpp.png"
            alt="Search Icon"
            className={styles.searchIcon}
          />
          <input
            type="text"
            className={styles.navItem2}
            placeholder="Search from menu..."
          />
        </div>
      </div>
    </div>
  );
}

export default ProductNavbar2;
