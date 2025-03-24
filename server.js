/* eslint-disable no-undef */
// filepath: c:\Users\harsh\OneDrive\Desktop\Soccer-For-Change-Web\server.js
const path = require('path');
const express = require('express');

const app = express();
const PORT = 80;

/*app.get('/', (req, res) => {
  res.send('Hello World!');
}); */

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Serve the main index.html file for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
