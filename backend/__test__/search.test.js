const request = require('supertest');
const app = require('../src/api/server');

const STATUS_OK = 200;
const STATUS_BAD_REQUEST = 400;

const runTestHelper = async (input, expectedStatus, expectedOutput) => {
    const queryString = new URLSearchParams(input).toString();
    const response = await request(app).get(`/api/search?${queryString}`);

    expect(response.status).toBe(expectedStatus);
    expect(response.body).toEqual(expectedOutput);
};

describe('Search API', () => {
    test('empty test', async () => {
        const input = { message: 'hello world' };
        const expectedOutput = {
            message: 'hello world',
        };
        const expectedStatus = STATUS_OK;

        await runTestHelper(input, expectedStatus, expectedOutput);
    });

    test.todo('add more tests');
});
