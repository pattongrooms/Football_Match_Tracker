const Match = require('../models/match')

module.exports = {
  new: newMatch,
  create,
  index
}

function newMatch(req, res) {
  res.render('matches/new', { title: 'Add Game', errorMsg: '' })
}

async function create(req, res) {
  try {
    await Match.create(req.body)
    res.redirect('/movies/new')
  } catch (err) {
    res.render('matches/new', { errorMsg: err.message })
  }
}

function index(req, res) {
  res.render('matches/index', {
    matches: Match.find()
  })
}
