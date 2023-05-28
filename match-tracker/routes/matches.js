let express = require('express')
let router = express.Router()
const matchesCtrl = require('../controllers/matches')

// All actual paths start with "/matches"

// GET /matches
router.get('/', matchesCtrl.index)

module.exports = router
