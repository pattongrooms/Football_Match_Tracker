const express = require('express')
const router = express.Router()
const ensureLoggedIn = require('../config/ensureLoggedIn')

// create controller module
const matchesCtrl = require('../controllers/matches')

// All actual paths start and default with "/matches"
// GET /matches
// could be just '/'
router.get('/', matchesCtrl.index)

// GET route for /matches/new
router.get('/new', ensureLoggedIn, matchesCtrl.new)

// GET /matches/:id (show functionality) MUST be below new route
router.get('/:id', matchesCtrl.show)

// POST route for /movies
router.post('/', ensureLoggedIn, matchesCtrl.create)

module.exports = router
