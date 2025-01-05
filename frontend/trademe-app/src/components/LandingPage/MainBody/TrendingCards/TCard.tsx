import React from 'react';
import styles from './TCard.module.css'; // Import styles as an object

interface TCardProps {
    isInvert: boolean;
    CardTitle: string;
    CardText: string;
    buttonText: string;
}

const TCard: React.FC<TCardProps> = ({
    isInvert,
    CardTitle,
    CardText,
    buttonText,
}) => {
    const cardStyle = {
        backgroundColor: isInvert ? '#ffffff' : '#5554d4',
    };

    const textStyle = {
        color: isInvert ? '#5554d4' : '#ffffff',
    };

    const buttonStyle = {
        backgroundColor: isInvert ? '#5554d4' : '#ffffff',
        color: isInvert ? '#ffffff' : '#5554d4',
    };

    return (
        <div style={cardStyle} className={styles.trendingCardsBody}>
            <div className={styles.trendingCardsTextBox}>
                <div style={textStyle} className={styles.trendingCardsTitle}>
                    {CardTitle}
                </div>
                <div style={textStyle} className={styles.trendingCardsText}>
                    {CardText}
                </div>
                <button
                    style={buttonStyle}
                    className={styles.trendingCardsButton}
                >
                    {buttonText}
                </button>
            </div>
            <div className={styles.trendingCardsImg}></div>
        </div>
    );
};

export default TCard;
