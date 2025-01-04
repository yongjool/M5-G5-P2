import React from 'react';
import styles from './Menu.module.css'; // Import styles as an object

const Menu: React.FC = () => {
    return (
        <div className={styles.menuBodyContainer}>
            <div className={styles.menuBody}>
                <div
                    className={styles.menuItem}
                    style={{ backgroundColor: '#C64A3D' }}
                >
                    Marketplace
                </div>
                <div
                    className={styles.menuItem}
                    style={{ backgroundColor: '#DF702E' }}
                >
                    Jobs
                </div>
                <div
                    className={styles.menuItem}
                    style={{ backgroundColor: '#626E86' }}
                >
                    Motors
                </div>
                <div
                    className={styles.menuItem}
                    style={{ backgroundColor: '#52A45A' }}
                >
                    Property
                </div>
                <div
                    className={styles.menuItem}
                    style={{ backgroundColor: '#555555' }}
                >
                    Services
                </div>
            </div>
        </div>
    );
};

export default Menu;
