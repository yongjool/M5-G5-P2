import React, { useState } from "react";
import styles from "./ListingPage.module.css";
import Header from "../components/Header/Header";
import Navbar from "../components/Navigation/Navbar";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductAtGlance from "../components/ProductAtGlance/ProductAtGlance";
import QuestionsAnswers from "../components/QuestionsAnswers/QuestionsAnswers";

// assets
import pingLogo from "../assets/ping.svg";
import afterpayLogo from "../assets/afterpay.svg";
import facebookF from "../assets/facebookF.svg";
import darkLightMode from "../assets/dark-mode.png";
import twitterLogo from "../assets/twitterLogo.svg";
import commentBubble from "../assets/commentBubble.svg";
import infoCircle from "../assets/info-circle-svgrepo-com.svg";
import shareNodes from "../assets/shareNodes.svg";
import communityWatch from "../assets/communityWatch.svg";
import favouriteIcon from "../assets/favouriteIcon.svg";
import watchlistIcon from "../assets/binoculars-svgrepo-com.svg";
import clockIcon from "../assets/clockIcon.svg";
import toggleIcon from "../assets/toggleIcon.svg";
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
  images: string[];
  heroImage: string;
  createdAt: Date;
  //   reserveStatus: string;
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
  images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  heroImage: "heroImage.jpg",
  createdAt: new Date(),
};

const ListingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [bidAmount, setBidAmount] = useState<string>("");

  React.useEffect(() => {
    if (listing.images && listing.images.length > 0) {
      setSelectedImage(listing.images[0]);
    }
  }, [listing.images]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handlePlaceBid = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsConfirmModalOpen(false);
  };

  const handleBidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBidAmount(event.target.value);
  };

  const handleSubmitBid = () => {
    setIsModalOpen(false);
    setIsConfirmModalOpen(true);
  };

  const handleConfirmBid = () => {
    // Logic to submit the bid
    setIsConfirmModalOpen(false);
  };

  const handleGoBack = () => {
    setIsConfirmModalOpen(false);
    setIsModalOpen(true);
  };

  const handleBuyNow = () => {
    // set up logic for buying now;
    // TODO: redirect to payment page
  };

  const handleMakeOffer = () => {
    // TODO: set up logic for making an offer;
  };

  return (
    <div className={styles.listingPage}>
      <header className={styles.header}>
        <Header />
        <Navbar />
      </header>
      <Breadcrumbs />
      <div className={styles.listingDetails}>
        {selectedImage && (
          <img className={styles.heroImage} src={selectedImage} alt="Hero" />
        )}
        <div className={styles.imageCarousel}>
          {listing.images.map((image, index) => (
            <img
              key={index}
              className={styles.carouselImage}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
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
          <img
            className={styles.miniBrandLogo}
            src={clockIcon}
            alt="Acution exporation date"
          />
          Closing in X days/ hours + date and time (posted / ends??)
        </div>
        <button className={`${styles.watchlistYellow} ${styles.lrgBtn}`}>
          <img
            className={styles.miniBrandLogo}
            src={watchlistIcon}
            alt="Watchlist"
          />
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
          <div>
            <span className={styles.bold}>{listing.seller.rating}</span>%
            positive feedback
          </div>
          <div>Seller located in {listing.seller.location}</div>
        </div>
      </div>
      <div className={styles.productAtGlanceContainer}>
        <ProductAtGlance />
      </div>
      <div className={styles.paymentOptions}>
        <h2>Payment Options</h2>
        <div className={styles.pingContainer}>
          <img
            className={styles.miniBrandLogo}
            src={pingLogo}
            alt="ping by TradeMe logo"
          ></img>
          <div>Pay instantly by card, Ping balance or saved bank account.</div>
          <div>
            <a href="https://www.trademe.co.nz/c/promo/ping">What's Ping?</a>
          </div>
        </div>
        <div className={styles.afterPayContainer}>
          <img
            className={`${styles.miniBrandLogo} ${styles.afterPayLogo}`}
            src={afterpayLogo}
            alt="Afterpay logo"
          ></img>
          <div>Four fortnightly interest-free payments.</div>
          <div>
            <a href="https://www.afterpay.com/en-Us/how-it-works">
              What's Afterpay?
            </a>
          </div>
        </div>
        <div className={styles.otherPaymentOptionsContainer}>
          <div className={styles.bold}>Other options</div>
          <div>Cash, NZ Bank Deposit</div>
        </div>
      </div>
      <QuestionsAnswers />
      <div className={styles.aboutSellerContainer}>
        <div className={styles.aboutSellerTitle}>About the seller</div>
        <div>{listing.seller.profilePic}</div>
        <div>{listing.seller.name}</div>
        <div>
          {listing.seller.rating}% positive feedback (
          {listing.seller.totalRatings})
        </div>
        <div className={styles.sellerLocationContainer}>
          <div className={styles.locationText}>Location</div>
          <div className={styles.sellerLocation}>{listing.seller.location}</div>
        </div>
        <hr />
        <div className={styles.sellerMemberSince}>
          <div className={styles.memberSinceText}>Member since</div>
          <div className={styles.sellerCreatedAt}>
            {listing.seller.createdAt.toDateString()}
          </div>
        </div>
        <hr />
        <a className={styles.sellerOtherListings}>
          <div className={styles.sellerOtherListingsText}>
            View seller's other listings
          </div>
          <div className={styles.dropDownArrow}>&gt;</div>
        </a>

        <hr />
        <div className={styles.favouriteSellerContainer}>
          <button className={`${styles.blue} ${styles.favouriteSellerBtn}`}>
            <img
              className={styles.miniBrandLogo}
              src={favouriteIcon}
              alt="Favourite"
            />
            Add to favourite sellers
          </button>
        </div>
        <div className={styles.safeBuyingAdvice}>
          <a>Read our safe buying advice guide</a>
        </div>
      </div>
      <div className={styles.shareContainer}>
        <a className={styles.shareLink}>
          <img className={styles.miniBrandLogo} src={shareNodes} alt="Share" />
          Share this listing
        </a>
        <div className={styles.pageViews}>Page views: {listing.viewCount}</div>
        <div className={styles.listingId}>Listing #{listing.id}</div>
        <div className={styles.communityWatch}>
          <img
            className={styles.miniBrandLogo}
            src={communityWatch}
            alt="Community Watch"
          />
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
          <img
            className={styles.miniBrandLogo}
            src={infoCircle}
            alt="Info circle"
          />
          <a>Learn more</a>
        </div>
        <div>
          <a>
            <img
              className={styles.miniBrandLogo}
              src={commentBubble}
              alt="Comment speach bubble"
            />
            Tell us what you think
          </a>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.navContainer}>
          <div>Desktop site</div>
          <div>Help</div>
          <div>Contact us</div>
          <div>Terms & conditions</div>
        </div>
        <div className={styles.infoContainer}>
          <div>© 2024 Trade Me Limited</div>
          <img
            className={styles.miniBrandLogo}
            src={darkLightMode}
            alt="Dark / Light mode toggle"
          />

          <img
            className={styles.miniBrandLogo}
            src={facebookF}
            alt="Facebook"
          />
          <img
            className={styles.miniBrandLogo}
            src={twitterLogo}
            alt="Twitter"
          />
        </div>
        <div className={styles.loginContainer}>
          <div>Register</div>
          <div>Log in</div>
        </div>
      </footer>

      {/* ---------- MODAL WINDOW ---------- */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalWindow}>
            <div className={styles.modalHeader}>
              <div className={styles.bold}>Place a bid</div>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                <span className={styles.blueText}>X</span>
              </button>
            </div>
            <div className={styles.listingInfoContainer}>
              <div className={styles.heroImage}>{listing.heroImage}</div>
              <div className={styles.listingInfo}>
                <div>{listing.seller.location}</div>
                <div>
                  Closes:
                  {new Date(
                    new Date(listing.createdAt).getTime() +
                      7 * 24 * 60 * 60 * 1000
                  ).toDateString()}
                </div>
                <div className={styles.bold}>{listing.title}</div>
                <div>No reserve, no bid</div>
                {/* PLACEHOLDER TEXT ADD DYNAMIC VALUES ^^^*/}
                <div className={styles.bold}>
                  ${listing.highestBid()?.amount}
                </div>
              </div>
            </div>
            <div className={styles.bidInputContainer}>
              <div className={styles.padding1}>Your bid</div>
              <input
                className={`${styles.bidInput} ${styles.padding1}`}
                type="text"
                value={bidAmount}
                onChange={handleBidChange}
              />
              <div className={styles.autoBidContainer}>
                <img
                  className={styles.miniBrandLogo}
                  src={toggleIcon}
                  alt="Auto-bid toggle"
                />
                Auto-bid <a>More info &#x25BC;</a>
              </div>
            </div>
            <div className={`${styles.bold} ${styles.padding1}`}>Shipping</div>
            <div className={styles.shippingInfoContainer}>
              <div className={styles.shippingOptions}>
                <input
                  className={styles.shippingRadio}
                  type="radio"
                  id="urban"
                  name="shippingOption"
                  value="11.30"
                />
                <label htmlFor="urban">
                  <div className={styles.shippingCostContainer}>
                    <div className={styles.shippingType}>
                      Nationwide (Urban)
                    </div>
                    <div className={styles.shippingCost}>$11.30</div>
                  </div>
                </label>
              </div>
              <div className={styles.shippingOptions}>
                <input
                  className={styles.shippingRadio}
                  type="radio"
                  id="rural"
                  name="shippingOption"
                  value="17.00"
                />
                <label htmlFor="rural">
                  <div className={styles.shippingCostContainer}>
                    <div>Nationwide (Rural)</div>
                    <div className={styles.shippingCost}>$17.00</div>
                  </div>
                </label>
              </div>
              <div className={styles.shippingOptions}>
                <input
                  className={styles.shippingRadio}
                  type="radio"
                  id="pickUp"
                  name="shippingOption"
                  value="0.00"
                />
                <label htmlFor="pickUp">
                  <div className={styles.shippingCostContainer}>
                    <div>Pick-up from seller</div>
                    <div className={styles.shippingCost}>Free</div>
                  </div>
                </label>
              </div>
              <div className={styles.sellerPaymentOptions}>
                <div className={`${styles.bold} ${styles.padding1}`}>
                  Seller accepts payment by
                </div>
                <div className={styles.sellerTransferPref}>
                  Ping, Afterpay, NZ Bank Deposit
                </div>
                {/* placeholder text*/}
                <div className={styles.buyerLegalReminder}>
                  If you win the auction, you are legally obligated to complete
                  your purchase
                </div>
              </div>
              <div className={styles.remindersContainer}>
                <div className={`${styles.bold} ${styles.padding1}`}>
                  Reminders
                </div>
                <div
                  className={`${styles.reminderCheckboxContainer} ${styles.padding1Bottom}`}
                >
                  <input type="checkbox" id="emailReminderCheckbox"></input>
                  <label htmlFor="emailReminderCheckbox">
                    Email me if I'm outbid
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.modalButtons}>
              <button className={`${styles.blue}`} onClick={handleSubmitBid}>
                Place bid
              </button>
              <button className={`${styles.white}`} onClick={handleCloseModal}>
                Go back to listing
              </button>
            </div>
          </div>
        </div>
      )}
      {isConfirmModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalWindow}>
            <div className={styles.modalHeader}>
              <div className={styles.bold}>Confirm your bid</div>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                <span className={styles.blueText}>X</span>
              </button>
            </div>
            <div className={styles.listingInfoContainer}>
              <div className={`${styles.heroImage} ${styles.heroImagePreview}`}>
                {listing.heroImage}
              </div>
              <div className={styles.listingInfo}>
                <div>{listing.seller.location}</div>
                <div>
                  Closes:{" "}
                  {new Date(
                    new Date(listing.createdAt).getTime() +
                      7 * 24 * 60 * 60 * 1000
                  ).toDateString()}
                </div>
                <div className={styles.bold}>{listing.title}</div>
                <div>No reserve, no bid</div>
                {/* PLACEHOLDER TEXT ADD DYNAMIC VALUES */}
                <div className={styles.bold}>
                  ${listing.highestBid()?.amount}
                </div>
              </div>
            </div>
            <div className={styles.bidValueConfirmation}>
              <div>Do you want to make a bid for</div>
              <div className={styles.bold}>${bidAmount}?</div>
              {/* ^^^^^ Need to add space between them ^^^^^ */}
            </div>
            <div className={styles.modalButtons}>
              <button className={`${styles.blue}`} onClick={handleConfirmBid}>
                Yes, place bid
              </button>
              <button className={`${styles.white}`} onClick={handleGoBack}>
                Go back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingPage;
