let DUMMY = require('../dummy');
const uuid = require('../helpers/custom');

const getAllCategories = (req, res, next) => {
    const dummies = DUMMY.DUMMY_CATEGORIES;
    res.json({ items: dummies });
};


exports.getAllCategories = getAllCategories;
