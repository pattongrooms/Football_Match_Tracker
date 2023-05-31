const express = require('express')
const router = express.Router()

// create controller module
const matchesCtrl = require('../controllers/matches')

// All actual paths start and default with "/matches"

// GET route for /matches/new
router.get('/new', matchesCtrl.new)

// GET /matches/:id (show functionality) MUST be below new route
router.get('/:id', matchesCtrl.show)

// POST route for /movies
router.post('/', matchesCtrl.create)

// GET /matches
// could be just '/'
router.get('/', matchesCtrl.index)

module.exports = router
