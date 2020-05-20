const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var compression = require("compression");

const PORT = process.env.PORT || 4000;

// const User = require("./userModel.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(compression());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Fitness", { useUnifiedTopology: true, useNewUrlParser: true });

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
