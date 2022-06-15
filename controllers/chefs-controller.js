let DUMMY = require('../dummy');
const HttpError = require('../models/http-error');
const uuid = require('../helpers/custom');


const getAllChefs = (req, res, next) => {
    const dummies = DUMMY.DUMMY_CHEFS;
    res.json({ items: dummies });
};


exports.getAllChefs = getAllChefs;

