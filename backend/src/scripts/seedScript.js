require('dotenv').config();
const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;

// List of New Zealand cities and their respective regions
const newZealandLocations = [
    { city: "Auckland", region: "Auckland" },
    { city: "Wellington", region: "Wellington" },
    { city: "Christchurch", region: "Canterbury" },
    { city: "Hamilton", region: "Waikato" },
    { city: "Tauranga", region: "Bay of Plenty" },
    { city: "Dunedin", region: "Otago" },
    { city: "Palmerston North", region: "Manawatu-Whanganui" },
    { city: "Nelson", region: "Nelson" },
    { city: "Rotorua", region: "Bay of Plenty" },
    { city: "New Plymouth", region: "Taranaki" },
    { city: "Whangarei", region: "Northland" },
    { city: "Invercargill", region: "Southland" },
    { city: "Napier", region: "Hawke's Bay" },
    { city: "Hastings", region: "Hawke's Bay" },
    { city: "Gisborne", region: "Gisborne" },
    { city: "Queenstown", region: "Otago" },
    { city: "Timaru", region: "Canterbury" },
    { city: "Taupo", region: "Waikato" },
    { city: "Whakatane", region: "Bay of Plenty" },
    { city: "Blenheim", region: "Marlborough" },
    { city: "Levin", region: "Manawatu-Whanganui" },
    { city: "Masterton", region: "Wairarapa" },
    { city: "Greymouth", region: "West Coast" },
    { city: "Ashburton", region: "Canterbury" },
    { city: "Cambridge", region: "Waikato" },
    { city: "Te Awamutu", region: "Waikato" },
    { city: "Kerikeri", region: "Northland" },
    { city: "Feilding", region: "Manawatu-Whanganui" },
    { city: "Cromwell", region: "Otago" },
    { city: "Kaikoura", region: "Canterbury" },
    { city: "Oamaru", region: "Otago" },
    { city: "Wanaka", region: "Otago" },
    { city: "Westport", region: "West Coast" },
    { city: "Waihi", region: "Waikato" },
    { city: "Matamata", region: "Waikato" },
    { city: "Opotiki", region: "Bay of Plenty" },
];

async function seedDB() {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const collection = client.db("app").collection("listings");

        // Clear the collection
        await collection.drop().catch(() => console.log("Collection does not exist, skipping drop"));

        let listingData = [];
        let sellers = [];

        // Create a fixed number of sellers
        for (let i = 0; i < 500; i++) {
            const sellerName = faker.person.firstName() + " " + faker.person.lastName();
            const profilePic = faker.image.avatar();
            const totalRatings = faker.number.int({ min: 1, max: 10000 });
            const sellerRating = faker.number.float({
                min: 50.0,
                max: 100.0,
                precision: 0.01,
            });

            // Randomly select a New Zealand city
            const location = faker.helpers.arrayElement(newZealandLocations).city + ", " + faker.helpers.arrayElement(newZealandLocations).region;

            // Store seller details
            sellers.push({ sellerName, profilePic, totalRatings, sellerRating, location });
        }

let listingIdCounter = 1; // Start a counter for unique listing IDs

sellers.forEach((seller) => {
    const numberOfListings = faker.number.int({ min: 1, max: 10 });

    for (let i = 0; i < numberOfListings; i++) {
        const title = faker.commerce.productName();
        const pageviews = faker.number.int({ min: 1, max: 5000 });
        const watchlistCount = faker.number.int({ min: 1, max: 200 });
        const images = [faker.image.url(), faker.image.url(), faker.image.url()];
        const createdAt = faker.date.recent();
        const reserveMet = faker.datatype.boolean();
        const oneDollarReserve = faker.datatype.boolean();

        const bids = [];
        const bidCount = faker.number.int({ min: 0, max: 4 });
        let lastBidAmount = 0;

        for (let j = 0; j < bidCount; j++) {
            const bidAmount = lastBidAmount + faker.number.int({ min: 1, max: 50 });
            lastBidAmount = bidAmount;

            bids.push({
                bidderName: faker.person.fullName(),
                bidAmount,
                bidTime: faker.date.past(),
            });
        }

        const highestBid = bids.length > 0
            ? Math.max(...bids.map(bid => bid.bidAmount))
            : 0;

        listingData.push({
            listingId: listingIdCounter++, // Add a unique listingId
            title,
            sellerName: seller.sellerName,
            profilePic: seller.profilePic,
            totalRatings: seller.totalRatings,
            sellerRating: seller.sellerRating,
            location: seller.location,
            pageviews,
            watchlistCount,
            images,
            createdAt,
            highestBid,
            reserveMet,
            oneDollarReserve,
            bids,
        });
    }
});

        await collection.insertMany(listingData);

        console.log("Database seeded! :)");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();
