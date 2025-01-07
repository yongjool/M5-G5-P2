import React from 'react';
import styles from './ReserveCards.module.css'; // Import styles as an object

import { AuctionData } from '../../../../types/dataTypes';
import ACard from '../AuctionCards/ACard';

interface Products {
    data: AuctionData[];
    popular: Boolean;
}

const ReserveCards: React.FC<Products> = ({ data, popular }) => {
    return (
        <div className={styles.ReserveCards}>
            <div className={styles.emptyBox}></div>
            <div className={styles.ReserveCardsContainer}>
                {data
                    .filter((item) =>
                        popular
                            ? item.favourite === true
                            : item.onedollar === true,
                    ) // Filter items with dollar property set to true
                    .map((item, i) => (
                        <ACard key={'ACard' + i} data={item} />
                    ))}
            </div>
            <div className={styles.emptyBox}></div>
        </div>
    );
};

export default ReserveCards;
