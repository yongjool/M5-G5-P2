import React from 'react';
import styles from './ReserveCards.module.css'; // Import styles as an object

import ACard from '../AuctionCards/ACard';

const ReserveCards: React.FC = () => {
    return (
        <div className={styles.ReserveCards}>
            <div className={styles.emptyBox}></div>
            <div className={styles.ReserveCardsContainer}>
                <ACard
                    data={{
                        location: 'Auckland',
                        date: '1hr 19 mins',
                        type: 'Mini lathe $1 Reserve',
                        closing: true,
                        reserve: true,
                        detail: '$453.00',
                    }}
                />
                <ACard
                    data={{
                        location: 'Auckland',
                        date: '1hr 19 mins',
                        type: 'Honda lawn mower',
                        closing: true,
                        reserve: true,
                        detail: '$123.00',
                    }}
                />
                <ACard
                    data={{
                        location: 'Auckland',
                        date: '1hr 5 mins',
                        type: 'Casio watch',
                        closing: true,
                        reserve: true,
                        detail: '$23.00',
                    }}
                />
                <ACard
                    data={{
                        location: 'Auckland',
                        date: '1hr 5 mins',
                        type: 'Makita drill driver',
                        closing: true,
                        reserve: false,
                        detail: '$31.00',
                    }}
                />
            </div>
            <div className={styles.emptyBox}></div>
        </div>
    );
};

export default ReserveCards;
