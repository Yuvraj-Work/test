const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Heroku Demo App 🚀");
});

// New endpoints
app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

app.get("/contact", (req, res) => {
  res.send("Contact us at contact@example.com.");
});

app.get("/status", (req, res) => {
  res.json({ status: "OK", uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
