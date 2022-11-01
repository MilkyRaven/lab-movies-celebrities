const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });

router.post("/celebrities/create", async(req, res) => {
  try {
    const newCelebrity = await Celebrity.create(req.body)
    console.log("celebrity created")
    res.redirect("/celebrities")
  } catch (err) {
    console.log(err)
    res.render("/celebrities/create")
  }
})

module.exports = router;