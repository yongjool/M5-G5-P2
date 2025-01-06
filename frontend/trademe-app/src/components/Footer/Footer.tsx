import React from 'react';
import styles from './Footer.module.css'; // Import styles as an object
import footer from '../../assets/Footer nav.png';
import footerMobile from '../../assets/Mobile footer nav.png';

const Footer: React.FC = () => {
    return (
        <div>
            <div className={`${styles.footer} ${styles.desktop}`}>
                {footer && <img src={footer} alt="footer" />}
            </div>
            <div className={`${styles.footer} ${styles.mobile}`}>
                {footerMobile && <img src={footerMobile} alt="footerMobile" />}
            </div>
        </div>
    );
};

export default Footer;
