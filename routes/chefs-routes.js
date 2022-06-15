const express = require('express');
const router = express.Router();
const chefsControllers = require('../controllers/chefs-controller');

router.get('/', chefsControllers.getAllChefs );

module.exports = router;