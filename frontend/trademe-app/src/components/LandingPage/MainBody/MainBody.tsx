import React from 'react';
import styles from './MainBody.module.css'; // Import styles as an object

import Menu from './Menu/Menu';
import TrendingCards from './TrendingCards/TrendingCards';
import CategoriesCards from './CategoriesCards/CategoriesCards';
import AuctionCards from './AuctionCards/AuctionCards';
import ReserveCards from './ReserveCards/ReserveCards';

const MainBody: React.FC = () => {
    return (
        <div>
            <div className={styles.mainbody}>
                <Menu />
                <TrendingCards />
                <div className={styles.title}>
                    <div className={styles.emptyBox}></div>
                    <div className={styles.headerContainer}>
                        <div className={styles.headerBody}>
                            <div className={styles.header}>Cool auctions</div>
                        </div>
                    </div>
                    <div className={styles.emptyBox}></div>
                </div>
                <AuctionCards />
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
                            <div className={styles.header}>$1 reserve</div>
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
