const express = require('express');
const router = express.Router();

const playersCtrl = require('../controllers/playerRoutes');


router.get('/', playersCtrl.index);

router.get('/new', playersCtrl.new);

router.get('/:id', playersCtrl.show);

router.post('/', playersCtrl.create);

module.exports = router;
