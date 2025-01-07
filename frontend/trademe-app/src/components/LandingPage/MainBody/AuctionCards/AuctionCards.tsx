import React from 'react';
import styles from './AuctionCards.module.css'; // Import styles as an object

import { AuctionData } from '../../../../types/dataTypes';
import ACard from './ACard';

interface Products {
    data: AuctionData[];
}

const AuctionCards: React.FC<Products> = ({ data }) => {
    return (
        <div className={styles.AuctionCards}>
            <div className={styles.emptyBox}></div>
            <div className={styles.AuctionCardsContainer}>
                {data
                    .filter(
                        (item) =>
                            item.onedollar === false &&
                            item.favourite === false,
                    ) // Filter items with dollar property set to true
                    .map((item, i) => (
                        <ACard key={'ACard' + i} data={item} />
                    ))}
            </div>
            <div className={styles.emptyBox}></div>
        </div>
    );
};

export default AuctionCards;
