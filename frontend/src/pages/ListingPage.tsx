import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { addDays, formatDistance } from "date-fns";
import styles from "./ListingPage.module.css";
import Header from "../components/Header/Header"
import Navbar from "../components/Navigation/Navbar";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ProductAtGlance from "../components/ProductAtGlance/ProductAtGlance";
import QuestionsAnswers from "../components/QuestionsAnswers/QuestionsAnswers";
import ListingCard from "../components/ListingCard/ListingCard";

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


// Define interfaces for Listing, user, Bid, and Breadcrumb
interface Breadcrumb {
  name: string;
  url: string;
}
export interface Listing {
  listingId: string;
  title: string;
  sellerName: string;
  sellerId: string;
  profilePic: string;
  totalRatings: number;
  sellerRating: number;
  location: string;
  pageviews: number;
  watchlistCount: number;
  images: string[];
  createdAt: Date;
  highestBid: number;
  reserveMet: boolean;
  oneDollarReserve: boolean;
  bids: Bid[];
  breadcrumbs: Breadcrumb[];
  // TODO: add description and startPrice
  // description: string;
  // startPrice: number;
}

interface User {
  id: string;
  name: string;
  createdAt: Date;
  profilePic: string;
  rating: number;
  totalRatings: number;
  location: string;
}

interface Bid {
  bidderName: string;
  bidAmount: number;
  bidTime: Date;
}

const ListingPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [bidAmount, setBidAmount] = useState<string>("");
  const [sellerListings, setSellerListings] = useState<Listing[]>([]);
  
  const { id } = useParams();
  const {data, isPending, isError} = useQuery({ queryKey: ["listing", id], queryFn: fetchListing });
  const sellerId = data?.sellerId;
  
  async function fetchListing(): Promise<Listing> {
    const res = await fetch(`http://127.0.0.1:4000/api/listing/${id}`)
    const data = await res.json();
    return parseListingDTO(data);
  }

async function fetchSellerListings(sellerId: string): Promise<Listing[]> {
  const res = await fetch(`http://127.0.0.1:4000/api/listing/seller/${sellerId}`);
  const sellerListings = await res.json();
  return sellerListings.map(parseListingDTO);
}

// DATA TRANSFER OBJECT (DTO) PARSING FUNCTION
function parseListingDTO(data: any): Listing {
  return {
    listingId: data.listingId,
    title: data.title,
    sellerName: data.sellerName,
    sellerId: data.sellerId,
    profilePic: data.profilePic,
    totalRatings: data.totalRatings,
    sellerRating: data.sellerRating,
    location: data.location,
    pageviews: data.pageviews,
    watchlistCount: data.watchlistCount,
    images: data.images,
    createdAt: new Date(data.createdAt),
    highestBid: data.highestBid,
    reserveMet: data.reserveMet,
    oneDollarReserve: data.oneDollarReserve,
    bids: data.bids,
    breadcrumbs: data.breadcrumbs,
  };
}

React.useEffect(() => {
  if (data) {
    fetchSellerListings(data.sellerId).then(setSellerListings);
    console.log(sellerListings);
  }
}, [data]);

  

  // Set the initial selected image when the component mounts
  React.useEffect(() => {
    if (data && data.images.length > 0) {
      setSelectedImage(data.images[0]);
    }
  }, [data]); 

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
  const handleBreadcrumbClick = (index: number, breadcrumbs: Breadcrumb[]) => {
    let path = "/";
    if (index > 0) {
      path += breadcrumbs
        .slice(1, index + 1)
        .map(breadcrumb => breadcrumb.name)
        .join("/")
        .replace(/\s+/g, "-");
    }
    navigate(path);
  };

  // Truncate breadcrumb names for display
  const truncateBreadcrumbs = (breadcrumbs: Breadcrumb[]) => {
    return breadcrumbs.map((breadcrumb, index) => {
      if (index === 0 || index === breadcrumbs.length - 1) {
        return breadcrumb;
      }
      return { ...breadcrumb, displayName: "..." };
    });
  };

