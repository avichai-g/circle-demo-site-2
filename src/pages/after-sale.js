import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/AfterSale.module.css";
import Layout from "../components/Layout";
import { injectPixel } from "../utils/pixelLoader";

const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.successIcon}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function SuccessfulPayment() {
  useEffect(() => {
    injectPixel();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.card}>
          <header className={styles.header}>
            <Image
              src="/images/circle.png"
              width={100}
              height={40}
              alt="Circle"
              className={styles.logo}
            />
          </header>
          <div id="circleSideBanner"></div>

          <div className={styles.successMessage}>
            <CheckCircleIcon />
            <h1 className={styles.title}>Payment Successful!</h1>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.orderDetails}>
              <h2>Purchase Summary</h2>
              <div className={styles.item}>
                <Image
                  src="/images/running-shoes.png"
                  width={80}
                  height={80}
                  alt="Running Shoes"
                />
                <div className={styles.itemDetails}>
                  <p className={styles.itemName}>
                    Premium Running Shoes - Size 10
                  </p>
                  <p className={styles.itemColor}>Color: Blue/White</p>
                  <p className={styles.itemPrice}>$129.99</p>
                </div>
              </div>
            </div>
            <div className={styles.orderSummary}>
              <h2>Order summary</h2>
              <div className={styles.summaryDetails}>
                <p>
                  <span>Subtotal</span>
                  <span>$129.99</span>
                </p>
                <p>
                  <span>Shipping</span>
                  <span>$9.99</span>
                </p>
                <p>
                  <span>Tax</span>
                  <span>$10.40</span>
                </p>
                <p className={styles.total}>
                  <span>Total paid</span>
                  <span>$150.38</span>
                </p>
              </div>
              <p className={styles.orderNumber}>Order #: 1234567890</p>
              <p className={styles.thankYou}>Thank you for your purchase!</p>
              <button className={styles.continueShoppingButton}>
                Continue Shopping
              </button>
            </div>
          </div>
          <div id="circleAfterSaleBanner"></div>
          <div id="circleAbondenedBanner"></div>
        </div>
      </div>
    </Layout>
  );
}
