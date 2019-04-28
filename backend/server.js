// server.js
// where your node app starts

// init project
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();

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

/**
 * Webhook example
 *
 * To test this, use ngrok to make the app publically available, then add the URL to your webhook settings here: https://dashboard.stripe.com/account/webhooks
 * Make sure you added the webhook secret to your .env file, then click the "Send test webhook" button in your webhook configuration page.
 */
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

app.post(
  '/webhooks',
  bodyParser.raw({type: 'application/json'}),
  (req, res) => {
    const sig = req.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
      console.log(
        `⚠️  Webhook signature verification failed. Please check your webhook secret in the .env file.`
      );
      // On error, return the error message.
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Extract the object from the event.
    const dataObject = event.data.object;
    // Do something with the event and its data.
    console.log(
      `🔔  Webhook for event ${event.id} of type ${
        event.type
      } received! It contains an object of type ${dataObject.object}.`
    );

    // Return a response to acknowledge receipt of the event.
    res.json({received: true});
  }
);

// listen for requests :)
const server = app.listen(port, function() {
  console.log(...serverStartLog);
});
