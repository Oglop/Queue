const Room = require('../../../../../persistance/models/room')
const Queue = require('../../../../../persistance/models/queue')

const listQueueByRoomId = async (id, limit, offset, query) => {
    const roomResult = await Room.findByPk(id)
    const queueResult = await Queue.findAndCountAll({
        where: query,
        offset,
        limit
    })
    return  { 
        rows: {
            id: roomResult.id,
            count: queueResult.count,
            queues: queueResult.rows
        },
        count: 1
    }
}

module.exports = { listQueueByRoomId }
