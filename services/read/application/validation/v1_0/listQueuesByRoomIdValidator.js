const allowedKeys = [ 'offset','limit' ]

const listQueuesByRoomIdValidator = (query) => {
    const test = Object.keys(query)
    return !!(!test.filter(i => !allowedKeys.includes(i)).length)
}

module.exports = {
    listQueuesByRoomIdValidator
}