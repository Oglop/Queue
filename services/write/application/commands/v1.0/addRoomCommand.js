const { createRoom } = require('../../../infrastructure/inserts/createRoom')
const { generateId } = require('../../../../../lib')

const execute = async (room) => {
    room.id = generateId()
    const id = await createRoom(room)
    return {
        id,
        message: 'record was created'
    }
}

module.exports = {
    execute
}