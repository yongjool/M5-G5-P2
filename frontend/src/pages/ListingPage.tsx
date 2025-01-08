import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ListingPage.module.css";
import Header from "../components/Header/Header";
import Navbar from "../components/Navigation/Navbar";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductAtGlance from "../components/ProductAtGlance/ProductAtGlance";
import QuestionsAnswers from "../components/QuestionsAnswers/QuestionsAnswers";

// assets
import pingLogo from "../assets/ping1.svg";
import afterpayLogo from "../assets/afterpay.svg";
import facebookF from "../assets/facebookF.svg";
import darkLightMode from "../assets/darkMode.svg";
import twitterLogo from "../assets/twitterLogo.svg";
import commentBubble from "../assets/messageSquare.svg";
import infoCircle from "../assets/infoCircle.svg";
import shareNodes from "../assets/shareNodes.svg";
import communityWatchStar from "../assets/communityWatchStar.svg";
import favouriteIcon from "../assets/heartPlus.svg";
import watchlistIcon from "../assets/watchlistBtnBinoculars.svg";
import clockIcon from "../assets/clock.svg";
import toggleIcon from "../assets/toggleOffOn.svg";
import arrow from "../assets/arrow.svg";
import downArrow from "../assets/downArrow.svg";

// Define interfaces for Listing, user, and Bid
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

// Sample bid data
const bid: Bid = {
  amount: 100,
  bidderName: "TradeMeGuy7",
  placedAt: new Date(),
  id: "1234567890",
  listingId: "1234567890",
};

