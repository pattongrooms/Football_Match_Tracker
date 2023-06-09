const express = require('express')
const router = express.Router()
const gameInfosCtrl = require('../controllers/gameinfos')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// All routes in this file start with '/' (root)

// POST /matches/:id/gameinfos
router.post('/matches/:id/gameinfos', ensureLoggedIn, gameInfosCtrl.create)

// DELETE /gameinfos/:id
router.delete('/gameinfos/:id', ensureLoggedIn, gameInfosCtrl.delete)

module.exports = router
