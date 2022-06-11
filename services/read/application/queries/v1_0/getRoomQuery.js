const { selectRoomById } = require('../../../infrastructure/selects/selectRoomById')

const getRoomQuery = async (id) => {
    const result = await selectRoomById(id)
    return result
}

module.exports = {
    getRoomQuery
}