const mongoose = require('mongoose')

const Schema = mongoose.Schema

const matchSchema = new Schema({
  teamName: {
    type: String,
    required: true
  },
  homeOrAway: {
    type: Boolean,
    default: true
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
    required: true
  },
  result: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Match', matchSchema)
