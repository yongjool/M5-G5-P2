import React from 'react';
import styles from './PopulaSearches.module.css'; // Import styles as an object

import plusIcon from '../../../../assets/plusIcon.png';

interface PSProps {
    text: string;
}

const PSContent: React.FC<PSProps> = ({ text }) => {
    return (
        <div className={`${styles.populaSearchesItem} ${styles.extra}`}>
            <span className={styles.text}>{text}</span>
            <img src={plusIcon} className={styles.iconImage} alt="plusIcon" />
        </div>
    );
};

const PopulaSearches: React.FC = () => {
    return (
        <div className={styles.PopulaSearches}>
            <PSContent text={'Marketplace'} />
            <PSContent text={'Jobs'} />
            <PSContent text={'Motors'} />
            <PSContent text={'Property'} />
        </div>
    );
};

export default PopulaSearches;
