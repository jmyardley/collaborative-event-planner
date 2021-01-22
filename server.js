const express = require("express");

const routes = require("./routes");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(
  // process.env.MONGODB_URI || 
  "mongodb://localhost/collaborativeeventplanner"
  );

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
