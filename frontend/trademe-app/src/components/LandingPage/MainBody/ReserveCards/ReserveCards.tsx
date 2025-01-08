import React, { useRef, useState } from 'react';
import styles from './ReserveCards.module.css'; // Import styles as an object

import { AuctionData } from '../../../../types/dataTypes';
import ACard from '../AuctionCards/ACard';

interface Products {
    data: AuctionData[];
    popular: Boolean;
}

const ReserveCards: React.FC<Products> = ({ data, popular }) => {
    const cardsWrapperRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (cardsWrapperRef.current) {
            setIsDragging(true);
            setStartX(e.pageX - cardsWrapperRef.current.offsetLeft); // Get the starting position
            setScrollLeft(cardsWrapperRef.current.scrollLeft); // Save the current scroll position
        }
    };

    // Handle mouse move event
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !cardsWrapperRef.current) return;

        const x = e.pageX - cardsWrapperRef.current.offsetLeft;
        const walk = startX - x; // Reverse the scroll direction by changing the formula
        cardsWrapperRef.current.scrollLeft = scrollLeft + walk; // Adjust scroll position accordingly
    };

    // Handle mouse up event
    const handleMouseUp = () => {
        setIsDragging(false); // Stop dragging when mouse button is released
    };

    // Handle mouse leave event to stop dragging if the mouse leaves the container
    const handleMouseLeave = () => {
        setIsDragging(false);
    };
    return (
        <div className={styles.ReserveCards}>
            <div className={styles.emptyBox}></div>
            <div
                className={styles.ReserveCardsContainer}
                ref={cardsWrapperRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {data
                    .filter((item) =>
                        popular
                            ? item.favourite === true
                            : item.onedollar === true,
                    ) // Filter items with dollar property set to true
                    .map((item, i) => (
                        <ACard key={'ACard' + i} data={item} />
                    ))}
            </div>
            <div className={styles.emptyBox}></div>
        </div>
    );
};

export default ReserveCards;
