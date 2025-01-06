import React from "react";
import styles from "./ListingDetails.module.css";

interface ListingDetailsProps {
  listingTitle: string;
  currentPrice: number;
}

const ListingDetails: React.FC<ListingDetailsProps> = ({
  listingTitle,
  currentPrice,
}) => {
  return (
    <div className={styles.listingDetails}>
      <div>Listing description</div>
      <h2>{listingTitle}</h2>
      <div className={styles.bidContainer}>
        <div>Starting price</div>
        <h2>${currentPrice}</h2>
      </div>
    </div>
  );
};

export default ListingDetails;
