import React from "react";
import styles from "./payment.module.css";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.logoContainerCart}>
          <img
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732895882/arrow-left_pcnn4p.png"
            alt=""
          />
          <h2 className={styles.logoh2}>Choose and Pay</h2>
        </div>

        <div className={styles.paymentContainer}>
          {/* Left Section: Wallet and Payment Options */}
          <div className={styles.optionsContainer}>
            <div className={styles.walletHeader}>
              <img
                src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732907115/Wallet_gjomel.png"
                alt="Wallet Icon"
                className={styles.walletIcon}
              />
              <div className={styles.walletDetails}>
                <h3>Wallet</h3>
                <p>Available balance: ₹300</p>
              </div>
              <img
                src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732899391/ArrowRight_iylg15.png"
                alt="Arrow"
                className={styles.arrowIcon}
              />
            </div>

            <ul className={styles.paymentMethods}>
              <li className={styles.method}>
                <span className={styles.icon}>M</span> MaestroKard
                <input type="radio" name="payment" className={styles.radio} />
              </li>
              <li className={styles.method}>
                <span className={styles.icon}>P</span> Paypal
                <input type="radio" name="payment" className={styles.radio2} />
              </li>
              <li className={styles.method}>
                <span className={styles.icon}>S</span> Stripe
                <input type="radio" name="payment" className={styles.radio3} />
              </li>
            </ul>

            <p
              className={styles.addCardButton}
              onClick={() => navigate("/editpayment")}
            >
              + Add Debit Card
            </p>
          </div>

          {/* Right Section: Payment Summary */}
          <div className={styles.summaryContainer}>
            <div className={styles.amountRow}>
              <p>Amount to be payed</p>
              <h2>₹240</h2>
            </div>
            <button
              onClick={() => navigate("/orderSuccessful")}
              className={styles.payButton}
            >
              Proceed Payment
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
