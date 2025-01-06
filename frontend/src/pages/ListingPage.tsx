import styles from "./ListingPage.module.css";

const ListingPage: React.FC = () => {
  const handlePlaceBid = () => {
    // set up logic for placing a bid;
  };

  const handleBuyNow = () => {
    // set up logic for buying now;
  };

  const handleMakeOffer = () => {
    // set up logic for making an offer;
  };

  const sellerName = "TradeMeGuy7";
  const sellerAccountCreationDate = "Friday, 1 January 2000";
  const sellerProfilePic = "seller profile pic";
  const sellerRating = 99.87;
  const sellerTotalRatings = 1234;
  const sellerLocation = "Miramar, Wellington";
  const pageViews = 1234;
  const listingNumber = 1234567890;
  const currentPrice = 1234.56;
  const watchlistCount = 123;
  const listingTitle = "Computer Monitor";

  return (
    <div className={styles.listingPage}>
      <header className={styles.header}>
        <div>Logo PH</div>
        <div>Search icon</div>
        <div>Watchlist</div>
        <div>Profile icon</div>
      </header>
      <div className={styles.navigation}>
        <div>Broswe Marketplace</div>
        <div>List an item</div>
      </div>
      <div className={styles.breadcrumbs}>
        Navigation / path / to / items / Laptops & PC's
      </div>

      <div className={styles.listingDetails}>
        <div>Listing description</div>
        <h2>{listingTitle}</h2>
      </div>
      <div className={styles.bidContainer}>
        <div>Starting price</div>
        <h2>${currentPrice}</h2>
        <button
          className={`${styles.blue} ${styles.lrgBtn}`}
          onClick={handlePlaceBid}
        >
          Place bid
        </button>
        <button
          className={`${styles.blue} ${styles.lrgBtn}`}
          onClick={handleBuyNow}
        >
          Buy now
        </button>
        <button
          className={`${styles.offWhite} ${styles.lrgBtn}`}
          onClick={handleMakeOffer}
        >
          Make offer
        </button>
        <div>Reserve status</div>
        <div>Bid Status</div>
      </div>

      <div className={styles.closingInfoContainer}>
        <div className={styles.closingTime}>
          Closing in X days/ hours + date and time (posted / ends??)
        </div>
        <button className={`${styles.watchlistYellow} ${styles.lrgBtn}`}>
          Add to Watchlist
        </button>
        <div className={styles.watchlistCount}>
          {watchlistCount} others watchlisted
        </div>
      </div>
      <div className={styles.sellerProfileContainer}>
        <div className={styles.sellerProfilePic}>
          <img src={sellerProfilePic} alt="seller profile pic" />
        </div>
        <div className={styles.sellerProfileText}>
          <div>
            <a>
              {sellerName} ({sellerTotalRatings})
            </a>
          </div>
          <div>{sellerRating}% positive feedback</div>
          <div>Seller located in {sellerLocation}</div>
        </div>
      </div>
      <div className={styles.productAtGlanceContainer}></div>
      <div className={styles.paymentOptions}>
        <h2>Payment Options</h2>
        <div className={styles.pingContainer}>
          <div>Ping logo</div>
          <div>Pay instantly by card, Ping balance or saved bank account.</div>
          <div>
            <a>What's Ping? (link to ping info)</a>
          </div>
        </div>
        <div className={styles.afterPayContainer}>
          <div>Afterpay logo</div>
          <div>Four fortnightly interest-free payments.</div>
          <div>
            <a>What's Afterpay? (link to afterpay info)</a>
          </div>
        </div>
        <div className={styles.otherPaymentOptionsContainer}>
          <div>Other options</div>
          <div>Cash, NZ Bank Deposit</div>
        </div>
      </div>
      <div className={styles.questionsAnswers}>
        <h2>Questions & answers (1)</h2>
        <div>Q&A Chat box</div>
        <button className={`${styles.blue}`}>Ask a question</button>
      </div>
      <div className={styles.aboutSellerContainer}>
        <h2 className={styles.aboutSellerTitle}>About the seller</h2>
        <div>{sellerProfilePic}</div>
        <div>{sellerName}</div>
        <div>
          {sellerRating}% positive feedback ({sellerTotalRatings})
        </div>
        <div className={styles.sellerLocation}>
          <div>Location</div>
          <div>{sellerLocation}</div>
        </div>
        <hr />
        <div className={styles.sellerMemberSince}>
          <div>Member since</div>
          <div>{sellerAccountCreationDate}</div>
        </div>
        <hr />
        <div className={styles.sellerOtherListings}>
          <div>View seller's other listings</div>
          <div>&gt;</div>
        </div>
        <hr />
        <button className={`${styles.blue} ${styles.lrgBtn}`}>
          Add to favourite sellers
        </button>
        <div>
          <a>Read our safe buying advice guide</a>
        </div>
        <div>
          <a>Share this listing</a>
        </div>
        <div>Page views: {pageViews}</div>
        <div>Listing #{listingNumber}</div>
        <div>
          Community Watch: <a>Report this listing</a>
        </div>
      </div>

      <div className={styles.otherListings}>
        <div className={styles.otherListingsTitleContainer}>
          <h2>Seller's other listings</h2>
          <div className={styles.otherListingsCount}>
            <a>View All (X)</a>
          </div>
        </div>
      </div>
      <div className={styles.upgradeNotice}>
        We're upgrading some of our systems.
        <div>
          <a>Learn more</a>
        </div>
        <div>
          <a>Tell us what you think</a>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.navContainer}>
          <div>Desktop site</div>
          <div>Help</div>
          <div>Contact us</div>
          <div>Terms and conditions</div>
        </div>
        <div className={styles.infoContainer}>
          <div>Copy right trademe</div>
          <div>Dark mode/light mode toggle</div>
          <div>Links to Socials</div>
        </div>
        <div className={styles.loginContainer}>
          <div>Register</div>
          <div>Log in</div>
        </div>
      </footer>
    </div>
  );
};

export default ListingPage;
