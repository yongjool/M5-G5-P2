/* mySeedScript.js */

// require the necessary libraries
const faker = require("faker");
const MongoClient = require("mongodb").MongoClient;

async function seedDB() {
    // Connection URL
    const uri = process.env("MONGO_URI")

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    });

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const collection = client.db("iot").collection("Listing");

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        collection.drop();

        // make a bunch of time series data
        let listingData = [];

        title: string;
        seller: user;
        pageViews: number;
        id: string;


        for (let i = 0; i < 5000; i++) {
            const title =  faker.commerce.productName();
            const seller =faker.name.firstName() + faker.name.lastName();
            const pageviews = faker.number.int();
            const  watchlistCount= faker.number.int();
            const viewCount = faker.number.int();
            const images = [faker.image.url(), faker.image.url(), faker.image.url()]
            const createdAt = faker.date.recent();
            listingData.push({title, seller, pageviews, watchlistCount, viewCount, images})
        }
        collection.insertMany(listingData);

        console.log("Database seeded! :)");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();