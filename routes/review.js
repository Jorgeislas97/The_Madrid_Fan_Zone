const express = require('express');
const router = express.Router();

const reviewsCtrl = require('../controllers/review');


//router.post('/player/:id/review.js');
router.post('/player/:id/review', reviewsCtrl.createReview);


module.exports = router;