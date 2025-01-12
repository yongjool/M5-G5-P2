import React from 'react';
import styles from './CategoriesCards.module.css'; // Import styles as an object

import CCard from './CCard';

const CategoriesCards: React.FC = () => {
    return (
        <div className={styles.CategoriesCards}>
            <div className={styles.emptyBox}></div>
            <div className={styles.CategoriesCardsContainer}>
                <CCard
                    isInvert={false}
                    CardTitle={'55,519+ Dresses'}
                    CardText={
                        'Marketplace / Clothing & Fashion / Women / Dresses'
                    }
                />
                <CCard
                    isInvert={true}
                    CardTitle={'55,519+ Dresses'}
                    CardText={'Motors / Cars'}
                />
                <CCard
                    isInvert={false}
                    CardTitle={'18,967+ Shoes'}
                    CardText={
                        'Marketplace / Clothing & Fashion / Women / Dresses'
                    }
                />
            </div>
            <div className={styles.emptyBox}></div>
        </div>
    );
};

export default CategoriesCards;
