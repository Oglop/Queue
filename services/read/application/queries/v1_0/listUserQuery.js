const { listUser } = require('../../../infrastructure/selects/v1_0/listUser')
const { reduceQuery } = require('../../../common/queryParser')
const { listUserValidator } = require('../../validation/v1_0/listUserValidator')

const listUserQuery = async (limit, offset, query) => {
    if (listUserValidator(query)) {
        const parsedQuery = reduceQuery(query)
        const result = await listUser(limit, offset, parsedQuery)
        return result
    }
    return []
}

module.exports = {
    listUserQuery
}