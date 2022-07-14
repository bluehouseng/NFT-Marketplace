const express = require("express.js");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`<h1>you are good to code</h1>`);
});

module.exports = { app };
