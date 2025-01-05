import React from 'react';
import styles from './ACard.module.css'; // Import styles as an object

import auctionImg from '../../../../assets/auctionItem.jpg';
import watchlistIcon from '../../../../assets/Watchlist 2.png';

import { AuctionData } from '../../../../types/dataTypes';

interface ACardProps {
    data: AuctionData;
}

const ACard: React.FC<ACardProps> = ({ data }) => {
    const cardStyle = {
        alignSelf: data.reserve === null ? 'flex-end' : 'flex-start',
    };

    const textStyle = {
        color: data.closing ? '#C64A3D' : '#b9b7c1',
        textAlign: 'right' as 'right',
    };

    return (
        <div className={styles.AuctionCardsBody}>
            <div className={styles.ImgContainer}>
                {auctionImg && (
                    <img
                        src={auctionImg}
                        className={styles.bgImage}
                        alt="auctionImg"
                    />
                )}
                {watchlistIcon && (
                    <img
                        src={watchlistIcon}
                        className={styles.iconImage}
                        alt="auctionImg"
                    />
                )}
            </div>
            <div className={styles.TextContainer}>
                <div className={styles.TopTextContainer}>
                    <div className={styles.SubTextContainer}>
                        <div className={styles.SubText}>{data.location}</div>
                        <div style={textStyle} className={styles.SubText}>
                            {data.closing ? 'Closes: ' : 'Listed: '}
                            {data.date}
                        </div>
                    </div>
                    <div className={styles.Text}> {data.type}</div>
                </div>
                <div className={styles.BottomTextContainer}>
                    <div className={styles.SubText}>
                        {data.reserve === null
                            ? ''
                            : data.reserve
                              ? 'Reserve met'
                              : 'Reserve not met'}
                    </div>
                    <div style={cardStyle} className={styles.Text}>
                        {data.detail}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ACard;
