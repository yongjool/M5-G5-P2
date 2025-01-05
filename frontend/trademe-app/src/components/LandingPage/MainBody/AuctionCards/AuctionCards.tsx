import React from 'react';
import styles from './AuctionCards.module.css'; // Import styles as an object

import ACard from './ACard';

const AuctionCards: React.FC = () => {
    return (
        <div className={styles.AuctionCards}>
            <div className={styles.emptyBox}></div>
            <div className={styles.AuctionCardsContainer}>
                <ACard
                    data={{
                        location: 'Auckland',
                        date: 'Fri, 15 Nov',
                        type: 'Cabin',
                        closing: false,
                        reserve: false,
                        detail: '$5,000',
                    }}
                />
                <ACard
                    data={{
                        location: 'Gisbourne',
                        date: 'Tue, 28 May',
                        type: 'Action Estate',
                        closing: false,
                        reserve: null,
                        detail: 'Enquiries over $5,000,000',
                    }}
                />
                <ACard
                    data={{
                        location: 'Auckland',
                        date: 'Thu, 29 Aug',
                        type: 'French Chateau Fantasy',
                        closing: false,
                        reserve: null,
                        detail: 'Price by negotiation',
                    }}
                />
                <ACard
                    data={{
                        location: "Hawke's Bay",
                        date: 'Thu, 21 Dec',
                        type: 'Fancy Heritage House',
                        closing: false,
                        reserve: null,
                        detail: 'Price by negotiation',
                    }}
                />
            </div>
            <div className={styles.emptyBox}></div>
        </div>
    );
};

export default AuctionCards;
