const express = require("express");
// const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

(require("./controller/htmlroutes.js"))(app);
(require("./controller/api.js"))(app);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });