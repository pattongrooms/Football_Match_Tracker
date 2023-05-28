const Match = require('../models/match')

module.exports = {
  index
}

function index(req, res) {
  res.render('matches/index', {
    matches: Match.getAll()
  })
}
