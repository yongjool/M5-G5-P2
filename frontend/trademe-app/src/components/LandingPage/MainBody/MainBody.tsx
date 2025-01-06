import React from 'react';
import styles from './MainBody.module.css'; // Import styles as an object

import Menu from './Menu/Menu';
import TrendingCards from './TrendingCards/TrendingCards';
import CategoriesCards from './CategoriesCards/CategoriesCards';
import AuctionCards from './AuctionCards/AuctionCards';
import ReserveCards from './ReserveCards/ReserveCards';
import PopulaSearches from './PopulaSearches/PopulaSearches';

const MainBody: React.FC = () => {
    return (
        <div>
            <div className={styles.mainbody}>
                <Menu />
                <TrendingCards />
                <div className={styles.title}>
                    <div className={styles.emptyBox}></div>
                    <div className={styles.headerContainer}>
                        <div
                            style={{ flexDirection: 'row' }}
                            className={styles.headerBody}
                        >
                            <div className={styles.header}>Cool auctions</div>
                            <div
                                style={{ marginLeft: 'auto' }}
                                className={`${styles.header} ${styles.extra}`}
                            >
                                View All
                            </div>
                        </div>
                    </div>
                    <div className={styles.emptyBox}></div>
                </div>
                <AuctionCards />

                <div className={`${styles.title} ${styles.mobileText}`}>
                    <div className={styles.emptyBox}></div>
                    <div className={styles.headerContainer}>
                        <div className={styles.headerBody}>
                            <div className={styles.header}>
                                Popular searches
                            </div>
                        </div>
                    </div>
                    <div className={styles.emptyBox}></div>
                </div>
                <PopulaSearches />
                <div className={styles.title}>
                    <div className={styles.emptyBox}></div>
                    <div className={styles.headerContainer}>
                        <div className={styles.headerBody}>
                            <div className={styles.subHeader}>Trending</div>
                            <div className={styles.header}>Categories</div>
                        </div>
                    </div>
                    <div className={styles.emptyBox}></div>
                </div>
                <CategoriesCards />
                <div className={styles.title}>
                    <div className={styles.emptyBox}></div>
                    <div className={styles.headerContainer}>
                        <div className={styles.headerBody}>
                            <span
                                className={`${styles.header} ${styles.desktopText}`}
                            >
                                $1 reserve
                            </span>
                            <span
                                className={`${styles.header} ${styles.mobileText}`}
                            >
                                Popular searches
                            </span>
                        </div>
                    </div>
                    <div className={styles.emptyBox}></div>
                </div>
                <ReserveCards />
            </div>
        </div>
    );
};

export default MainBody;
