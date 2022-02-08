//We are importing library to use mongodb database
const mongoose = require("mongoose");

//Here we are creating a connection between the database and the server..
mongoose
  .connect("mongodb://localhost:27017/movies")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
