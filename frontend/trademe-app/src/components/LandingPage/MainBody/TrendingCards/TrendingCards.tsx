import React from 'react';
import styles from './TrendingCards.module.css'; // Import styles as an object

import TCard from './TCard';

const TrendingCards: React.FC = () => {
    return (
        <div className={styles.trendingCards}>
            <div className={styles.emptyBox}></div>
            <div className={styles.trendingCardsContainer}>
                <TCard
                    isInvert={true}
                    CardTitle={'Trending'}
                    CardText={'Shop last minute Xmas gifts!'}
                    buttonText={'Shop now'}
                />
                <TCard
                    isInvert={false}
                    CardTitle={'Property'}
                    CardText={'You choose, we celebrate'}
                    buttonText={'Nominate now'}
                />
                <TCard
                    isInvert={false}
                    CardTitle={'Property'}
                    CardText={'Sold data is here'}
                    buttonText={'Search now'}
                />
            </div>
            <div className={styles.emptyBox}></div>
        </div>
    );
};

export default TrendingCards;
