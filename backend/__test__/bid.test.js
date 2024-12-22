const request = require('supertest');
const app = require('../src/api/server');

const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;

const runTestHelper = async (input, expectedStatus, expectedOutput) => {
    const response = await request(app).post(`/api/bid`).send(input);

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedOutput);
};

describe('Bid API', () => {
    test.todo('Place a Valid Bid');
    test.todo('Bid Below Current Bid');
    test.todo('Bid on a Sold Item');
    test.todo('Bid with Special Characters');
    test.todo('Place a Bid on Item That Does Not Exist');
    test.todo('Database Connection Error Handling');
});
