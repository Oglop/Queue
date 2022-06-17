const express = require('express');
const router = express.Router();
// const { requestLogger } = require('../middleware/requestLogger')
const { validateAccessToken } = require('../../middleware/validateAccessToken')
const { validatePagingQueryParams } = require('../../middleware/validatePagingQueryParams')
const { scopeValidation } = require('../../middleware/scopeValidation')
const paginatedResponseBody = require('../../responses/paginatedResponseBody')
const { listUserQuery } = require('../../../application/queries/v1_0/listUserQuery')
const { copyObject } = require('../../../../../lib')
const { DEFAULT_PAGE_SIZE } = require('../../../../../config');
/**
 * [] should have id
 */
module.exports = router.get('/', validateAccessToken, validatePagingQueryParams, scopeValidation(['room.read']), async (req, res, next) => {
    const body = copyObject(paginatedResponseBody)
    body.offset = parseInt(req.query.start) || 0
    body.limit = parseInt(req.query.limit) || DEFAULT_PAGE_SIZE
    const result = await listUserQuery(limit, offset, req.query)
    if (!!result) {
        result.forEach(r => body.data.push(r))
    } else {
        res.status(204).end()
        return
    }
    body.size = body.data.length
    res.status(200).json(body);
});
