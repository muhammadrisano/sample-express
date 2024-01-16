require('dotenv').config()
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Create GET request
app.get("/helo", (req, res) => {
  res.send("helo world");
});

app.get("/name", (req, res) => {
  res.json({
    name: process.env.APP_NAME
  })
});


// Initialize server
app.listen(4000, () => {
  console.log("Running on port 4000");
});