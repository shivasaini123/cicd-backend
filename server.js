import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json("Welcome to the server and home");
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
