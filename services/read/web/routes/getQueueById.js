const express = require('express');
const router = express.Router();
const { requestLogger } = require('../middleware/requestLogger')
/**
 * [] should have id
 */
module.exports = router.get('/:id', requestLogger,  (req, res, next) => {
    //insert into datastore
    res.status(200).json({
        offset:0,
        limit:10,
        data: {
            hello: 'world'
        }
    });
});
