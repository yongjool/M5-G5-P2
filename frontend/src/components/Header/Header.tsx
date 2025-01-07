import React from "react";
import styles from "./Header.module.css";

//assets
import trademeLogoSpotlight from "../../../public/trademe-logo-spotlight.png";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.miniBrandLogo}
        src={trademeLogoSpotlight}
        alt="Trade Me Logo"
      />
      <div>Search icon</div>
      <div>Watchlist</div>
      <div>Profile icon</div>
    </header>
  );
};

export default Header;
