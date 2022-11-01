const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
    cast: [Object] //missing something?
  },{
    timestamps: true
  }
)

const Movie = model("Movie", movieSchema);

module.exports = Movie;