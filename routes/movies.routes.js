// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const e = require("express");
const Movie = require("../models/Movie.model")
const router = require("express").Router();

// all your routes here
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find({})
    res.render("movies/movies", {movies})
  }catch (err) {
    console.log(err)
  }
    res.render("movies/movies");
  });

  router.get("/create", (req, res, next) => {
    res.render("movies/new-movie");
  });

router.post("/create", async(req, res) => {
  const {title, genre, plot, cast} = req.body
  try {
   await Movie.create({title, genre, plot, cast})
    res.redirect("/movies")
  } catch (err) {
    console.log(err)
    res.redirect("/movies/new-movie")
  }
})

router.post("/:movieId/delete", async (req, res) =>{
  const movieId = req.params.movieId
  try {
    await Movie.findByIdAndDelete(movieId, {display: false})
    res.redirect("/movies")
  } catch (err) {
    console.log(err)
  }
})

router.get("/:movieId/edit", async (req, res) => {
  const movieId = req.params.movieId
  console.log("We are here!")
  try {
    const movieData = await Movie.findById(movieId)
    res.render("movies/edit-movie", movieData)
  } catch (err) {
    console.log(err)
  }
})

router.post("/:movieId/edit", async (req, res) => {
  const movieBody = req.body
  const movieId = req.params.movieId
  try {
    await Movie.findByIdAndUpdate(movieId, movieBody)
    res.redirect("/movies")
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;