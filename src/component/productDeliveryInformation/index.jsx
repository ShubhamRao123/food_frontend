import React from "react";
import styles from "./productDeliveryInformation.module.css";

function ProductDeliveryInformation() {
  return (
    <div className={styles.information}>
      <div className={styles.deliveryInformation}>
        <h2 className={styles.sectionTitle}>
          <img
            className={styles.icon}
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732792571/Tracking_1_g3dofo.png"
            alt=""
          />
          Delivery information
        </h2>
        <ul className={styles.infoList}>
          <li>
            <strong>Monday</strong>: 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
          </li>
          <li>
            <strong>Tuesday</strong>: 8:00 AM–3:00 AM
          </li>
          <li>
            <strong>Wednesday</strong>: 8:00 AM–3:00 AM
          </li>
          <li>
            <strong>Thursday</strong>: 8:00 AM–3:00 AM
          </li>
          <li>
            <strong>Friday</strong>: 8:00 AM–3:00 AM
          </li>
          <li>
            <strong>Saturday</strong>: 8:00 AM–3:00 AM
          </li>
          <li>
            <strong>Sunday</strong>: 8:00 AM–12:00 AM
          </li>
          <li>
            <strong>Estimated time until delivery:</strong> 20 min
          </li>
        </ul>
      </div>
      <div className={styles.contactInformation}>
        <h2 className={styles.sectionTitle}>
          <img
            className={styles.icon}
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732792571/ID_Verified_qf8zdk.png"
            alt=""
          />{" "}
          Contact information
        </h2>
        <p className={styles.sectionTitle2P1}>
          If you have allergies or other dietary restrictions, please contact
          the restaurant. The restaurant will provide food-specific information
          upon request.
        </p>
        <div className={styles.sectionTitle2P2}>
          <strong>Phone number:</strong>
          <p>+934443-43</p>
        </div>
        <div className={styles.sectionTitle2P2}>
          <strong>Website:</strong> <p>http://mcdonalds.uk/</p>
        </div>
      </div>
      <div className={styles.operationTimings}>
        <h2 className={styles.sectionTitle}>
          <img
            className={styles.icon}
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732792571/Clock_1_vhy9do.png"
            alt=""
          />
          Operational Times
        </h2>
        <ul className={styles.infoList}>
          <li>
            <span>Monday:</span> 8:00 AM–3:00 AM
          </li>
          <li>
            <span>Tuesday:</span> 8:00 AM–3:00 AM
          </li>
          <li>
            <span>Wednesday:</span> 8:00 AM–3:00 AM
          </li>
          <li>
            <span>Thursday:</span> 8:00 AM–3:00 AM
          </li>
          <li>
            <span>Friday:</span> 8:00 AM–3:00 AM
          </li>
          <li>
            <span>Saturday:</span> 8:00 AM–3:00 AM
          </li>
          <li>
            <span>Sunday:</span> 8:00 AM–3:00 AM
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDeliveryInformation;
