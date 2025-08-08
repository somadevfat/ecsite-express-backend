import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
