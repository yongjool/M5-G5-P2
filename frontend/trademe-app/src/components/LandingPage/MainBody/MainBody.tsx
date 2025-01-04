import React from 'react';
import styles from './MainBody.module.css'; // Import styles as an object

import Menu from './Menu/Menu';

const MainBody: React.FC = () => {
    return (
        <div>
            <div className={styles.body}>
                <div className={styles.emptyBox}></div>

                <div className={styles.mainBodyContainer}>
                    <Menu />
                </div>
                <div className={styles.emptyBox}></div>
            </div>
        </div>
    );
};

export default MainBody;
