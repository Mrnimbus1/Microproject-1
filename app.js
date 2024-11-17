const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// JSON Data
const data = require('./data/christmas_items.json');

// Serve static files from 'public' folder
app.use('/site', express.static(path.join(__dirname, 'public')));

// API endpoint for Christmas items
app.get('/api/items', (req, res) => {
  res.json(data);
});

// 404 Error Handling
app.use((err, req, res, next) => {
  res.status(404).send('<h1>Error 404: Page Not Found</h1>');
  console.error(err.stack);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
