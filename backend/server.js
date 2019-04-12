// server.js
// where your node app starts

// init project
const express = require("express");
const path = require("path");
const app = express();

// Load environment variables from the `.env` file.
require("dotenv").config();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(
  express.static(
    path.join(__dirname, `../frontend/${process.env.FRONTEND_MODE}`)
  )
);
app.use("/images", express.static(path.join(__dirname, `../frontend/images`)));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(
    path.join(__dirname, `../frontend/${process.env.FRONTEND_MODE}/index.html`)
  );
});

// listen for requests :)
const server = app.listen(process.env.PORT || 8000, function() {
  console.log(`🚀  Server listening on port ${server.address().port}`);
});
