import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css'; // Import styles as an object

import searchIcon from '../../../assets/SearchMobile.png';

const SearchBar: React.FC = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [inputText, setInputText] = useState<string>(''); // Initialize state for the input value

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value); // Update the state with the new value
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleClick(); // Call the submit function when Enter is pressed
        }
    };

    // Click handler function
    const handleClick = () => {
        const message = inputText;
        // Passing the string as state
        navigate('/search', { state: { message } });
    };

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
                            value={inputText}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            type="text"
                            className={styles.textInput}
                            placeholder="Search all of Trade Me"
                        />
                        <button className={styles.button} onClick={handleClick}>
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
