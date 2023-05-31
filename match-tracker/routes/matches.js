const express = require('express')
const router = express.Router()

// create controller module
const matchesCtrl = require('../controllers/matches')

// All actual paths start and default with "/matches"

// GET /matches
router.get('/', matchesCtrl.index)

// GET route for /matches/new
router.get('/new', matchesCtrl.new)

// POST route for /movies
router.post('/', matchesCtrl.create)

module.exports = router
