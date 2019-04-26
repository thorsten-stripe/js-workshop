const nodemon = require('nodemon');
const ngrok = require('ngrok');
const opn = require('opn');

require('dotenv').config();

const port = parseInt(process.env.PORT, 10);
ngrok
  .connect(port)
  .then(url => {
    nodemon(`-x 'NGROK_URL=${url} PORT=${port} node' ./backend/server.js`);
    if (port === 3000) {
      opn(url);
      console.log(`🌍 Available online: ${url}`);
    }
    console.log(`👩🏻‍💻  Webhook URL for Stripe: ${url}/webhooks`);
  })
  .catch(err => {
    throw err;
  });

nodemon
  .on('start', () => {
    console.log('App has started');
  })
  .on('restart', files => {
    console.log('App restarted due to: ', files);
  });
