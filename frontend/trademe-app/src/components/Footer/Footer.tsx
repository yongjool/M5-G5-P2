import React from 'react';
import styles from './Footer.module.css'; // Import styles as an object
import footer from '../../assets/Footer nav.png'; // Import the logo image

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            {footer && <img src={footer} alt="footer" />}
        </div>
    );
};

export default Footer;
