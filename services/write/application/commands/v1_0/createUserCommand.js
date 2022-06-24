const { createUser } = require('../../../infrastructure/inserts/v1_0/createUser')
const { debug, error } = require('../../../../../logger')
const { encrypt } = require('../../../../connect/application/business/encryption')
const { createUserValidator }  = require('../../validation/v1_0/createUserValidator')
const execute = async (data, id) => {
    debug(`createUSerCommand id: ${id}.`, __filename, 'execute', 'create')
    try {
        if (createUserValidator(data, id)) {
            data.password = await encrypt(data.password)
            data.id = id
            await createUser(data)
        }
        
    } catch (e) {
        error(`createUSerCommand error: ${e.message}.`, __filename, 'execute', 'create')
    }
}

module.exports = {
    execute
}