const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });

router.post("/create", async(req, res) => {
  const {name, occupation, catchPhrase} = req.body
  try {
   await Celebrity.create({name, occupation, catchPhrase})
    res.redirect("/celebrities")
  } catch (err) {
    console.log(err)
    res.render("/celebrities/new-celebrity")
  }
})

router.get("/", async(req, res, next) => {
  try {
    const celebrities = await Celebrity.find({})
    console.log(celebrities)
    res.render("celebrities/celebrities", {celebrities})
  }catch (err) {
    console.log(err)
  }
});

module.exports = router;