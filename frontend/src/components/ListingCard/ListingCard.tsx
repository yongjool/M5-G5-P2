import { Listing } from "../../pages/ListingPage";
import styles from "./ListingCard.module.css";

import React from 'react'

function ListingCard(listing: Listing) {
  return (
    <div className={styles.listingCardContainer}>
       <img src={listing.images[0]} className={styles.listingCardImage} />
       <div className={styles.listingCardDetailsTop}>
          <div className={styles.locationDateContainer}>
            <h2 className={styles.location}>{listing.location}</h2> 
            <h2 className={styles.date}>{`Listed: ${listing.createdAt.toDateString()}`}</h2>
          </div>
         <h2 className={styles.title}>{listing.title}</h2>
       </div>
       <div className={styles.listingCardDetailsBottom}>
       <h2 className={styles.bid}>{`$ ${listing.highestBid}`}</h2>
       </div>
    </div>
  )
}

export default ListingCard