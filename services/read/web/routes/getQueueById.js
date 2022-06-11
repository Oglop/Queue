const express = require('express');
const router = express.Router();
const { requestLogger } = require('../middleware/requestLogger')
const { validateAccessToken } = require('../middleware/validateAccessToken')
const paginatedResponseBody = require('../responses')
const { copyObject } = require('../../../../lib')
/**
 * [] should have id
 */
module.exports = router.get('/:id', requestLogger, validateAccessToken, (req, res, next) => {

    const data = copyObject(paginatedResponseBody)
    data.start = parseInt(req.query.start) || 0
    data.limit = parseInt(req.query.limit) || 0
    data.result.push({
        hello: 'world'
    })
    
    res.status(200).json(data);
});
