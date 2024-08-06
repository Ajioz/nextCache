import express from 'express';

const app = express();

app.get('/messages', (req, res) => {
  const requestSource = req.headers['x-id'];
  console.log(`${new Date().toISOString()}: EXECUTING /messages on backend from ${requestSource}`);
  res.json([
    { id: 1, text: 'Hello World' },
    { id: 2, text: 'Another message from the separate backend' },
  ]);
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started at port http//:localhost:${port}`));