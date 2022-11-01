// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const Movie = require("../models/Movie.model")
const router = require("express").Router();

// all your routes here
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find({})
    console.log(movies)
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
   console.log("Movie created!")
    res.redirect("/movies")
  } catch (err) {
    console.log(err)
    res.redirect("/movies/new-movie")
  }
})
module.exports = router;