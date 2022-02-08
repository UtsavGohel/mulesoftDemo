const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

//Here We are importing neccesary modules that we need to use in this file..
const Movie = require("../Tabel/schema");
const router = new express.Router();

router.get("/", (req, res) => {
  res.redirect("/movies");
});

//Here we are created a get api to fetch the data from the database
router.get("/movies", async (req, res) => {
  const mydata = await Movie.find();
  res.send(mydata);
});

//Here we are created a get api to fetch the data from the database.
//Based on their id we are fetching the data for particular user..
router.get("/movies/:id", async (req, res) => {
  const mydata = await Movie.findById(req.params.id);
  res.send(mydata);
});

//Here we are created a post api to add the data in the database.
router.post("/movies", async (req, res) => {
  const mydata = new Movie({
    moviename: req.body.moviename,
    actorname: req.body.actorname,
    actressname: req.body.actressname,
    directorname: req.body.directorname,
    releaseyear: req.body.releaseyear,
  });
  await mydata.save((err, msg) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        message: msg,
        msg: "Data added successfully",
      });
    }
  });
});

//Here we are created a Patch api to update the data in the database.
router.patch("/movies/:id", async (req, res) => {
  // update
  const _id = req.params.id;
  const mydata = await Movie.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  await mydata.save((err, msg) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        value: msg,
        message: "Updated Successfully",
      });
    }
  });
});

//Here we created a delete api to delete the data of particular user from the database.
router.delete("/movies/:id", async (req, res) => {
  const _id = req.params.id;
  const mydata = await Movie.findByIdAndDelete(_id);
  // res.send(mydata);
  if (mydata) {
    res.status(200).json({
      msg: mydata,
      message: "Deleted Successfully",
    });
  }
});

//Here we created a delete api to delete all the data from the database.
router.delete("/movies", async (req, res) => {
  const mydata = await Movie.deleteMany();
  res.send(mydata);
});

module.exports = router;
