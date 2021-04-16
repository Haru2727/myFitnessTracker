const express = require("express");
const mongoose = require("mongoose");
// const morgan = require("morgan");
const mainRoutes = require("./public/api.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(mainRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
