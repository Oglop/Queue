const { createUser } = require('../../../infrastructure/inserts/v1_0/createUser')
const { debug, error } = require('../../../../../logger')

const execute = async (data, id) => {
    debug(`createUSerCommand id: ${id}.`, __filename, 'execute', 'create')
    try {
        data.id = id
        await createUser(data)
    } catch (e) {
        error(`createUSerCommand error: ${e.message}.`, __filename, 'execute', 'create')
    }
}

module.exports = {
    execute
}