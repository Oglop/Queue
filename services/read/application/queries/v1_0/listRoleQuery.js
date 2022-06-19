const { listRoleValidator } = require('../../validation/v1_0/listRoleValidator')
const { reduceQuery } = require('../../../common/queryParser')
const { listRole } = require('../../../infrastructure/selects/v1_0/listRole')

const listRoleQuery =  async (limit, offset, query) => {
    if (listRoleValidator(query)) {
        const parsedQuery = reduceQuery(query)
        const result = await listRole(limit, offset, parsedQuery)
        return result
    }
    return []
}

module.exports = {
    listRoleQuery
}