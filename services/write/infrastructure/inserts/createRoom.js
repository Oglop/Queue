const sequalize = require('../persistance/database')
const Room = require('../../application/models/room')
const createRoom = async record => {
    const result = await Room.create(record)
    return result
}

module.exports = {
    createRoom
}