// Sample listing data
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
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [bidAmount, setBidAmount] = useState<string>("");

  // Set the initial selected image when the component mounts
  React.useEffect(() => {
    if (listing.images && listing.images.length > 0) {
      setSelectedImage(listing.images[0]);
    }
  }, [listing.images]); // eslint-disable-line react-hooks/exhaustive-deps
  // TODO: FIX disabled warning: React Hook useEffect has a missing dependency: 'listing.images'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

  // Handle image click to change the selected image
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  // Open the bid modal
  const handlePlaceBid = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsConfirmModalOpen(false);
  };

  // Handle bid amount change
  const handleBidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBidAmount(event.target.value);
  };

  // Submit the bid and open the confirmation modal
  const handleSubmitBid = () => {
    setIsModalOpen(false);
    setIsConfirmModalOpen(true);
  };

  // Confirm the bid
  const handleConfirmBid = () => {
    // Logic to submit the bid
    setIsConfirmModalOpen(false);
  };

  // Go back to the bid modal from the confirmation modal
  const handleGoBack = () => {
    setIsConfirmModalOpen(false);
    setIsModalOpen(true);
  };

  // Handle buy now action
  const handleBuyNow = () => {
    navigate("/payment");
  };

  // Handle make offer action
  const handleMakeOffer = () => {
    // TODO: set up logic for making an offer;
  };

  // Handle breadcrumb click to navigate to the selected breadcrumb
  const handleBreadcrumbClick = (index: number, breadcrumbs: string[]) => {
    let path = "/";
    if (index > 0) {
      path += breadcrumbs
        .slice(1, index + 1)
        .join("/")
        .replace(/\s+/g, "-");
    }
    navigate(path);
  };

  return (
    <div className={styles.listingPage}>
      <header className={styles.header}>
        <Header />
        <Navbar />
      </header>
      <Breadcrumbs onBreadcrumbClick={handleBreadcrumbClick} />
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
        <div className={styles.listingTitle}>
          <h1>{listing.title}</h1>
        </div>
      </div>
      <div className={styles.bidContainer}>
        <div className="inter-regular-12">Starting price</div>
        <h1>${listing.highestBid()?.amount}</h1>
        <button
          className={`inter-regular-16 ${styles.blue} ${styles.lrgBtn} `}
          onClick={handlePlaceBid}
        >
          Place bid
        </button>
        <button
          className={`inter-regular-16 ${styles.blue} ${styles.lrgBtn}`}
          onClick={handleBuyNow}
        >
          Buy now
        </button>
        <button
          className={`inter-regular-16 ${styles.offWhite} ${styles.lrgBtn}`}
          onClick={handleMakeOffer}
        >
          Make offer
        </button>
        <div className={`inter-regular-12 ${styles.reserveInfoContainer}`}>
          <div>No reserve</div>
          <div>No bids</div>
        </div>
      </div>

      <div className={styles.closingInfoContainer}>
        <div className={styles.closingTime}>
          <img
            className={`${styles.clockImg} ${styles.miniBrandLogo}`}
            src={clockIcon}
            alt="Acution exporation date"
          />
          <div className="inter-regular-12">
            Closes: 11 hrs <br />
            Wed 18 Dec, 8:30pm
          </div>
        </div>
        <button
          className={`inter-regular-16 ${styles.watchlistYellow} ${styles.watchlistBtn}`}
        >
          <img
            className={styles.miniBrandLogo}
            src={watchlistIcon}
            alt="Watchlist"
          />
          Add to Watchlist
        </button>
        <div className={`inter-regular-12 ${styles.watchlistCount}`}>
          {listing.watchlistCount} others watchlisted
        </div>
      </div>
      <div className={styles.sellerProfileContainer}>
        <div className={styles.sellerProfilePic}>
          <img src={listing.seller.profilePic} alt="seller profile pic" />
        </div>
        <div className={`inter-regular-12 ${styles.sellerProfileText}`}>
          <div>
            <a>
              {listing.seller.name} ({listing.seller.totalRatings})
            </a>
          </div>
          <div>
            <span className={`${styles.blackText} ${styles.bold}`}>
              {listing.seller.rating}
            </span>
            % positive feedback
          </div>
          <div>Seller located in {listing.seller.location}</div>
        </div>
      </div>
      <div className={styles.productAtGlanceContainer}>
        <ProductAtGlance />
      </div>
      <div className={`inter-regular-14 ${styles.paymentOptions}`}>
        <h2>Payment Options</h2>
        <div className={styles.pingContainer}>
          <img
            className={`${styles.miniBrandLogo} ${styles.paymentLogo}`}
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
            className={`${styles.miniBrandLogo} ${styles.paymentLogo}`}
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
          <div className="inter-bold-16">Other options</div>
          <div>Cash, NZ Bank Deposit.</div>
        </div>
      </div>
      <QuestionsAnswers />
      <div className={`inter-regular-14 ${styles.aboutSellerContainer}`}>
        <div className={styles.aboutSellerTitle}>
          <h2>About the seller</h2>
        </div>
        <div className={styles.sellerProfile}>
          <div>{listing.seller.profilePic}</div>
          <div className="inter-bold-14">{listing.seller.name}</div>
          <div>
            {listing.seller.rating}% positive feedback (
            {listing.seller.totalRatings})
          </div>
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
          <div className={styles.dropDownArrow}>
            <img src={arrow} alt="Drop down arrow" />
          </div>
        </a>

        <hr />
        <div className={styles.favouriteSellerContainer}>
          <button
            className={`inter-regular-16 ${styles.blue} ${styles.favouriteSellerBtn}`}
          >
            <img
              className={styles.miniBrandLogo}
              src={favouriteIcon}
              alt="Favourite"
            />
            Add to Favourite Sellers
          </button>
        </div>
        <div className={styles.safeBuyingAdvice}>
          <a>Read our safe buying advice</a>
        </div>
      </div>
      <div className={`inter-regular-14 ${styles.shareContainer}`}>
        <a className={styles.shareLink}>
          <img className={styles.miniBrandLogo} src={shareNodes} alt="Share" />
          <div className={styles.shareLinkText}>Share this listing</div>
        </a>
        <div className={styles.pageViews}>Page views: {listing.viewCount}</div>
        <div className={styles.listingId}>Listing #{listing.id}</div>
        <div className={styles.communityWatch}>
          <img
            className={styles.miniBrandLogo}
            src={communityWatchStar}
            alt="Community Watch"
          />
          Community Watch: <a>Report this listing</a>
        </div>
      </div>

      <div className={styles.otherListings}>
        <div className={styles.otherListingsTitleContainer}>
          <h2>Seller's other listings</h2>
          <div className={`inter-regular-16 ${styles.otherListingsCount}`}>
            <a>View All (X)</a>
          </div>
        </div>
        <div className={styles.otherListingsCarousel}>
          {/* TODO: add other listing card carousel where the listing hero image is 75% vertical height of the card and the bottom 25% has sone listing details like the location, listed: date, title and starting price  */}
        </div>
      </div>
      <div className={`inter-regular-12 ${styles.upgradeNotice}`}>
        We're upgrading some of our systems.
        <div className={styles.informationContainer}>
          <img
            className={styles.xSmallLogo}
            src={infoCircle}
            alt="Info circle"
          />

          <a>Learn more</a>
        </div>
        <div className={styles.commentContainer}>
          <img
            className={styles.xSmallLogo}
            src={commentBubble}
            alt="Comment speach bubble"
          />

          <a>Tell us what you think</a>
        </div>
      </div>
      <div className={`inter-regular-12 ${styles.footer}`}>
        <div className={styles.navContainer}>
          <div>Desktop site</div>
          <div>Help</div>
          <div>Contact us</div>
          <div>Terms & conditions</div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.copyrightText}>
            © 2024 Trade Me <br />
            Limited
          </div>
          <img
            className={styles.darkLightMode}
            src={darkLightMode}
            alt="Dark / Light mode toggle"
          />
          <div className={styles.socialMediaContainer}>
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
        </div>
        <div className={styles.loginContainer}>
          <div>Register</div>
          <div>Log in</div>
        </div>
      </div>

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
                Auto-bid{" "}
                <a className={styles.autoBidInfo}>
                  More info <img src={downArrow} alt="down arrow" />
                </a>
              </div>
            </div>
            <div className={`${styles.bold} ${styles.padding1Left}`}>
              Shipping
            </div>
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
