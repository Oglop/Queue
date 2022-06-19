const { createUser } = require('../../../infrastructure/inserts/v1_0/createUser')
const { debug, error } = require('../../../../../logger')

const execute = async (data, id) => {
    debug(`User.create id: ${id}.`, __filename, 'execute', 'create')
    try {
        data.id = id
        const result = await createUser(data)
    } catch (e) {
        error(`User.create error: ${e.message}.`, __filename, 'execute', 'create')
    }
}

module.exports = {
    execute
}