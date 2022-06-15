const express = require('express');
const router = express.Router();
const bannersControllers = require('../controllers/banners-controller');

router.get('/', bannersControllers.getAllBanners );

module.exports = router;