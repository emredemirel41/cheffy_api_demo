let DUMMY = require('../dummy');
const uuid = require('../helpers/custom');

const getAllBanners = (req, res, next) => {
    const dummies = DUMMY.DUMMY_BANNERS;
    res.json({ items: dummies });
};


exports.getAllBanners = getAllBanners;
