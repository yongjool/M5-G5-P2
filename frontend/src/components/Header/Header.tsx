import React from "react";
import styles from "./Header.module.css";

//assets
import trademeLogoSpotlight from "../../assets/trademe-logo-spotlight.png";
import magnifyingGlass from "../../assets/magnifyingGlass.svg";
import watchlistIcon from "../../assets/binoculars-svgrepo-com.svg";
import userIcon from "../../assets/userIcon.svg";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.miniBrandLogo}
        src={trademeLogoSpotlight}
        alt="Trade Me Logo"
      />
      <div>
        <img
          className={styles.miniBrandLogo}
          src={magnifyingGlass}
          alt="Search bar"
        />
        Search bar PH
      </div>
      <div>
        <img
          className={styles.miniBrandLogo}
          src={watchlistIcon}
          alt="Watchlist"
        />
        Watchlist
      </div>
      <div>
        <img
          className={styles.miniBrandLogo}
          src={userIcon}
          alt="User profile"
        />
        Profile icon
      </div>
    </header>
  );
};

export default Header;
