const { createRoom } = require('../../../infrastructure/inserts/v1_0/createRoom')
const { debug, error } = require('../../../../../logger')

const execute = async (data, id) => {
    debug(`createRoomCommand id: ${id}.`, __filename, 'execute', 'create')
    try {
        data.id = id
        await createRoom(data)
    } catch (e) {
        error(`createRoomCommand error: ${e.message}.`, __filename, 'execute', 'create')
    }
}

module.exports = {
    execute
}