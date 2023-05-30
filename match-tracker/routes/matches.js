const express = require('express')
const router = express.Router()

// create controller module
const matchesCtrl = require('../controllers/matches')

// All actual paths start with "/matches"

// GET /matches
router.get('/', matchesCtrl.index)

// GET route for /matches/new
router.get('/new', matchesCtrl.new)

module.exports = router
