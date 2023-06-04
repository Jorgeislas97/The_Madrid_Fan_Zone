//const express = require('express');
///onst router = express.Router();

//const reviewsCtrl = require('../controllers/review');

///router.post('/players/:id/review', reviewsCtrl.createReview);
//router.delete('/players/:id/review', reviewsCtrl.deleteReview); // Use the appropriate function for DELETE

//module.exports = router;
const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const playerCtrl = require('../controllers/players');
	
// GET /player
router.get('/', playerCtrl.index);
// GET /player/new
router.get('/new', playerCtrl.new);
// GET /player/:id (show functionality) MUST be below new route
router.get('/:id', playerCtrl.show);
// POST /player
router.post('/', playerCtrl.create);
	
module.exports = router;
