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

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});