const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gameInfoSchema = new Schema({
  offense: { type: String, required: true },
  defense: { type: String, required: true },
  mvp: { type: String, required: true },
  gameNote: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
})

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
    type: String,
    required: true
  },
  result: {
    type: String,
    required: true
  },
  gameInfos: [gameInfoSchema]
})

// compiling the schema into a model and export it
module.exports = mongoose.model('Match', matchSchema)
