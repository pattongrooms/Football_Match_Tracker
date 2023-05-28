const express = require('express')
const router = express.Router()
const matchesCtrl = require('../controllers/matches')

// All actual paths start with "/matches"

// GET /matches
router.get('/', matchesCtrl.index)
//
router.get('/new', matchesCtrl.new)

module.exports = router
