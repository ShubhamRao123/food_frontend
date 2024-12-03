import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import styles from "./editPayment.module.css";
import Profile from "../profile";

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL = "https://food-backend-eb7q.onrender.com";

function EditPayment() {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "India", // Default country
  });

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate
  const userId = localStorage.getItem("userId"); // Get userId from localStorage

  useEffect(() => {
    if (!userId) {
      // console.error("User ID is undefined. Redirecting to login.");
      navigate("/login"); // Redirect to login if user is not authenticated
    }

    // Load user details from localStorage
    const storedDetails = {
      fullName: localStorage.getItem("username") || "",
      email: localStorage.getItem("userEmail") || "",
      phoneNumber: localStorage.getItem("userPhone") || "",
      country: localStorage.getItem("userCountry") || "India", // Default country or stored value
    };
    setUserDetails(storedDetails);
  }, [userId, navigate]);

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    if (!userId) {
      alert("User ID is required to save card details.");
      return;
    }

    const url = `${BACKEND_URL}/api/payment/add`;
    const method = "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...cardDetails, userId }),
      });

      if (!response.ok) {
        alert("Failed to save card details");
        return;
      }

      alert("Card added successfully!");
    } catch (error) {
      // console.error("Error saving card:", error);
      alert("Failed to save card details.");
    }
  };

  return (
    <div className={styles.profileContainer}>
      {/* <Navbar /> */}

      <Profile />
      <div className={styles.debitCardContainer}>
        <div className={styles.debitCardModal}>
          <h2>Add Payment Method</h2>
          <div className={styles.formGroup}>
            <label>Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleCardChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Expiration</label>
            <input
              type="text"
              name="expirationDate"
              value={cardDetails.expirationDate}
              onChange={handleCardChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>CVC</label>
            <input
              type="text"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleCardChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Name on Card</label>
            <input
              type="text"
              name="nameOnCard"
              value={cardDetails.nameOnCard}
              onChange={handleCardChange}
              required
            />
          </div>
          <div className={styles.buttonsContainer}>
            <button
              className={styles.cancelButton}
              onClick={() => navigate("/profile")}
            >
              Cancel
            </button>
            <button className={styles.saveButton} onClick={handleSave}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default EditPayment;
