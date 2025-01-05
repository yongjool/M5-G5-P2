import React from 'react';
import styles from './CCard.module.css'; // Import styles as an object

interface CCardProps {
    isInvert: boolean;
    CardTitle: string;
    CardText: string;
}

const CCard: React.FC<CCardProps> = ({ isInvert, CardTitle, CardText }) => {
    const cardStyle = {
        backgroundColor: isInvert ? '#626E86' : '#c64a3d',
    };

    return (
        <div style={cardStyle} className={styles.CategoriesCardsBody}>
            <div className={styles.CategoriesCardsText}>{CardTitle}</div>
            <div className={styles.CategoriesCardsSubText}>{CardText}</div>
        </div>
    );
};

export default CCard;
