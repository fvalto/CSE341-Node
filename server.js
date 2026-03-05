require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT
const connectDB = require('./connection');

connectDB();

app.get('/', (req, res) => {
  res.send('Hello Fabian!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});