const express = require("express");
const path = require("path");
const app = express();

// Serve the static files from the build folder
app.use(express.static(path.join(__dirname, "build")));

// API endpoint
app.get("/api", (req, res) => {
  res.send("Hello from the API");
});

// All other requests return the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
