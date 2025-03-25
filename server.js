const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Log requests to static files
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

// Serve the main index.html file for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
