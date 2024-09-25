// src/components/Banner.js
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      {bannerUrl && (
        <img src={bannerUrl} alt="Banner" className={styles.bannerImage} />
      )}
    </div>
  );
}
