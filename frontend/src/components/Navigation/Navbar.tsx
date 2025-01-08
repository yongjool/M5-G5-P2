import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        Browse Marketplace <div className={styles.xSmallText}>&#x25BC;</div>
      </div>
      <div className={styles.navRight}>List an item</div>
    </nav>
  );
};

export default Navbar;
