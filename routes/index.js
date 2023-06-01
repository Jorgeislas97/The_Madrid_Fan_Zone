const express = require('express');
const router = express.Router();


const playerCtrl = require('../controllers/player');
	
// GET /movies/new
router.get('/new', playerCtrl.new);

module.exports = router;
