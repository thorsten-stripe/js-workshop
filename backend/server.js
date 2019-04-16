// server.js
// where your node app starts

// init project
const express = require('express');
const path = require('path');
const app = express();

// Load environment variables from the `.env` file.
require('dotenv').config();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// This facilitates the correct frontend routing - DO NOT TOUCH
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
let serverStartLog = [];
if (port === 3000) {
  // http://expressjs.com/en/starter/static-files.html
  app.use(express.static(path.join(__dirname, `../frontend/vanilla`)));
  app.use(
    '/images',
    express.static(path.join(__dirname, `../frontend/reactjs/src/images`))
  );

  // http://expressjs.com/en/starter/basic-routing.html
  app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, `../frontend/vanilla/index.html`));
  });

  serverStartLog = [
    `🚀  Server running locally at http://localhost:${port}/.`,
    `Backend API served from "backend/server.js".`,
    `Frontend served from "frontend/vanilla".`,
  ];
} else if (port === 3001) {
  serverStartLog = [
    `Backend API served from "backend/server.js".`,
    `Frontend served from "frontend/reactjs".`,
  ];
} else {
  console.warn(`⚠️ You need to specify the PORT env variable as a number!`);
  return;
}

// Implement your API routes here
app.get('/config', (req, res) => {
  res.json({
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

// listen for requests :)
const server = app.listen(port, function() {
  console.log(...serverStartLog);
});
