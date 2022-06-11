const { createRoom } = require('../../../infrastructure/inserts/createRoom')
const { generateId } = require('../../../../../lib')

const execute = async (room) => {
    room.id = generateId()
    await createRoom(room)
    return room.id
}

module.exports = {
    execute
}