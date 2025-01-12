import React from 'react';
import styles from './Menu.module.css'; // Import styles as an object

import JobsIcon from '../../../../assets/JobsIcon.png';
import MarketplaceIcon from '../../../../assets/MarketplaceIcon.png';
import MotorsIcon from '../../../../assets/MotorsIcon.png';
import PropertyIcon from '../../../../assets/PropertyIcon.png';
import ServiceIcon from '../../../../assets/ServiceIcon.png';
import rightArrow from '../../../../assets/rightArrow.png';

const Menu: React.FC = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.emptyBox}></div>
            <div className={styles.menuBodyContainer}>
                <div className={styles.menuBody}>
                    <button className={styles.menuItem}>
                        <span className={styles.icon}>
                            <img
                                src={MarketplaceIcon}
                                className={styles.bgImage}
                                alt="MarketplaceIcon"
                            />
                        </span>
                        <span className={styles.text}>Marketplace</span>
                    </button>
                    <button className={styles.menuItem}>
                        <span className={styles.icon}>
                            <img
                                src={JobsIcon}
                                className={styles.bgImage}
                                alt="JobsIcon"
                            />
                        </span>
                        <span className={styles.text}>Jobs</span>
                    </button>
                    <button className={styles.menuItem}>
                        <span className={styles.icon}>
                            <img
                                src={MotorsIcon}
                                className={styles.bgImage}
                                alt="MotorsIcon"
                            />
                        </span>
                        <span className={styles.text}>Motors</span>
                    </button>
                    <button className={styles.menuItem}>
                        <span className={styles.icon}>
                            <img
                                src={PropertyIcon}
                                className={styles.bgImage}
                                alt="PropertyIcon"
                            />
                        </span>
                        <span className={styles.text}>Property</span>
                    </button>
                    <button className={styles.menuItem}>
                        <span className={styles.icon}>
                            <img
                                src={ServiceIcon}
                                className={styles.bgImage}
                                alt="ServiceIcon"
                            />
                        </span>
                        <span className={styles.text}>Services</span>
                    </button>
                    <button className={`${styles.menuItem} ${styles.extra}`}>
                        <span className={styles.text}>Browse all</span>
                        <img
                            style={{ marginLeft: 'auto' }}
                            src={rightArrow}
                            className={styles.bgImage}
                            alt="rightArrow"
                        />
                    </button>
                </div>
            </div>
            <div className={styles.emptyBox}></div>
        </div>
    );
};

export default Menu;
