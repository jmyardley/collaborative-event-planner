const path = require("path");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require('./passport');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({ secret: 'i@N7yVv*62#9' }));
app.use(passport.initialize());
app.use(passport.session()); // calls serializeUser and deserializeUser

app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

mongoose.connect(
  process.env.MONGODB_URI || 
  "mongodb://localhost/collaborativeeventplanner",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
  );

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
