import React, { useEffect, useState } from "react";
import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import styles from "./checkout.module.css";
import { useNavigate } from "react-router-dom";
import { fetchRestaurants } from "../../services";
import { useSelector } from "react-redux";

function Checkout() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  const { items, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error("Error loading restaurants:", error.message);
      }
    };

    loadRestaurants();
  }, []);

  const handleRestaurantClick = (id) => {
    navigate(`/restaurant/${id}`);
  };
  return (
    <div>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.logoContainerCart}>
          <h2 className={styles.logoh2}>Your Order Details</h2>
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
            <p className={styles.headingTextArea}>Notes:</p>
            <textarea
              className={styles.orderNotes}
              placeholder="Add order notes"
            ></textarea>
          </div>

          {/* Delivery and Payment Details */}
          <div className={styles.deliveryDetails}>
            <div
              onClick={() => navigate("/address")}
              className={styles.addressSection}
            >
              <div className={styles.addressHeader}>
                <img
                  src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732796199/Previous_Location_ptygao.png"
                  alt=""
                />
                <p className={styles.deliveryAddress}>
                  <span>Delivery Address</span>
                  <br />
                  45, Green Street, Sector 12...
                </p>
                <i className={`fa fa-chevron-right ${styles.chevronIcon}`}></i>
              </div>
            </div>
            <div className={styles.divider}></div>
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
                <span>Subtotal (3 items)</span>
                <h2 className={styles.totalPrice}>₹{totalPrice + 20}</h2>
              </p>
            </div>
            <button
              onClick={() => navigate("/payment")}
              className={styles.paymentButton}
            >
              Choose Payment Method
            </button>
          </div>
        </div>

        {/* Similar Restaurant */}
        <div className={styles.restaurantContainer}>
          <div className={styles.restaurantNav}>
            <h2 className={styles.restaurantNavLogo}>Similar Restaurants </h2>
          </div>
          <div className={styles.grid}>
            {restaurants.map((restaurant) => (
              <div
                key={restaurant._id}
                className={styles.card}
                onClick={() => handleRestaurantClick(restaurant._id)}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={restaurant.restaurantImageUrl}
                    alt={restaurant.name}
                    className={styles.image}
                  />
                </div>
                <p className={styles.name}>{restaurant.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
