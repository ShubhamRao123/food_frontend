import React from "react";
import styles from "./productNavbar3.module.css";

function ProductNavbar3() {
  return (
    <div className={styles.navbar3}>
      <div className={styles.navItems}>
        <span className={styles.activeItem}>Offers</span>
        <span>Burgers</span>
        <span>Fries</span>
        <span>Snacks</span>
        <span>Salads</span>
        <span>Cold drinks</span>
        <span>Happy Meal®</span>
        <span>Desserts</span>
        <span>Hot drinks</span>
        <span>Sauces</span>
        <span>Orbit®</span>
      </div>
    </div>
  );
}

export default ProductNavbar3;
