require('dotenv').config();

// require the necessary libraries
const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;

async function seedDB() {
    require('dotenv').config();
    // Connection URL
    const uri = process.env.MONGO_URI

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const collection = client.db("app").collection("listings");

        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        collection.drop();

        // make a bunch of time series data
        let listingData = [];


        for (let i = 0; i < 5000; i++) {
            const title =  faker.commerce.productName();
            const seller =faker.person.firstName() + " " + faker.person.lastName();
            const pageviews = faker.number.int();
            const  watchlistCount= faker.number.int();
            const viewCount = faker.number.int();
            const images = [faker.image.url(), faker.image.url(), faker.image.url()]
            const createdAt = faker.date.recent();
            listingData.push({title, seller, pageviews, watchlistCount, viewCount, images, createdAt})
        }
        await collection.insertMany(listingData);

        console.log("Database seeded! :)");
        client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();