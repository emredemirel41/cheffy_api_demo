const express = require('express');
const router = express.Router();
const otherController = require('../controllers/other-controller');

router.get('/search', otherController.getSearchItem );

module.exports = router;