const nodemon = require("nodemon");
const ngrok = require("ngrok");
const opn = require("opn");

require("dotenv").config();

const port = process.env.PORT;

ngrok.connect(port)
  .then((url) => {
    console.log(`Available at ${url}`);
    nodemon(`-x 'NGROK_URL=${url} PORT=${port} node' ./backend/server.js`);
    opn(url);
  }).catch((err) => {
    throw err;
  });

nodemon.on("start", () => {
  console.log("App has started");
}).on("restart", (files) => {
  console.log("App restarted due to: ", files);
});