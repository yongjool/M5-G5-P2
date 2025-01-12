import React, { useEffect, useState } from 'react';
import styles from './MainBody.module.css'; // Import styles as an object

import Menu from './Menu/Menu';
import TrendingCards from './TrendingCards/TrendingCards';
import CategoriesCards from './CategoriesCards/CategoriesCards';
import AuctionCards from './AuctionCards/AuctionCards';
import ReserveCards from './ReserveCards/ReserveCards';
import PopulaSearches from './PopulaSearches/PopulaSearches';

import { AuctionData } from '../../../types/dataTypes';

interface Products {
    data: AuctionData[];
}

const MainBody: React.FC<Products> = ({ data }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 480px)');
        const handleMediaChange = () => setIsMobile(mediaQuery.matches);

        handleMediaChange(); // Initial check
        mediaQuery.addEventListener('change', handleMediaChange);

        return () =>
            mediaQuery.removeEventListener('change', handleMediaChange);
    }, []);

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
                                View All {'(' + data.length + ')'}
                            </div>
                        </div>
                    </div>
                    <div className={styles.emptyBox}></div>
                </div>
                <AuctionCards data={data} />

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
                <ReserveCards data={data} popular={isMobile} />
            </div>
        </div>
    );
};

export default MainBody;
