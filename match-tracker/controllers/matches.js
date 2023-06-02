const Match = require('../models/match')

module.exports = {
  index,
  show,
  new: newMatch,
  create
}

async function index(req, res) {
  res.render('matches/index', {
    matches: await Match.find()
  })
}

async function show(req, res) {
  const match = await Match.findById(req.params.id)

  res.render('matches/show', { title: 'Game Information', match })
}

function newMatch(req, res) {
  res.render('matches/new', { title: 'Add Game', errorMsg: '' })
}

async function create(req, res) {
  try {
    const match = await Match.create(req.body)
    res.redirect('/matches')
  } catch (err) {
    res.render('matches/new', { errorMsg: err.message })
  }
}
