const Room = require('../../application/models/room')

const selectRoomById = async (id) => {
    const result = await Room.findByPk(id)
    return (result) ? result.dataValues : null
} 

module.exports = { selectRoomById }