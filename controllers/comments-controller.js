let DUMMY = require('../dummy');
const HttpError = require('../models/http-error');


const getAllComments = (req, res, next) => {
    const dummies = DUMMY.DUMMY_COMMENTS;
    res.json({ items: dummies });
};

exports.getAllComments = getAllComments;

