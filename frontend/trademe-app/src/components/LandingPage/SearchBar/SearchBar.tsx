import React from 'react';
import styles from './SearchBar.module.css'; // Import styles as an object

import searchIcon from '../../../assets/SearchMobile.png';

const SearchBar: React.FC = () => {
    return (
        <div className={styles.searchContainer}>
            <div className={styles.emptyBox}></div>
            <div className={styles.searchBody}>
                <div className={styles.textItem}>
                    KIA ORA! READY TO FIND YOUR NEW?
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.inputBody}>
                        <div className={styles.imageContainer}>
                            <i className="fas fa-search search-icon"></i>
                        </div>
                        <input
                            type="text"
                            className={styles.textInput}
                            placeholder="Search all of Trade Me"
                        />
                        <button className={styles.button}>
                            <span className={styles.icon}>
                                <img
                                    src={searchIcon}
                                    className={styles.bgImage}
                                    alt="auctionImg"
                                />
                            </span>
                            <span className={styles.text}>Search</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.emptyBox}></div>
        </div>
    );
};

export default SearchBar;
