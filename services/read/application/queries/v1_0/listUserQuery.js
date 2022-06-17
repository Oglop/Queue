const { listUser } = require('../../../infrastructure/selects/v1_0/listUser')
const { queryParser } = require('../../../common/queryParser')

const listUserQuery = async (limit, offset, query) => {
    const parsedQuery = queryParser(query)

    const result = await listUser(limit, offset, parsedQuery)
    return result
}

module.exports = {
    listUserQuery
}