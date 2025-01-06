import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>Logo PH</div>
      <div>Search icon</div>
      <div>Watchlist</div>
      <div>Profile icon</div>
    </header>
  );
};

export default Header;
