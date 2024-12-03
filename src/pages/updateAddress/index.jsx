import React, { useState, useEffect } from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import styles from "./updateAddress.module.css";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { useNavigate, useParams } from "react-router-dom";

function UpdateAddress() {
  const [formData, setFormData] = useState({
    state: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    address: "",
  });
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Get the address ID from URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAddress = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      // Ensure the ID is correctly passed in the URL
      if (!id) {
        console.error("ID not found");
        return;
      }

      try {
        const response = await fetch(`${BACKEND_URL}/api/address/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFormData(data.address); // Populate form with existing address data
        } else {
          console.log("Failed to fetch address", response.status);
        }
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    };

    fetchAddress();
  }, [id]); // id is a dependency of the effect

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch(`${BACKEND_URL}/api/address/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/address"); // Redirect to address list page
      } else {
        console.error("Failed to update address");
      }
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <div>
        <Navbar />
        <div
          onClick={() => navigate("/editAddress")}
          className={styles.addAddress}
        >
          <div className={styles.circle}>
            <span className={styles.plus}>+</span>
          </div>
          <p className={styles.text}>Add Address</p>
        </div>

        {/* <div className={styles.modal}>
          <h2 className={styles.header}>Add Address</h2>
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
                <option value="State1">State1</option>
                <option value="State2">State2</option>
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
        </div> */}
        <div className={styles.modal}>
          <h2 className={styles.header}>Edit Address</h2>
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
                <option value="State1">State1</option>
                <option value="State2">State2</option>
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
      <Footer />
    </div>
  );
}

export default UpdateAddress;
