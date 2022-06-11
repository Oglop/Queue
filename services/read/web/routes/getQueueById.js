const express = require('express');
const router = express.Router();
const { requestLogger } = require('../middleware/requestLogger')
const { validateAccessToken } = require('../middleware/validateAccessToken')
const { validatePagingQueryParams } = require('../middleware/validatePagingQueryParams')
const paginatedResponseBody = require('../responses/paginatedResponseBody')
const { copyObject } = require('../../../../lib')
/**
 * [] should have id
 */
module.exports = router.get('/:id', requestLogger, validateAccessToken, validatePagingQueryParams, (req, res, next) => {
    const id = req.params.id
    const body = copyObject(paginatedResponseBody)
    body.start = parseInt(req.query.start) || 0
    body.limit = parseInt(req.query.limit) || 0
    body.data.push({
        id,
        hello: 'world'
    })
    body.size = body.data.length
    res.status(200).json(body);
});
