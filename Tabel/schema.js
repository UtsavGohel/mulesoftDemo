//import library for mongodb database
const mongoose = require("mongoose");

//Here we created a schema for the database
const MovieSchema = mongoose.Schema({
  moviename: String,
  actorname: String,
  actressname: String,
  directorname: String,
  releaseyear: Number,
});

//Here we are created a tabel for the database
const Movie = mongoose.model("movie", MovieSchema);
module.exports = Movie;
