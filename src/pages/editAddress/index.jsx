import React, { useState } from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import styles from "./editAddress.module.css";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { useNavigate } from "react-router-dom";
import Address from "../address";

function EditAddress() {
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    address: "",
  });

  const navigate = useNavigate(); // Initialize navigate function

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Retrieve the JWT token

      const response = await fetch(`${BACKEND_URL}/api/address/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: "Example User", // Provide a static or dynamic username
          phoneNumber: formData.phoneNumber,
          addressLine1: formData.address,
          addressLine2: "", // Optional field
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: "USA", // Provide a valid country
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Address added successfully!");
        navigate("/address"); // Navigate to /address after success
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <Address />
      <div className={styles.addressContainer}>
        <div className={styles.modal}>
          <div className={styles.headerContainer}>
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1733052377/location_wl6hvg.png"
              alt=""
            />
            <h2 className={styles.header}>Add Address</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <select
                name="state"
                className={styles.input}
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">State</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="UttarPradesh">UttarPradesh</option>
                <option value="MadhyaPradesh">MadhyaPradesh</option>
                <option value="Uttrakhand">Uttrakhand</option>
              </select>
              <input
                type="text"
                name="city"
                className={styles.input}
                placeholder="City/District"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="zipCode"
                className={styles.input}
                placeholder="Pin Code"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phoneNumber"
                className={styles.input}
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="address"
              className={styles.textarea}
              placeholder="Enter full address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <button type="submit" className={styles.saveButton}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditAddress;
