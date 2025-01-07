const request = require('supertest');
const app = require('../src/api/server');

const Product = require('../src/api/models/product.js'); // Import Product model

const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const connectDB = require('../src/api/config/db.js');

const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;
const STATUS_NOT_FOUND = 404;

// MongoMemoryServer instance
let mongoServer;
let products;

beforeAll(async () => {
    // Create an in-memory MongoDB instance
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri(); // Get the in-memory DB URI

    // Connect Mongoose to the in-memory MongoDB instance
    await connectDB(mongoUri);

    // Insert mock data for the tests
    const mockProducts = [
        {
            title: 'Laptop',
            description: 'A powerful laptop',
            start_price: 1000,
            current_bid: 1200,
            sold: false,

            location: 'Auckland',
            date: 'Fri, 15 Nov',
            closing: false,
            reserve: false,
            onedollar: false,
            favourite: false,
            price_detail: 'Price by negotiation',
            picture_path: 'none',
        },
        {
            title: 'Smartphone',
            description: 'A new smartphone',
            start_price: 500,
            current_bid: 600,
            sold: true,

            location: 'Auckland',
            date: 'Fri, 15 Nov',
            closing: false,
            reserve: false,
            onedollar: false,
            favourite: false,
            price_detail: 'Price by negotiation',
            picture_path: 'none',
        },
    ];

    await Product.insertMany(mockProducts);

    products = await Product.find(); //to get _id
});

afterAll(async () => {
    // Close the Mongoose connection and stop the in-memory MongoDB instance
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('Post  /bid', () => {
    test('Place a Valid Bid', async () => {
        const response = await request(app).post('/api/bid').send({
            _id: products[0]._id,
            new_bid: 1500,
        });

        expect(response.status).toBe(STATUS_OK);
        expect(response.body.message).toBe('Bid placed successfully.');

        const updated = await Product.find();

        expect(updated[0].current_bid).toBe(1500);
    });

    test('Bid Below Current Bid', async () => {
        const response = await request(app).post('/api/bid').send({
            _id: products[0]._id,
            new_bid: 150,
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe(
            'Bid amount must be higher than the current price.',
        );
    });

    test('Bid on a Sold Item', async () => {
        const response = await request(app).post('/api/bid').send({
            _id: products[1]._id,
            new_bid: 150,
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe('Product is already sold.');
    });

    test('Bid with String', async () => {
        const response = await request(app).post('/api/bid').send({
            _id: products[1]._id,
            new_bid: 'hundred dollars',
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe('Invalid bid amount.');
    });

    test('Bid with negative', async () => {
        const response = await request(app).post('/api/bid').send({
            _id: products[1]._id,
            new_bid: -100,
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe('Invalid bid amount.');
    });

    test('Bid is not provided.', async () => {
        const response = await request(app).post('/api/bid').send({
            _id: products[1]._id,
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe(
            'Product ID and bid amount are required.',
        );
    });

    test('Product ID is not provided.', async () => {
        const response = await request(app).post('/api/bid').send({
            new_bid: 150,
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe('Invalid id.');
    });

    test('Bid with Special Characters', async () => {
        const response = await request(app).post('/api/bid').send({
            _id: '<script>alert(1)</script>',
            new_bid: 150,
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe(
            'Invalid id. Special characters are not allowed.',
        );
    });

    test('Place a Bid on Item That Does Not Exist', async () => {
        const response = await request(app).post('/api/bid').send({
            _id: '60b1b4b3b3b3b3b3b3b3b3b3',
            new_bid: 150,
        });

        expect(response.status).toBe(STATUS_NOT_FOUND);
        expect(response.body.error).toBe('Product not found.');
    });
});
