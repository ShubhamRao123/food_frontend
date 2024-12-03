import React from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import styles from "./orderSuccessful.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function OrderSuccessful() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.orderContainer}>
          <div className={styles.iconWrapper}>
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732908952/Icon_yaicuz.png"
              alt="Success Tick"
              className={styles.icon}
            />
          </div>
          <h2 className={styles.title}>Order Placed Successfully</h2>
          <p className={styles.subtitle}>
            Your order is confirmed and on its way. Get set to savor your chosen
            delights!
          </p>
          <div className={styles.cartDetails}>
            <ul className={styles.cartItems}>
              {items.map((item) => (
                <li key={item.uniqueKey} className={styles.cartItem}>
                  <div>
                    <h4 className={styles.itemName}>{item.name}</h4>
                  </div>
                </li>
              ))}
            </ul>
            <p className={styles.backButton} onClick={() => navigate("/home")}>
              Back to Home
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderSuccessful;
