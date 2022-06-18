const { APPOINTMENT_READ } = require('../../../../../config').SCOPES

module.exports = router.get('/:queueId/appointments/:appointmentId', validateAccessToken, validatePagingQueryParams, scopeValidation([APPOINTMENT_READ]), async (req, res, next) => {
    const queueId = req.params.queueId
    const appointmentId = req.params.appointmentId
    const body = copyObject(paginatedResponseBody)
    body.start = parseInt(req.query.start) || 0
    body.limit = parseInt(req.query.limit) || 0
    const result = await getRoomQuery(id)
    if (result) {
        body.data.push(result)
    } else {
        res.status(204).end()
        return
    }
    body.size = body.data.length
    res.status(200).json(body);
});

module.exports = router.get('/:queueId/appointments/', validateAccessToken, validatePagingQueryParams, scopeValidation([APPOINTMENT_READ]), async (req, res, next) => {
    const id = req.params.id
    const body = copyObject(paginatedResponseBody)
    body.start = parseInt(req.query.start) || 0
    body.limit = parseInt(req.query.limit) || 0
    const result = await getRoomQuery(id)
    if (result) {
        body.data.push(result)
    } else {
        res.status(204).end()
        return
    }
    body.size = body.data.length
    res.status(200).json(body);
});
