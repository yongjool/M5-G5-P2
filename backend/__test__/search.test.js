const request = require('supertest');
const app = require('../src/api/server');

const Product = require('../src/api/models/product.js'); // Import Product model

const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const connectDB = require('../src/api/config/db.js');

const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;

// MongoMemoryServer instance
let mongoServer;

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
        },
        {
            title: 'Smartphone',
            description: 'A new smartphone',
            start_price: 500,
            current_bid: 600,
        },
    ];

    await Product.insertMany(mockProducts);
});

afterAll(async () => {
    // Close the Mongoose connection and stop the in-memory MongoDB instance
    await mongoose.disconnect();
    await mongoServer.stop();
});

describe('GET  /search', () => {
    test('should return products matching the search query', async () => {
        const input = { query: 'laptop' };
        const response = await request(app).get(`/api/search`).query(input);

        expect(response.status).toBe(STATUS_OK);
        expect(response.body.products).toHaveLength(1); // One product should match the query 'laptop'
        expect(response.body.products[0].title).toBe('Laptop');
    });

    test('Empty Search Query return whole list', async () => {
        const input = { query: '' };
        const response = await request(app).get(`/api/search`).query(input);

        expect(response.status).toBe(STATUS_OK);
        expect(response.body.products).toHaveLength(2); // One product should match the query 'laptop'
        expect(response.body.products[0].title).toBe('Laptop');
        expect(response.body.products[1].title).toBe('Smartphone');
    });

    test('null Search Query return whole list', async () => {
        const input = { query: null };
        const response = await request(app).get(`/api/search`).query(input);

        expect(response.status).toBe(STATUS_OK);
        expect(response.body.products).toHaveLength(2); // One product should match the query 'laptop'
        expect(response.body.products[0].title).toBe('Laptop');
        expect(response.body.products[1].title).toBe('Smartphone');
    });

    test('No Search Query', async () => {
        const input = {};
        const response = await request(app).get(`/api/search`).query(input);

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe('Invalid search query');
    });

    test('Case Insensitive Search', async () => {
        const input = { query: 'LApToP' };
        const response = await request(app).get(`/api/search`).query(input);

        expect(response.status).toBe(STATUS_OK);
        expect(response.body.products).toHaveLength(1); // One product should match the query 'laptop'
        expect(response.body.products[0].title).toBe('Laptop');
    });

    test('Partial Match Search', async () => {
        const input = { query: 'top' };
        const response = await request(app).get(`/api/search`).query(input);

        expect(response.status).toBe(STATUS_OK);
        expect(response.body.products).toHaveLength(1); // One product should match the query 'laptop'
        expect(response.body.products[0].title).toBe('Laptop');
    });

    test('No Matching Results', async () => {
        const input = { query: 'hahaha' };
        const response = await request(app).get(`/api/search`).query(input);

        expect(response.status).toBe(STATUS_OK);
        expect(response.body.products).toHaveLength(0); // One product should match the query 'laptop'
    });

    test('Invalid Search Query - special characters', async () => {
        const input = {
            query: "<script>alert('test')</script>Laptop&price=1000#sale",
        };
        const response = await request(app).get(`/api/search`).query(input);

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe(
            'Invalid query. Special characters are not allowed.',
        );
    });

    test('Invalid Search Query - Invalid Query Parameter Format', async () => {
        const input = { product: 'laptop' };
        const response = await request(app).get(`/api/search`).query(input);

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe('Invalid search query');
    });

    test('Invalid Search Query - too long', async () => {
        const longQuery = 'a'.repeat(1001); // 1001 characters long query
        const input = { query: longQuery };
        const response = await request(app).get(`/api/search`).query(input);

        expect(response.status).toBe(STATUS_BAD_REQUEST);
        expect(response.body.error).toBe(
            'Query string is too long. Maximum length is 1000 characters.',
        );
    });
});
