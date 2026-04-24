const { expect } = require('chai');
const request = require('supertest');
const app = require('../server');

describe('REST API Endpoint Tests', () => {
  it('should return 204 No Content for integrity check (Valid Behavior)', async () => {
    const response = await request(app).get('/api/integrity-check42');
    expect(response.status).to.equal(204);
  });

  it('should return 404 Not Found for non-existent route (Invalid/Error Behavior)', async () => {
    const response = await request(app).get('/api/this-route-does-not-exist');
    expect(response.status).to.equal(404);
  });
});
