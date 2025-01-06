import styles from "./ListingPage.module.css";
import Header from "../components/Header/Header";
import Navbar from "../components/Navigation/Navbar";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

interface Listing {
  title: string;
  seller: user;
  pageViews: number;
  id: string;
  watchlistCount: number;
  listingTitle: string;
  bids: Bid[];
  highestBid: () => Bid | null;
  viewCount: number;
}

interface user {
  id: string;
  name: string;
  createdAt: Date;
  profilePic: string;
  rating: string;
  totalRatings: number;
  location: string;
}
interface Bid {
  amount: number;
  bidderName: string;
  placedAt: Date;
  id: string;
  listingId: string;
}

const bid: Bid = {
  amount: 100,
  bidderName: "TradeMeGuy7",
  placedAt: new Date(),
  id: "1234567890",
  listingId: "1234567890",
};

const listing: Listing = {
  title: "Computer Monitor",
  seller: {
    id: "1234567890",
    name: "TradeMeGuy7",
    createdAt: new Date(),
    profilePic: "seller profile pic",
    rating: "99.87",
    totalRatings: 1234,
    location: "Miramar, Wellington",
  },
  pageViews: 1234,
  id: "1234567890",
  watchlistCount: 123,
  listingTitle: "Computer Monitor",
  highestBid: function () {
    return this.bids.reduce((previous, current) =>
      previous.amount > current.amount ? previous : current
    );
  },
  bids: [bid],
  viewCount: 1234,
};

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

  return (
    <div className={styles.listingPage}>
      <header className={styles.header}>
        <Header />
        <Navbar />
      </header>
      <Breadcrumbs />

      <div className={styles.listingDetails}>
        <div>Listing description</div>
        <h2>{listing.title}</h2>
      </div>
      <div className={styles.bidContainer}>
        <div>Starting price</div>
        <h2>${listing.highestBid()?.amount}</h2>
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
          {listing.watchlistCount} others watchlisted
        </div>
      </div>
      <div className={styles.sellerProfileContainer}>
        <div className={styles.sellerProfilePic}>
          <img src={listing.seller.profilePic} alt="seller profile pic" />
        </div>
        <div className={styles.sellerProfileText}>
          <div>
            <a>
              {listing.seller.name} ({listing.seller.totalRatings})
            </a>
          </div>
          <div>{listing.seller.rating}% positive feedback</div>
          <div>Seller located in {listing.seller.location}</div>
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
        <div>{listing.seller.profilePic}</div>
        <div>{listing.seller.name}</div>
        <div>
          {listing.seller.rating}% positive feedback (
          {listing.seller.totalRatings})
        </div>
        <div className={styles.sellerLocation}>
          <div>Location</div>
          <div>{listing.seller.location}</div>
        </div>
        <hr />
        <div className={styles.sellerMemberSince}>
          <div>Member since</div>
          <div>{listing.seller.createdAt.toDateString()}</div>
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
        <div>Page views: {listing.viewCount}</div>
        <div>Listing #{listing.id}</div>
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
