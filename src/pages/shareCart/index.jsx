import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./shareCart.module.css";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL = "https://food-backend-eb7q.onrender.com";

const SharedCart = () => {
  const { shareToken } = useParams();
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSharedCart = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/cart/shared/${shareToken}`
        );
        if (response.status === 200 && response.data) {
          setCart(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch shared cart:", error);
        alert("Failed to fetch shared cart. Please try again.");
        navigate("/");
      }
    };

    fetchSharedCart();
  }, [shareToken, navigate]);

  if (!cart) {
    return <p>Loading...</p>;
  }

  const { items, totalPrice } = cart;

  return (
    <div>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.logoContainerCart}>
          <h2 className={styles.logoh2}>Shared Cart</h2>
        </div>
        <div className={styles.cartWrapper}>
          {/* Cart Details */}
          <div className={styles.cartDetails}>
            <ul className={styles.cartItems}>
              {items.map((item) => (
                <li key={item.uniqueKey} className={styles.cartItem}>
                  <img
                    src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732880759/Rectangle_11_k3rvr2.png"
                    className={styles.itemImage}
                  />
                  <div className={styles.itemDetails}>
                    <div className={styles.itemHeader}>
                      <div>
                        <h4 className={styles.itemName}>{item.name}</h4>
                        <p className={styles.itemQuantity}>
                          {item.quantity}x item
                        </p>
                      </div>
                      <p className={styles.itemPrice}>
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Summary */}
          <div className={styles.deliveryDetails}>
            <div className={styles.priceSummary}>
              <p className={styles.priceRow}>
                <span>Items</span>
                <span>₹{totalPrice}</span>
              </p>
              <p className={styles.priceRow}>
                <span>Sales Tax</span>
                <span>₹20</span>
              </p>
              <div className={styles.divider}></div>
              <p className={styles.subtotalRow}>
                <span>Subtotal</span>
                <h2 className={styles.totalPrice}>₹{totalPrice + 20}</h2>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SharedCart;
