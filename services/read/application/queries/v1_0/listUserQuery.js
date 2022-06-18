const { listUser } = require('../../../infrastructure/selects/v1_0/listUser')
const { reduceQuery } = require('../../../common/queryParser')

const listUserQuery = async (limit, offset, query) => {
    const parsedQuery = reduceQuery(query)

    const result = await listUser(limit, offset, parsedQuery)
    return result
}

module.exports = {
    listUserQuery
}