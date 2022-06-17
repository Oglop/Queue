const { selectRoomById } = require('../../../infrastructure/selects/v1_0/selectRoomById')

const getRoomQuery = async (id) => {
    const result = await selectRoomById(id)
    return result
}

module.exports = {
    getRoomQuery
}