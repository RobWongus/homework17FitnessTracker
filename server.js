const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
// const router = require("router");

const PORT = process.env.PORT || 4000;

// const User = require("./userModel.js");

const db = require("./models");

const app = express();

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Fitness", { useUnifiedTopology: true, useNewUrlParser: true });



// mdb.on('error', console.error.bind(console, 'connection error:'));
// mdb.once('open', function() {
//   console.log("Connected to MongoDB!")
// });

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// app.post("/submit", ({ body }, res) => {
//   const user = new User(body);
//   user.coolifier();
//   user.makeCool();

//   User.create(user)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
