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
    const Match = await Match.create(req.body)
    res.redirect('/matches')
  } catch (err) {
    res.render('matches/new', { errorMsg: err.message })
  }
}

async function index(req, res) {
  res.render('matches/index', {
    matches: await Match.find()
  })
}
