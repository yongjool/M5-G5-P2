const request = require('supertest');
const app = require('../src/api/server');

const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;

const runTestHelper = async (input, expectedStatus, expectedOutput) => {
    const response = await request(app).post(`/api/buy`).send(input);

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedOutput);
};

describe('Buy API', () => {
    test.todo('Successful Purchase');
    test.todo('Buy Sold Item');
    test.todo('Buy an Item Below the Current Bid');
    test.todo('Buy with Special Characters');
    test.todo('Database Connection Error Handling');
});
