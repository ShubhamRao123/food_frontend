import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  setCart,
  removeFromCart,
  decrementQuantity,
} from "../../store/cartSlice";
import styles from "./cart.module.css";
import toast from "react-hot-toast";

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL = "https://food-backend-eb7q.onrender.com";

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchCart = async () => {
      if (!userId) {
        alert("You must be logged in to view your cart");
        navigate("/login");
        return;
      }

      try {
        dispatch(setCart({ items: [], totalPrice: 0 }));
        const response = await axios.get(`${BACKEND_URL}/api/cart/${userId}`);
        if (response.status === 200 && response.data) {
          dispatch(setCart(response.data));
        }
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };

    fetchCart();
  }, [dispatch, navigate, userId]);

  const handleShareCart = async () => {
    if (!userId) {
      alert("You must be logged in to share your cart");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/api/cart/shared`, {
        userId,
      });

      if (response.status === 200 && response.data.shareToken) {
        const shareLink = `${window.location.origin}/shared-cart/${response.data.shareToken}`;
        navigator.clipboard.writeText(shareLink);
        alert(`Shareable cart link copied to clipboard: ${shareLink}`);
      }
    } catch (error) {
      console.error("Failed to generate shareable link:", error);
      alert("Error generating shareable link. Please try again.");
    }
  };

  const handleCheckout = async () => {
    if (!userId) {
      alert("You must be logged in to proceed with checkout");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/api/cart/save`, {
        userId,
        items,
        totalPrice,
      });

      if (response.status === 200) {
        toast.success("Cart saved successfully! Proceeding to checkout...");
        navigate("/checkout");
      }
    } catch (error) {
      console.error("Failed to save cart:", error);
      alert("Error saving cart. Please try again.");
    }
  };

  return (
    <div className={styles.cart}>
      <div className={styles.shareCartContainer}>
        <img
          src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1733053754/share-2_xlbumn.png"
          alt=""
        />
        <p>Share this cart with friends</p>
        <button className={styles.copyLinkButton} onClick={handleShareCart}>
          Copy Link
        </button>
      </div>
      <div className={styles.cartHeading}>
        <img
          className={styles.cartIcon}
          src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732544838/Full_Shopping_Basket_nyptjc.png"
          alt=""
        />
        <h2>My Basket</h2>
      </div>

      <ul className={styles.cartItems}>
        {items.map((item) => (
          <li key={item.uniqueKey} className={styles.cartItem}>
            <div className={styles.quantity}>
              <span>{item.quantity}x</span>
            </div>
            <div className={styles.itemDetails}>
              <p className={styles.price}>₹{item.price}</p>
              <h4 className={styles.itemName}>{item.name}</h4>
              <p className={styles.category}>{item.category}</p>
            </div>
            <div className={styles.actions}>
              <img
                onClick={() => dispatch(decrementQuantity(item.uniqueKey))}
                src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732865647/Remove_nzqovy.png"
                alt=""
              />
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.total}>
        <h3 className={styles.totalRow}>
          Sub Total: <span>₹{totalPrice}</span>
        </h3>
        <h3 className={styles.totalRow}>
          Discount: <span>₹30</span>
        </h3>
        <h3 className={styles.totalRow}>
          Tax: <span>₹30</span>
        </h3>
      </div>

      <div className={styles.payButton}>
        <h3 className={styles.totaltopay}>
          Total to pay: <span>₹{totalPrice}</span>
        </h3>
      </div>
      <div className={styles.freeItem}>
        <p>Choose your free item..</p>
        <img
          src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732870286/Forward_Button_2_x91zgn.png"
          alt=""
        />
      </div>
      <div className={styles.couponCode}>
        <p>Apply Coupon Code here</p>
        <img
          src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732870286/Forward_Button_1_xpayun.png"
          alt=""
        />
      </div>

      <div className={styles.deliveryOption}>
        <div className={styles.delivery}>
          <img
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732871354/Delivery_Scooter_ds1ihl.png"
            alt=""
          />
          <h3>Delivery</h3>
          <p>Starts at 17:50</p>
        </div>
        <div className={styles.collection}>
          <img
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732871354/New_Store_wr7pjo.png"
            alt=""
          />
          <h3>Collection</h3>
          <p>Starts at 16:50</p>
        </div>
      </div>

      <div className={styles.checkoutButton}>
        <img
          src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732872014/Forward_Button_3_hielhi.png"
          alt=""
        />
        <span onClick={handleCheckout}>Checkout!</span>
      </div>
    </div>
  );
};

export default Cart;
