import React from 'react';
import styles from './Navbar.module.css'; // Import styles as an object
import logo from '../../assets/TrademeLogo.png'; // Import the logo image
import LogoMobile from '../../assets/LogoMobile.png'; // Import the logo image

//icons
import icon_down from '../../assets/icon_down.png'; // Import the logo image
import icon_watch from '../../assets/icon_watch.png'; // Import the logo image
import icon_heart from '../../assets/icon_heart.png'; // Import the logo image
import icon_pen from '../../assets/icon_pen.png'; // Import the logo image
import icon_login from '../../assets/icon_login.png'; // Import the logo image

import icon_login_mobile from '../../assets/icon_login_mobile.png'; // Import the logo image
import icon_search_mobile from '../../assets/icon_search_mobile.png'; // Import the logo image
import icon_watch_mobile from '../../assets/icon_watch_mobile.png'; // Import the logo image

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.BottomNavContainer} ${styles.mobile}`}>
                <div className={styles.NavBodyContainer}>
                    <div className={styles.logoContainer}>
                        {LogoMobile && (
                            <img src={LogoMobile} alt="LogoMobile" />
                        )}
                    </div>
                    <div className={styles.browseContainer}>
                        <div className={styles.bottomItemContainer}>
                            <div className={styles.iconContainer}>
                                {icon_search_mobile && (
                                    <img
                                        src={icon_search_mobile}
                                        alt="icon_search_mobile"
                                    />
                                )}
                            </div>
                            <div className={styles.bottomItem}>Search</div>
                        </div>
                    </div>
                    <div className={styles.bottomRightNavContainer}>
                        <div className={styles.bottomItemContainer}>
                            <div className={styles.iconContainer}>
                                {icon_watch_mobile && (
                                    <img
                                        src={icon_watch_mobile}
                                        alt="icon_watch_mobile"
                                    />
                                )}
                            </div>
                            <div className={styles.bottomItem}>Watchlist</div>
                        </div>

                        <div className={styles.bottomItemContainer}>
                            <div className={styles.bottomItem}>My Trade Me</div>
                            <div className={styles.iconContainer}>
                                {icon_login_mobile && (
                                    <img
                                        src={icon_login_mobile}
                                        alt="icon_login_mobile"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.topNavContainer} ${styles.desktop}`}>
                <div className={styles.emptyBox}></div>
                <div className={styles.NavBodyContainer}>
                    <div className={styles.topLeftNavContainer}>
                        <div className={styles.topItem}>Trade Me</div>
                        <div className={styles.topItem}>Trade Me Insurance</div>
                        <div className={styles.topItem}>Holiday Houses</div>
                        <div className={styles.topItem}>FindSomeone</div>
                        <div className={styles.topItem}>MotorWeb</div>
                        <div className={styles.topItem}>homes.co.nz</div>
                    </div>
                    <div className={styles.topRightNavContainer}>
                        <div className={styles.topItem}>Register</div>
                        <div className={styles.topItem}>Log in</div>
                    </div>
                </div>
                <div className={styles.emptyBox}></div>
            </div>
            <div className={`${styles.BottomNavContainer} ${styles.desktop}`}>
                <div
                    className={styles.emptyBox}
                    style={{ backgroundColor: '#ffffff' }}
                ></div>
                <div className={styles.NavBodyContainer}>
                    <div className={styles.logoContainer}>
                        {logo && <img src={logo} alt="Logo" />}
                    </div>
                    <div className={styles.browseContainer}>
                        <div className={styles.browseItem}>
                            Browse
                            <div className={styles.iconContainer}>
                                {icon_down && (
                                    <img src={icon_down} alt="icon_down" />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomRightNavContainer}>
                        <div className={styles.bottomItemContainer}>
                            <div className={styles.iconContainer}>
                                {icon_watch && (
                                    <img src={icon_watch} alt="icon_watch" />
                                )}
                            </div>
                            <div className={styles.bottomItem}>Watchlist</div>
                        </div>
                        <div className={styles.bottomItemContainer}>
                            <div className={styles.iconContainer}>
                                {icon_heart && (
                                    <img src={icon_heart} alt="icon_heart" />
                                )}
                            </div>
                            <div className={styles.bottomItem}>Favourites</div>
                        </div>
                        <div className={styles.bottomItemContainer}>
                            <div className={styles.iconContainer}>
                                {icon_pen && (
                                    <img src={icon_pen} alt="icon_pen" />
                                )}
                            </div>
                            <div className={styles.bottomItem}>
                                Start a listing
                            </div>
                        </div>
                        <div className={styles.bottomItemContainer}>
                            <div className={styles.bottomItem}>My Trade Me</div>
                            <div className={styles.iconContainer}>
                                {icon_login && (
                                    <img src={icon_login} alt="icon_login" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.emptyBox}
                    style={{ backgroundColor: '#ffffff' }}
                ></div>
            </div>
        </nav>
    );
};

export default Navbar;
