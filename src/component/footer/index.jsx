import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBrand}>
          <img
            src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732447465/order.uk_black_me9fio.png"
            alt="Order.uk Logo"
          />
          <div className={styles.footerAppButtons}>
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732447465/app-store-badges-en_1_v3ljd2.png"
              alt="App Store Badge"
            />
          </div>
          <p>Company #490329-445, Registered with House of companies.</p>
        </div>

        <div className={styles.footerSubscribe}>
          <p>Get Exclusive Deals in your Inbox</p>
          <div className={styles.footerSubscribeInput}>
            <input type="email" placeholder="youremail@gmail.com" />
            <button>Subscribe</button>
          </div>
          <small>
            We won’t spam, read our{" "}
            <span className={styles.emailPolicy}>email policy</span>
          </small>
          <div className={styles.footerSocialMedia}>
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732447464/Facebook_e998l2.png"
              alt="Facebook"
            />
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732447464/Instagram_gmdf2d.png"
              alt="Instagram"
            />
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732447464/TikTok_sm2hco.png"
              alt="TikTok"
            />
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732447464/Snapchat_acy1vy.png"
              alt="Snapchat"
            />
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div>
            <h4>Legal Pages</h4>
            <ul>
              <li>Terms and conditions</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Modern Slavery Statement</li>
            </ul>
          </div>
          <div>
            <h4>Important Links</h4>
            <ul>
              <li>Get Help</li>
              <li>Add your restaurant</li>
              <li>Sign up to deliver</li>
              <li>Create a business account</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Order.uk Copyright 2024, All Rights Reserved.</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Pricing</li>
          <li>Do not sell or share my personal information</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
