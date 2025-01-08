import React from "react";
import styles from "./Header.module.css";

//assets
import trademeLogoSpotlight from "../../assets/tradeMeLogo.svg";
import magnifyingGlass from "../../assets/magnifyingGlass.svg";
import watchlistIcon from "../../assets/binoculars.svg";
import userIcon from "../../assets/userIcon.svg";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        <div className={styles.brandLogo}>
          <img
            className={styles.miniBrandLogo}
            src={trademeLogoSpotlight}
            alt="Trade Me Logo"
          />
        </div>
        <div className={styles.searchBarContainer}>
          <img
            className={styles.miniBrandLogo}
            src={magnifyingGlass}
            alt="Search bar"
          />
          <div> Search</div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.watchlist}>
          <img
            className={styles.miniBrandLogo}
            src={watchlistIcon}
            alt="Watchlist"
          />
          Watchlist
        </div>
        <div className={styles.userProfile}>
          <img
            className={styles.miniBrandLogo}
            src={userIcon}
            alt="User profile"
          />
          My Trade Me
        </div>
      </div>
    </header>
  );
};

export default Header;
