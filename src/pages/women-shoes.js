import React, { useEffect } from "react";
import styles from "../styles/WomenShoes.module.css";
import Layout from "../components/Layout";
import { injectPixel } from "../utils/pixelLoader";

const SuccessModal = ({ isOpen, onClose, shoeName }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.successIcon}>
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className={styles.modalTitle}>Payment Successful!</h3>
          <p className={styles.modalMessage}>
            Thank you for purchasing {shoeName}
          </p>
          <button onClick={onClose} className={styles.modalCloseButton}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const WomenShoes = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedShoe, setSelectedShoe] = React.useState(null);

  const shoes = [
    {
      id: 1,
      name: "Elegant Evening Heels",
      price: "$129.99",
      originalPrice: "$159.99",
      image: "/images/shoe1.png",
      color: "Black / Rose Gold",
      tag: "Best Seller",
    },
    {
      id: 2,
      name: "Comfort Walk Sneakers",
      price: "$89.99",
      image: "/images/shoe2.png",
      color: "White / Silver",
      tag: "New Arrival",
    },
    {
      id: 3,
      name: "Summer Breeze Sandals",
      price: "$69.99",
      image: "/images/shoe3.png",
      color: "Beige / Gold",
      tag: "Trending",
    },
  ];

  useEffect(() => {
    injectPixel();
  }, []);
  const handleBuyNow = (shoe) => {
    setSelectedShoe(shoe);
    setModalOpen(true);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <SuccessModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          shoeName={selectedShoe?.name}
        />

        <div className={styles.header}>
          <h1 className={styles.title}>Luxury Footwear Collection</h1>
          <p className={styles.subtitle}>
            Discover our curated selection of premium women's shoes
          </p>
        </div>

        <div className={styles.productGrid}>
          {shoes.map((shoe) => (
            <div key={shoe.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className={styles.productImage}
                />
                <div className={styles.tagBadge}>{shoe.tag}</div>
              </div>

              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{shoe.name}</h3>
                <p className={styles.productColor}>{shoe.color}</p>

                <div className={styles.priceContainer}>
                  <span className={styles.currentPrice}>{shoe.price}</span>
                  {shoe.originalPrice && (
                    <span className={styles.originalPrice}>
                      {shoe.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleBuyNow(shoe)}
                  className={`${styles.buyButton} circle_purchase`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WomenShoes;
