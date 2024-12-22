const request = require('supertest');
const app = require('../src/api/server');

const Product = require('../src/api/models/product.js'); // Import Product model

const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;
const STATUS_INTERNAL_SERVER_ERROR = 500;

// MongoMemoryServer instance
let mongoServer;

// Connect to in-memory MongoDB before running tests
beforeAll(async () => {
    // Create an instance of the MongoMemoryServer
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri(); // Get the URI for the in-memory server

    // Connect Mongoose to the in-memory MongoDB
    await mongoose.connect(mongoUri);

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
    await Product.insertMany(mockProducts); // Insert mock products into the in-memory database
});

// Close the connection after all tests are done
afterAll(async () => {
    await mongoose.connection.dropDatabase(); // Optional: Drop the database after tests
    await mongoose.connection.close(); // Close the connection
    await mongoServer.stop(); // Stop the in-memory MongoDB server
});

const runTestHelper = async (input, expectedStatus, expectedOutput) => {
    const queryString = new URLSearchParams(input).toString();
    const response = await request(app).get(`/api/search?${queryString}`);

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedOutput);
};

describe('GET  /search', () => {
    test('should return products matching the search query', async () => {
        const input = { query: 'laptop' };
        const expectedOutput = [
            {
                title: 'laptop',
            },
        ];
        const expectedStatus = STATUS_OK;

        await runTestHelper(input, expectedStatus, expectedOutput);
    });

    test('Empty Search Query return whole list', async () => {
        const input = { query: '' };
        const expectedOutput = [];
        const expectedStatus = STATUS_OK;

        await runTestHelper(input, expectedStatus, expectedOutput);
    });

    test('No Search Query return whole list', async () => {
        const input = {};
        const expectedOutput = [];
        const expectedStatus = STATUS_OK;

        await runTestHelper(input, expectedStatus, expectedOutput);
    });

    test('Case Insensitive Search', async () => {
        const input = { query: 'LApToP' };
        const expectedOutput = [
            {
                title: 'laptop',
            },
        ];
        const expectedStatus = STATUS_OK;

        await runTestHelper(input, expectedStatus, expectedOutput);
    });

    test('Partial Match Search', async () => {
        const input = { query: 'top' };
        const expectedOutput = [];
        const expectedStatus = STATUS_BAD_REQUEST;

        await runTestHelper(input, expectedStatus, expectedOutput);
    });

    test('No Matching Results', async () => {
        const input = { query: 'hahaha' };
        const expectedOutput = [];
        const expectedStatus = STATUS_OK;

        await runTestHelper(input, expectedStatus, expectedOutput);
    });

    test('Invalid Search Query - null', async () => {
        const input = { query: 'null' };
        const expectedOutput = {
            error: 'Invalid query value - query value is null',
        };
        const expectedStatus = STATUS_BAD_REQUEST;

        await runTestHelper(input, expectedStatus, expectedOutput);
    });

    test('Invalid Search Query - special characters', async () => {
        const input = { query: "<script>alert('test')</script>" };
        const expectedOutput = {
            error: 'Invalid query value - query value contains special characters',
        };
        const expectedStatus = STATUS_BAD_REQUEST;

        await runTestHelper(input, expectedStatus, expectedOutput);
    });

    test('Invalid Search Query - Invalid Query Parameter Format', async () => {
        const input = { product: 'laptop' };
        const expectedOutput = {
            error: 'Invalid query value - query value is missing',
        };
        const expectedStatus = STATUS_BAD_REQUEST;

        await runTestHelper(input, expectedStatus, expectedOutput);
    });

    test('Invalid Search Query - too long', async () => {
        const longQuery = 'a'.repeat(1001); // 1001 characters long query
        const input = { query: longQuery };
        const expectedOutput = {
            error: 'Invalid query value - query value is too long',
        };
        const expectedStatus = STATUS_BAD_REQUEST;

        await runTestHelper(input, expectedStatus, expectedOutput);
    });

    test('Database Connection Error Handling', async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();

        const input = { query: 'laptop' };
        const expectedOutput = {
            error: 'Cannot connect to the database',
        };
        const expectedStatus = STATUS_INTERNAL_SERVER_ERROR;

        await runTestHelper(input, expectedStatus, expectedOutput);
    });
});
