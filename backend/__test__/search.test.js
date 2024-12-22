const request = require('supertest');
const app = require('../src/api/server');

const Product = require('../src/api/models/product.js'); // Import Product model

const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;

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

    test.todo('Empty Search Query');
    test.todo('Case Insensitive Search');
    test.todo('Partial Match Search');
    test.todo('No Matching Results');
    test.todo('Invalid Search Query');
    test.todo('Database Connection Error Handling');
    test.todo('Search with Special Characters');
});
