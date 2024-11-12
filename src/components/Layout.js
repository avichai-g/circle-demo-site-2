import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navBrand}>
          <img src="images/circle.png" alt="Logo" />
        </Link>
        <Link href="/after-sale" className={styles.navLink}>
          <span className={styles.icon}>🛠️</span>
          <span>After Sale</span>
        </Link>
        <Link href="/women-shoes" className={styles.navLink}>
          <span className={styles.icon}></span>
          <span>Women shoes</span>
        </Link>
      </nav>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
