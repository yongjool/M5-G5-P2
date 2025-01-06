import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div>Browse Marketplace</div>
      <div>List an item</div>
    </nav>
  );
};

export default Navbar;
