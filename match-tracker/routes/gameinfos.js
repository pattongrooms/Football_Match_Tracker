const express = require('express')
const router = express.Router
const gameInfosCtrl = require('../controllers/gameinfos')

// All routes in this file start with '/' (root)

// POST /matches/:id/gameinfos
router.post('/matches/:id/gameinfos', gameInfosCtrl.create)

module.exports = router
