const nodemon = require("nodemon");
const ngrok = require("ngrok");
const opn = require("opn");

require("dotenv").config();

const port = process.env.PORT;
if (
  process.env.ENVIRONMENT === "production" ||
  process.env.NODE_ENV === "production"
) {
  nodemon(`node ./backend/server.js`);
} else {
  ngrok
    .connect(port)
    .then(url => {
      console.log(`🌍 Available online: ${url}`);
      console.log(`👩🏻‍💻  Webhook URL for Stripe: ${url}/webhook`);
      nodemon(`-x 'NGROK_URL=${url} PORT=${port} node' ./backend/server.js`);
      opn(url);
    })
    .catch(err => {
      throw err;
    });
}

nodemon
  .on("start", () => {
    console.log("App has started");
  })
  .on("restart", files => {
    console.log("App restarted due to: ", files);
  });
