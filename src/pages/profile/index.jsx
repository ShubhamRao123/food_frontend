import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import styles from "./profile.module.css";
// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL = "https://food-backend-eb7q.onrender.com";

function Profile() {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    country: "India", // Default country
  });
  const [cardDetails, setCardDetails] = useState([]); // Updated to hold an array of cards
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Load user details from localStorage
    const storedDetails = {
      fullName: localStorage.getItem("username") || "",
      email: localStorage.getItem("userEmail") || "",
      phoneNumber: localStorage.getItem("userPhone") || "",
      country: localStorage.getItem("userCountry") || "India", // Default country or stored value
    };
    setUserDetails(storedDetails);
  }, []);

  useEffect(() => {
    const fetchCardDetails = async () => {
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      const url = `${BACKEND_URL}/api/payment/${userId}`;
      const method = "GET";

      try {
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch card details");
        }

        const data = await response.json();
        setCardDetails(data);
      } catch (error) {
        console.error("Error fetching card details:", error);
      }
    };

    fetchCardDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    navigate("/editprofile"); // Navigate to the /editprofile route
  };

  return (
    <div className={styles.profileContainer}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <div className={styles.profileImageContainer}>
            <img
              className={styles.profileImage}
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732963315/Ellipse_11_yvnasi.png"
              alt="Profile"
            />
            <h2 className={styles.profileName}>{userDetails.fullName}</h2>
          </div>

          <div className={styles.saveButtonContainer}>
            <button
              type="button"
              onClick={handleEditClick} // Call the navigate function
              className={styles.editButton}
            >
              Edit
            </button>
          </div>
        </div>

        <div className={styles.rightSection}>
          <form className={styles.form}>
            <div className={styles.infoRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={userDetails.fullName}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  disabled // Disable inputs as they are not editable in this view
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  disabled
                />
              </div>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.inputGroup}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={userDetails.phoneNumber}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  disabled
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={userDetails.country}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  disabled
                />
              </div>
            </div>
          </form>
        </div>

        <div className={styles.separator}></div>

        {/* Render all cards dynamically */}
        <div className={styles.paymentHeading}>Saved Payment Methods</div>
        <div className={styles.cardContainer}>
          <div className={styles.cardList}>
            {cardDetails.length > 0 ? (
              cardDetails.map((card) => (
                <div key={card._id} className={styles.cardDetails}>
                  <img
                    src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1733043705/Frame_100_ku9uij.png"
                    alt=""
                  />
                  <p>**** **** **** {card.cardNumber.slice(-4)}</p>
                  <span>{card.nameOnCard || "N/A"}</span>
                </div>
              ))
            ) : (
              <p>No card details available</p>
            )}
          </div>

          <div
            onClick={() => navigate("/editpayment")}
            className={styles.debitCard}
          >
            {" "}
            <div className={styles.icon}>+</div>
            <h2>Add new card</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
