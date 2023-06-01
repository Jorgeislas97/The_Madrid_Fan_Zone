const express = require('express');
const router = express.Router();

const playerCtrl = require('../controllers/player');


router.get('/', playerCtrl.index);

router.get('/new', playerCtrl.new);

router.get('/:id', playerCtrl.show);

router.post('/', playerCtrl.create);

module.exports = router;
