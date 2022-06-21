const { listQueuesByRoomIdValidator } = require('../../validation/v1_0/listQueuesByRoomIdValidator')
const { reduceQuery } = require('../../../common/queryParser')
const { listQueueByRoomId } = require('../../../infrastructure/selects/v1_0/listQueueByRoomId')


const listQueuesByRoomIdQuery = async (id, limit, offset, query) => {
    if (listQueuesByRoomIdValidator(query)) {
        const parsedQuery = reduceQuery(query)
        const result = await listQueueByRoomId(id, limit, offset, parsedQuery)
        return result
    }
    return []
}

module.exports = {
    listQueuesByRoomIdQuery
}