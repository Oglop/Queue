const express = require('express');
const router = express.Router();
const { validateAccessToken } = require('../../middleware/validateAccessToken')
const { validatePagingQueryParams } = require('../../middleware/validatePagingQueryParams')
const { scopeValidation } = require('../../middleware/scopeValidation')
const { ROOM_READ, QUEUE_READ } = require('../../../../../config').SCOPES
const { createPaginatedResponse } = require('../../../common/createPaginatedResponse')
const { listQueuesByRoomIdQuery } = require('../../../application/queries/v1_0/listQueuesByRoomIdQuery')
/**
 * [] should have id
 */
module.exports = router.get('/:id/queues', validateAccessToken, validatePagingQueryParams, scopeValidation([ROOM_READ, QUEUE_READ ]), async (req, res, next) => {
    const { count, rows } = await listQueuesByRoomIdQuery(req.params.id, req.query.limit, req.query.offset, req.query)
    if (count > 0) {
        res.status(200).send(
            createPaginatedResponse(req.query.offset, req.query.limit, count, rows, req.baseUrl, req.query)
        );
    } else {
        res.status(204).end()
        return
    }
})
