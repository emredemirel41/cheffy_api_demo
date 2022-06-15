let DUMMY = require('../dummy');
const uuid = require('../helpers/custom');

const getAllLocations = (req, res, next) => {
    const dummies = DUMMY.DUMMY_LOCATIONS;
    res.json({ items: dummies });
};


exports.getAllLocations = getAllLocations;
