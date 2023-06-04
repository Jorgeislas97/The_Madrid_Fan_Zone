const express = require('express');
const router = express.Router();

const reviewsCtrl = require('../controllers/reviews');


//router.post('/player/:id/review.js');
router.post('/player/:id/reviews', reviewsCtrl.createReview);


module.exports = router;