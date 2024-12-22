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
        },
        {
            title: 'Smartphone',
            description: 'A new smartphone',
            start_price: 500,
            current_bid: 600,
            sold: true,
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

describe('Post /buy', () => {
    test('Buy Sold Item', async () => {
        const response = await request(app).post('/api/buy').send({
            _id: products[1]._id,
            payment: 1500,
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe('This item has already been sold.');
    });

    test('Bid with String', async () => {
        const response = await request(app).post('/api/buy').send({
            _id: products[1]._id,
            payment: 'hundred dollars',
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe('Invalid payment.');
    });

    test('Buy with negative', async () => {
        const response = await request(app).post('/api/buy').send({
            _id: products[1]._id,
            payment: -100,
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe('Invalid payment.');
    });

    test('payment is not provided.', async () => {
        const response = await request(app).post('/api/buy').send({
            _id: products[1]._id,
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe('Invalid payment.');
    });

    test('Buy an Item Below the Current Bid', async () => {
        const response = await request(app).post('/api/buy').send({
            _id: products[0]._id,
            payment: 150,
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe(
            'Your payment is lower than the current bid.',
        );
    });

    test('Buy with Special Characters', async () => {
        const response = await request(app).post('/api/buy').send({
            _id: '<script>alert(1)</script>',
            payment: 150,
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe(
            'Invalid id. Special characters are not allowed.',
        );
    });

    test('Buy Item That Does Not Exist', async () => {
        const response = await request(app).post('/api/buy').send({
            _id: '60b1b4b3b3b3b3b3b3b3b3b3',
            payment: 150,
        });

        expect(response.status).toBe(STATUS_NOT_FOUND);
        expect(response.body.error).toBe('Product not found.');
    });

    test('Product ID is not provided.', async () => {
        const response = await request(app).post('/api/buy').send({
            payment: 150,
        });

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe('Invalid id.');
    });

    test('Successful Purchase', async () => {
        const response = await request(app).post('/api/buy').send({
            _id: products[0]._id,
            payment: 1500,
        });

        expect(response.status).toBe(STATUS_OK);
        expect(response.body.message).toBe('Purchase successful.');

        const updated = await Product.find();

        expect(updated[0].sold).toBe(true);
    });
});
