import React, { useEffect, useState } from "react";
import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import styles from "./address.module.css";
import { useNavigate } from "react-router-dom";

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL = "https://food-backend-eb7q.onrender.com";

function Address() {
  const [addresses, setAddresses] = useState([]);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // Fetch username from localStorage on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Fetch addresses from the backend
  useEffect(() => {
    const fetchAddresses = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await fetch(`${BACKEND_URL}/api/address`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setAddresses(data.addresses);
        } else {
          console.error("Failed to fetch addresses");
        }
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    fetchAddresses();
  }, []);

  // Handle address deletion
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch(`${BACKEND_URL}/api/address/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Remove the deleted address from the local state
        setAddresses(addresses.filter((address) => address._id !== id));
      } else {
        console.error("Failed to delete address");
      }
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.addressContainer}>
        <div
          onClick={() => navigate("/addAddress")}
          className={styles.addAddress}
        >
          <div className={styles.circle}>
            <span className={styles.plus}>+</span>
          </div>
          <p className={styles.text}>Add Address</p>
        </div>

        {addresses.length > 0 ? (
          <div className={styles.addressList}>
            {addresses.map((address, index) => (
              <div key={address._id} className={styles.addressCard}>
                <p className={styles.name}>{username}</p>
                <p>{address.addressLine1}</p>
                {address.addressLine2 && <p>{address.addressLine2}</p>}
                <p>
                  {address.city}, {address.state}, {address.zipCode}
                </p>
                <p>Phone Number: {address.phoneNumber}</p>
                {index === 0 && (
                  <span className={styles.defaultBadge}>Default</span>
                )}
                <div className={styles.actions}>
                  {/* <span
                    className={styles.edit}
                    onClick={() => navigate("/address/:id")}
                  >
                    Edit
                  </span> */}
                  <span
                    className={styles.remove}
                    onClick={() => handleDelete(address._id)}
                  >
                    Remove
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No addresses found</div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Address;
