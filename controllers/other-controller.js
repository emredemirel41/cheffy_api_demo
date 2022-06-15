let DUMMY = require('../dummy');

const getSearchItem = (req, res, next) => {
    const query = req.query.q;
    const result = DUMMY.DUMMY_CHEFS.filter(p => {
        return p.name.toLowerCase().includes(query.toLowerCase());
    })
    res.json({result : result});
    
};


exports.getSearchItem = getSearchItem;
