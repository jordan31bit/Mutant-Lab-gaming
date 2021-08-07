// server.js
const express = require('express');
const app = express();
//const port = process.ev.PORT;

// Set up home route
app.get('/index.html', (req, res) => {
  res.send('This is the homepage');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Success! Your application is running.`);
});
