const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

// Serve static files from the current directory (dist in production)
app.use(express.static(path.join(__dirname), {
  maxAge: '1y', // Cache static assets for 1 year
  etag: false
}));

// Set security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Handle client-side routing - serve index.html for all non-file routes
app.get('*', (req, res) => {
  // Only serve index.html for routes that don't have file extensions
  if (!req.path.includes('.')) {
    res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    res.status(404).send('File not found');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
