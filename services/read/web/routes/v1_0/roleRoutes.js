const express = require('express');
const router = express.Router();
const { validateAccessToken } = require('../../middleware/validateAccessToken')
const { validatePagingQueryParams } = require('../../middleware/validatePagingQueryParams')
const { scopeValidation } = require('../../middleware/scopeValidation')
const { createPaginatedResponse } = require('../../../common/createPaginatedResponse')
const { listRoleQuery } = require('../../../application/queries/v1_0/listRoleQuery')
const { copyObject } = require('../../../../../lib')
/**
 * [] should have id
 */
module.exports = router.get('', validateAccessToken, validatePagingQueryParams, scopeValidation(['role.read']), async (req, res, next) => {
    //body.start = parseInt(req.query.start) || 0
    //body.limit = parseInt(req.query.limit) || 0
    const { count, rows } = await listRoleQuery(req.query.limit, req.query.offset, req.query)
    if (count > 0) {
        res.status(200).send(
            createPaginatedResponse(req.query.offset, req.query.limit, count, rows, req.baseUrl, req.query)
        );
    } else {
        res.status(204).end()
        return
    }
});

