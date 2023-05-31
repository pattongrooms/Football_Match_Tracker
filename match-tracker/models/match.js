const mongoose = require('mongoose')

const Schema = mongoose.Schema

const matchSchema = new Schema({
  teamName: {
    type: String,
    required: true
  },
  homeOrAway: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  stadium: {
    type: String,
    required: true
  },
  record: {
    type: Number,
    required: true,
    min: 0,
    max: 25
  },
  result: {
    type: String,
    required: true
  }
})

// compiling the schema into a model and export it
module.exports = mongoose.model('Match', matchSchema)
