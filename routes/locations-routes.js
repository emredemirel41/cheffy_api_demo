const express = require('express');
const router = express.Router();
const locationsControllers = require('../controllers/locations-controller');

router.get('/', locationsControllers.getAllLocations );

module.exports = router;