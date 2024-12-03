import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  const [username, setUsername] = useState(null); // State to store the logged-in user's name
  const navigate = useNavigate();

  // Use useEffect to retrieve the username from localStorage when the component mounts
  useEffect(() => {
    const storedName = localStorage.getItem("username"); // Fetch the stored username
    if (storedName && storedName !== "undefined") {
      setUsername(storedName); // Set the username if it exists and is valid
    } else {
      setUsername(null); // Fallback to null if username is invalid
    }
  }, []); // Only run on mount

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.leftText}>
          <span>🌟</span>Get 5% Off your first order,
          <span className={styles.promo}> Promo:ORDER5</span>
        </div>

        <div className={styles.centerRightText}>
          Regent Street, <span className={styles.a4}>A4,</span> A4201, London{" "}
          <span className={styles.navLocation}>Change Location</span>
        </div>

        <div className={styles.cartContainer}>
          <button className={styles.cartButton}>
            <img
              className={styles.cartIcon}
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732544838/Full_Shopping_Basket_nyptjc.png"
              alt="Cart Icon"
            />
            <span className={styles.spanCart}>My Cart</span>
            <img
              className={styles.downArrow}
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732545039/Forward_Button_lsxt5x.png"
              alt="Arrow Icon"
            />
          </button>
        </div>
      </nav>

      <div className={styles.subNavbarContainer}>
        <div className={styles.subNavbar}>
          <div className={styles.logoContainer}>
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732379275/oyghaafcpxsawrjqhnqf.png"
              alt="Logo"
              className={styles.logo}
            />
          </div>

          <div className={styles.navLinks}>
            <a className={styles.navItem} onClick={() => navigate("/home")}>
              Home
            </a>
            <a className={styles.navItem} href="#">
              BrowseMenu
            </a>
            <a className={styles.navItem} href="#">
              SpecialOffers
            </a>
            <a className={styles.navItem} href="#">
              Restaurants
            </a>
            <a className={styles.navItem} href="#">
              TrackOrder
            </a>
          </div>

          <div className={styles.authButtons}>
            <button
              className={styles.authButton}
              onClick={() => navigate(username ? "/profile" : "/login")} // Navigate to profile if logged in
            >
              <img
                className={styles.authButtonIcon}
                src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732558078/Male_User_jh6ad8.png"
                alt="User Icon"
              />
              <span className={styles.authButtonSpan}>
                {username ? `Hi, ${username}` : "Login/Signup"}{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
