import React from 'react';
import styles from './Footer.module.css'; // Import styles as an object
import logo from '../../assets/TrademeLogo.png'; // Import the logo image

import chat_icon from '../../assets/chat_icon.png'; // Import the logo image
import info_icon from '../../assets/info_icon.png'; // Import the logo image

import chat_mobile from '../../assets/chat_mobile.png'; // Import the logo image
import info_mobile from '../../assets/info_mobile.png'; // Import the logo image

import copyright_icon from '../../assets/copyright_icon.png'; // Import the logo image
import twitter from '../../assets/twitter.png'; // Import the logo image
import facebook from '../../assets/facebook.png'; // Import the logo image
import shieldedlogo from '../../assets/shielded-logo.png'; // Import the logo image

const Footer: React.FC = () => {
    const topPart = () => {
        return (
            <div className={styles.FooterContainer}>
                <div className={styles.emptyBox}></div>
                <div className={styles.FooterBodyContainer}>
                    <div
                        style={{
                            fontSize: '14px',
                            marginRight: '4vw',
                            cursor: 'default',
                            textDecoration: 'none',
                        }}
                        className={styles.textItem}
                    >
                        We are upgrading some of our systems
                    </div>
                    <div className={styles.iconContainer}>
                        {info_icon && (
                            <img
                                className={styles.desktop}
                                src={info_icon}
                                alt="info_icon"
                            />
                        )}
                        {info_mobile && (
                            <img
                                className={styles.mobile}
                                src={info_mobile}
                                alt="info_mobile"
                            />
                        )}
                        <div
                            style={{
                                fontSize: '14px',
                                color: '#528EE1',
                                marginLeft: '8px',
                                marginRight: '20px',
                            }}
                            className={styles.textItem}
                        >
                            Learn more
                        </div>
                    </div>

                    <div className={styles.iconContainer}>
                        {chat_icon && (
                            <img
                                className={styles.desktop}
                                src={chat_icon}
                                alt="chat_icon"
                            />
                        )}
                        {chat_mobile && (
                            <img
                                className={styles.mobile}
                                src={chat_mobile}
                                alt="chat_mobile"
                            />
                        )}
                        <div
                            style={{
                                fontSize: '14px',
                                color: '#528EE1',
                                marginLeft: '8px',
                                cursor: 'default',
                                textDecoration: 'none',
                            }}
                            className={styles.textItem}
                        >
                            Tell us what you think
                        </div>
                    </div>
                </div>
                <div className={styles.emptyBox}></div>
            </div>
        );
    };

    const logoPart = () => {
        return (
            <div className={styles.BodyContainer}>
                <div className={styles.logoContainer}>
                    {logo && <img src={logo} alt="Logo" />}
                </div>
                <div style={{ marginRight: '4vw' }} className={styles.textItem}>
                    List an item
                </div>
                <div style={{ marginRight: '4vw' }} className={styles.textItem}>
                    Watchlist
                </div>
                <div style={{ marginRight: '4vw' }} className={styles.textItem}>
                    Favourites
                </div>
                <div style={{ marginRight: '4vw' }} className={styles.textItem}>
                    My Trade Me
                </div>
                <div style={{ marginRight: '4vw' }} className={styles.textItem}>
                    Register
                </div>
                <div style={{ marginRight: '4vw' }} className={styles.textItem}>
                    Log in
                </div>
            </div>
        );
    };

    const reDirectPart = () => {
        return (
            <div className={styles.BodyContainer}>
                <div className={styles.BottomTextContainer}>
                    <div
                        style={{ fontSize: '14px', color: '#c64a3d' }}
                        className={styles.textItem}
                    >
                        Marketplace
                    </div>
                    <div className={styles.textItem}>Latest deals</div>
                    <div className={styles.textItem}>Stores</div>
                    <div className={styles.textItem}>Closing soon</div>
                    <div className={styles.textItem}>$1 reserve</div>
                </div>
                <div className={styles.BottomTextContainer}>
                    <div
                        style={{ fontSize: '14px', color: '#df702e' }}
                        className={styles.textItem}
                    >
                        Jobs
                    </div>
                    <div className={styles.textItem}>Browse categories</div>
                    <div className={styles.textItem}>Careers advice</div>
                    <div className={styles.textItem}>JobSmart</div>
                    <div className={styles.textItem}>Advertisers advice</div>
                </div>
                <div className={styles.BottomTextContainer}>
                    <div
                        style={{ fontSize: '14px', color: '#626e86' }}
                        className={styles.textItem}
                    >
                        Motors
                    </div>
                    <div className={styles.textItem}>Browse all cars</div>
                    <div className={styles.textItem}>Other vehicles</div>
                    <div className={styles.textItem}>Buying & Selling</div>
                    <div className={styles.textItem}>Dealer news & Info</div>
                </div>
                <div className={styles.BottomTextContainer}>
                    <div
                        style={{ fontSize: '14px', color: '#52a45a' }}
                        className={styles.textItem}
                    >
                        Property
                    </div>
                    <div className={styles.textItem}>
                        International Property
                    </div>
                    <div className={styles.textItem}>News & guides</div>
                    <div className={styles.textItem}>Homes.co.nz</div>
                    <div className={styles.textItem}>OneHub for agents</div>
                </div>
                <div className={styles.BottomTextContainer}>
                    <div
                        style={{ fontSize: '14px', color: '#555555' }}
                        className={styles.textItem}
                    >
                        Services
                    </div>
                    <div className={styles.textItem}>Trades</div>
                    <div className={styles.textItem}>Domestic Services</div>
                    <div className={styles.textItem}>
                        Events & entertainment
                    </div>
                    <div className={styles.textItem}>Health & wellbeing</div>
                </div>
                <div className={styles.BottomTextContainer}>
                    <div
                        style={{ fontSize: '14px', color: '#528ee1' }}
                        className={styles.textItem}
                    >
                        Community
                    </div>
                    <div className={styles.textItem}>Help</div>
                    <div className={styles.textItem}>Announcements</div>
                    <div className={styles.textItem}>Trust & safety</div>
                    <div className={styles.textItem}>Seller information</div>
                </div>
            </div>
        );
    };

    const bottomBody = () => {
        return (
            <div className={styles.FooterBodyContainer}>
                <div className={styles.bottomFooterContainer}>
                    {logoPart()}
                    <div className={styles.subSeperator}></div>
                    {reDirectPart()}
                </div>
            </div>
        );
    };
    const bottomPartDesktop = () => {
        return (
            <div className={styles.FooterContainer}>
                <div className={styles.emptyBox}></div>
                {bottomBody()}
                <div className={styles.emptyBox}></div>
            </div>
        );
    };

    const bottomPartMobile = () => {
        return (
            <div
                className={styles.FooterContainer}
                style={{
                    width: '120%',
                    whiteSpace: 'nowrap',
                    gap: '9vw',
                }}
            >
                <div
                    style={{
                        width: '120%',
                        whiteSpace: 'nowrap',
                    }}
                    className={styles.textItem}
                >
                    Desktop site
                </div>
                <div
                    style={{
                        width: '120%',
                        whiteSpace: 'nowrap',
                    }}
                    className={styles.textItem}
                >
                    Help
                </div>
                <div
                    style={{
                        width: '120%',
                        whiteSpace: 'nowrap',
                    }}
                    className={styles.textItem}
                >
                    Contact us
                </div>
                <div
                    style={{
                        width: '120%',
                        whiteSpace: 'nowrap',
                    }}
                    className={styles.textItem}
                >
                    Terms & Conditions
                </div>
            </div>
        );
    };

    const copyRightMobile = () => {
        return (
            <div
                style={{
                    backgroundColor: '#f7f5f4',
                }}
                className={styles.FooterContainer}
            >
                <div
                    style={{
                        width: '40%',
                    }}
                    className={styles.BodyContainer}
                >
                    <div
                        style={{
                            alignItems: 'start',
                        }}
                        className={styles.iconContainer}
                    >
                        {copyright_icon && (
                            <img src={copyright_icon} alt="copyright_icon" />
                        )}
                    </div>
                    <div
                        style={{ cursor: 'default', textDecoration: 'none' }}
                        className={styles.textItem}
                    >
                        2024 Trade Me Limited
                    </div>
                </div>
                <div className={styles.BodyContainer}>
                    <div
                        style={{
                            marginRight: '28vw',
                        }}
                        className={styles.iconContainer}
                    >
                        {shieldedlogo && (
                            <img src={shieldedlogo} alt="shieldedlogo" />
                        )}
                    </div>
                    <div className={styles.iconContainer}>
                        {twitter && <img src={twitter} alt="twitter" />}
                    </div>
                    <div className={styles.iconContainer}>
                        {facebook && <img src={facebook} alt="facebook" />}
                    </div>
                </div>
            </div>
        );
    };

    const copyRightDesktop = () => {
        return (
            <div
                className={styles.FooterContainer}
                style={{ backgroundColor: '#f7f5f4' }}
            >
                <div className={styles.emptyBox}></div>

                <div
                    style={{
                        justifyContent: 'flex-start',
                    }}
                    className={styles.FooterBodyContainer}
                >
                    <div
                        style={{
                            marginRight: '6vw',
                        }}
                        className={styles.BodyContainer}
                    >
                        <div className={styles.iconContainer}>
                            {copyright_icon && (
                                <img
                                    src={copyright_icon}
                                    alt="copyright_icon"
                                />
                            )}
                        </div>
                        <div
                            style={{
                                cursor: 'default',
                                textDecoration: 'none',
                            }}
                            className={styles.textItem}
                        >
                            2024 Trade Me Limited
                        </div>
                    </div>
                    <div
                        style={{
                            justifyContent: 'space-between',
                            gap: '1vw',
                        }}
                        className={styles.BodyContainer}
                    >
                        <div className={styles.textItem}>Desktop site</div>
                        <div className={styles.textItem}>About Us</div>
                        <div className={styles.textItem}>Careers</div>
                        <div className={styles.textItem}>Advertise</div>
                        <div className={styles.textItem}>Privacy policy</div>
                        <div className={styles.textItem}>
                            Terms & conditions
                        </div>
                        <div className={styles.textItem}>Contact Us</div>
                    </div>
                    <div
                        style={{
                            marginLeft: 'auto',
                        }}
                        className={styles.BodyContainer}
                    >
                        <div
                            style={{
                                marginRight: '6vw',
                            }}
                            className={styles.iconContainer}
                        >
                            {shieldedlogo && (
                                <img src={shieldedlogo} alt="shieldedlogo" />
                            )}
                        </div>
                        <div className={styles.iconContainer}>
                            {twitter && <img src={twitter} alt="twitter" />}
                        </div>
                        <div className={styles.iconContainer}>
                            {facebook && <img src={facebook} alt="facebook" />}
                        </div>
                    </div>
                </div>
                <div className={styles.emptyBox}></div>
            </div>
        );
    };

    return (
        <div>
            <div className={styles.footer}>
                {topPart()}
                <div className={styles.seperator}></div>
                <div className={styles.desktop}>{bottomPartDesktop()}</div>
                <div className={styles.mobile}>{bottomPartMobile()}</div>
                <div className={styles.desktop}>{copyRightDesktop()}</div>
                <div className={styles.mobile}>{copyRightMobile()}</div>

                <div
                    style={{ backgroundColor: '#f7f5f4', paddingLeft: '6vw' }}
                    className={`${styles.BodyContainer} ${styles.mobile}`}
                >
                    <div className={styles.textItem}>Register</div>
                    <div
                        style={{
                            paddingLeft: '6vw',
                        }}
                        className={styles.textItem}
                    >
                        Log in
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
