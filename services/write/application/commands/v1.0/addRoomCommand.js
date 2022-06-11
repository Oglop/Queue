const { createRoom } = require('../../../infrastructure/inserts/createRoom')
const { generateId } = require('../../../../../lib')

const addRoomCommand = async (room) => {
    room.id = generateId()
    const res = await createRoom(room)
    return res
}

module.exports = {
    addRoomCommand
}