import React from 'react';
import styles from './Menu.module.css'; // Import styles as an object

const Menu: React.FC = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.emptyBox}></div>
            <div className={styles.menuBodyContainer}>
                <div className={styles.menuBody}>
                    <button
                        className={styles.menuItem}
                        style={{ backgroundColor: '#C64A3D' }}
                    >
                        Marketplace
                    </button>
                    <button
                        className={styles.menuItem}
                        style={{ backgroundColor: '#DF702E' }}
                    >
                        Jobs
                    </button>
                    <button
                        className={styles.menuItem}
                        style={{ backgroundColor: '#626E86' }}
                    >
                        Motors
                    </button>
                    <button
                        className={styles.menuItem}
                        style={{ backgroundColor: '#52A45A' }}
                    >
                        Property
                    </button>
                    <button
                        className={styles.menuItem}
                        style={{ backgroundColor: '#555555' }}
                    >
                        Services
                    </button>
                </div>
            </div>
            <div className={styles.emptyBox}></div>
        </div>
    );
};

export default Menu;
