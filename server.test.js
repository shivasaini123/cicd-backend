import request from 'supertest';
import express from 'express';

const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

describe('GET /api/hello', () => {
  it('should return hello message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('Hello, World!');
  });
});

describe('GET /api/status', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status');
    expect(res.body.status).toBe('ok');
  });

  it('should return timestamp', async () => {
    const res = await request(app).get('/api/status');
    expect(res.body).toHaveProperty('timestamp');
    expect(new Date(res.body.timestamp)).toBeInstanceOf(Date);
  });
});
