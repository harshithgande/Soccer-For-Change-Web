/* eslint-disable no-undef */
// filepath: c:\Users\harsh\OneDrive\Desktop\Soccer-For-Change-Web\server.js

const express = require('express');

const app = express();
const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
