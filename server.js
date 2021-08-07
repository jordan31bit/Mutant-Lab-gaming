// server.js
const express = require('express');
const app = express();
const port = $PORT;

// Set up home route
app.get('/', (req, res) => {
  res.send('This is the homepage');
});

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
