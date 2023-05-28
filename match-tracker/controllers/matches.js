const Match = require('../models/match')

module.exports = {
  index,
  new: newMatch
}
function index(req, res) {
  res.render('matches/index', {
    matches: Match.find()
  })
}

function newMatch(req, res) {
  res.render('matches/new', { title: 'Add Game', errorMsg: '' })
}