if (isPending) return <div>Loading...</div>;
if (isError) return <div>Error</div>;

  return (
    <div className={styles.listingPage}>
      {/* Header */}
      <header className={styles.header}>
        <Header />
        <Navbar />
      </header>
      {/* Breadcrumbs */}
      <Breadcrumbs breadcrumbs={truncateBreadcrumbs(data.breadcrumbs)} onBreadcrumbClick={handleBreadcrumbClick} />
      {/* Listing Details */}
      <div className={styles.listingImageContainer}>
        <div className={styles.heroImageContainer}>
          {selectedImage && (
            <img className={styles.heroImage} src={selectedImage} alt="Hero" />
          )}
        </div>
        <div className={styles.imageCarousel}>
          {data?.images.map((image, index) => (
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
          <h1>{data?.title}</h1>
        </div>
      </div>
      {/* Bid Container */}
      <div className={styles.bidContainer}>
        <div className="inter-regular-12">Starting price</div>
        <h1>${data.highestBid}</h1>
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
      {/* Closing Info */}
      <div className={styles.closingInfoContainer}>
        <div className={styles.closingTime}>
          <img
            className={`${styles.clockImg} ${styles.miniBrandLogo}`}
            src={clockIcon}
            alt="Auction expiration date"
          />
          <div className="inter-regular-12">
            {`Closes: ${formatDistance(new Date(), addDays(data.createdAt, 7))}`}
          </div>
        </div>
        <button
          className={`inter-regular-16 ${styles.watchlistYellow} ${styles.watchlistBtn} ${styles.lrgBtn}`}
        >
          <img
            className={styles.miniBrandLogo}
            src={watchlistIcon}
            alt="Watchlist"
          />
          Add to Watchlist
        </button>
        <div className={`inter-regular-12 ${styles.watchlistCount}`}>
          {data.watchlistCount} others watchlisted
        </div>
      </div>
      {/* Seller Profile */}
      <div className={styles.sellerProfileContainer}>
        <div className={styles.sellerProfilePic}>
          <img src={data.profilePic} className={styles.borderRadius50} alt="seller profile pic" />
        </div>
        <div className={`inter-regular-12 ${styles.sellerProfileText}`}>
          <div>
            <a>
              {data.sellerName} ({data.totalRatings})
            </a>
          </div>
          <div>
            <span className={`${styles.blackText} ${styles.bold}`}>
              {data.sellerRating}
            </span>
            % positive feedback
          </div>
          <div>Seller located in {data.location}</div>
        </div>
      </div>
      {/* Product At Glance */}
      <div className={styles.productAtGlanceContainer}>
        <ProductAtGlance />
      </div>
      {/* Payment Options */}
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
      {/* Questions and Answers */}
      <QuestionsAnswers />
      {/* About Seller */}
      <div className={`inter-regular-14 ${styles.aboutSellerContainer}`}>
        <div className={styles.aboutSellerTitle}>
          <h2>About the seller</h2>
        </div>
        <div className={styles.sellerProfile}>
          <img src={data.profilePic} className={`${styles.smallPicture} ${styles.borderRadius50}`} alt="seller profile pic" />
          <div className="inter-bold-14">{data.sellerName}</div>
          <div>
            {data.sellerRating}% positive feedback (
            {data.totalRatings})
          </div>
        </div>
        <div className={styles.sellerLocationContainer}>
          <div className={styles.locationText}>Location</div>
          <div className={styles.sellerLocation}>{data.location}</div>
        </div>
        <hr />
        <div className={styles.sellerMemberSince}>
          <div className={styles.memberSinceText}>Member since</div>
          <div className={styles.sellerCreatedAt}>
            {data.createdAt.toDateString()}
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
            className={`inter-regular-16 ${styles.blue} ${styles.favouriteSellerBtn} ${styles.lrgBtn}`}
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
      {/* Share Container */}
      <div className={`inter-regular-14 ${styles.shareContainer}`}>
        <a className={styles.shareLink}>
          <img className={styles.miniBrandLogo} src={shareNodes} alt="Share" />
          <div className={styles.shareLinkText}>Share this listing</div>
        </a>
        <div className={styles.pageViews}>Page views: {data.pageviews}</div>
        <div className={styles.listingId}>Listing #{data.listingId}</div>
        <div className={styles.communityWatch}>
          <img
            className={styles.miniBrandLogo}
            src={communityWatchStar}
            alt="Community Watch"
          />
          Community Watch: <a>Report this listing</a>
        </div>
      </div>
      {/* Other Listings */}
      <div className={styles.otherListings}>
        <div className={styles.otherListingsTitleContainer}>
          <h2>Seller's other listings</h2>
          <div className={`inter-regular-16 ${styles.otherListingsCount}`}>
            <a>View All ({sellerListings.length})</a>
          </div>
        </div>
        <div className={styles.otherListingsCarousel}>
          {sellerListings.map((listing) => (
            <ListingCard listing={listing} key={listing.listingId} />
          ))}
        </div>
      </div>
      {/* Upgrade Notice */}
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
            alt="Comment speech bubble"
          />
          <a>Tell us what you think</a>
        </div>
      </div>
      {/* Footer */}
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
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <div className={`${styles.blackText} ${styles.bold}`}>
                <h1>Place a bid</h1>
              </div>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                <span className={styles.blueText}>X</span>
              </button>
            </div>
            {/* Listing Info */}
            <div className={styles.listingInfoContainer}>
              <div className={styles.heroImagePreview}>
                <img src={data.images[0]} />
              </div>
              <div className={`${styles.listingInfo} inter-regular-12`}>
                <div>{data.location}</div>
                <div>
                  {`Closes: ${formatDistance(new Date(), addDays(data.createdAt, 7))}`}
                </div>
                <div className={`${styles.blackText} ${styles.bold}`}>
                  {data.title}
                </div>
                <div>No reserve, no bid</div>
                {/* PLACEHOLDER TEXT ADD DYNAMIC VALUES ^^^*/}
                <div className={`${styles.blackText} ${styles.bold}`}>
                  ${data.highestBid}
                </div>
              </div>
            </div>
            {/* Bid Input */}
            <div className={`${styles.bidInputContainer} inter-regular-16`}>
              <div className={`${styles.padding1} ${styles.bold}`}>
                Your bid
              </div>
              <input
                className={styles.bidInput}
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
            {/* Shipping Info */}
            <div className={`${styles.bold} ${styles.padding1Left}`}>
              Shipping
            </div>
            <div className={`${styles.shippingInfoContainer} inter-regular-16`}>
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
                <div className="inter-regular-12">
                  If you win, you are legally obligated to complete your
                  purchase
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
            {/* Modal Buttons */}
            <div className={styles.modalButtons}>
              <button className={`${styles.blue} ${styles.lrgBtn}`} onClick={handleSubmitBid}>
                Place bid
              </button>
              <button className={`${styles.white} ${styles.lrgBtn}`} onClick={handleCloseModal}>
                Go back to listing
              </button>
            </div>
          </div>
        </div>
      )}
      {isConfirmModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalWindow}>
            {/* Confirm Modal Header */}
            <div className={styles.modalHeader}>
              <div className={`${styles.bold} ${styles.blackText}`}>
                Confirm your bid
              </div>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                <span className={styles.blueText}>X</span>
              </button>
            </div>
            {/* Confirm Listing Info */}
            <div className={styles.listingInfoContainer}>
              <div className={`${styles.heroImage} ${styles.heroImagePreview}`}>
                <img src={data.images[0]} />
              </div>
              <div className={`${styles.listingInfo} inter-regular-12`}>
                <div>{data.location}</div>
                <div>
                  {`Closes: ${formatDistance(new Date(), addDays(data.createdAt, 7))}`}
                </div>
                <div className={`${styles.bold} ${styles.blackText}`}>
                  {data.title}
                </div>
                <div>No reserve, no bid</div>
                {/* PLACEHOLDER TEXT ADD DYNAMIC VALUES */}
                <div className={`${styles.bold} ${styles.blackText}`}>
                  ${data.highestBid}
                </div>
              </div>
            </div>
            {/* Confirm Bid Value */}
            <div className={styles.bidValueConfirmation}>
              <div className={styles.blackText}>
                Do you want to make a bid for
              </div>
              <div className={`${styles.bold} ${styles.blackText}`}>
                &nbsp;${bidAmount}?
              </div>
            </div>
            {/* Confirm Modal Buttons */}
            <div className={styles.modalButtons}>
              <button className={`${styles.blue} ${styles.lrgBtn}`} onClick={handleConfirmBid}>
                Yes, place bid
              </button>
              <button className={`${styles.white} ${styles.lrgBtn}`} onClick={handleGoBack}>
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
