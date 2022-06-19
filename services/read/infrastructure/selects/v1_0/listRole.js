const Role = require('../../../../../persistance/models/role')


const listRole = async (limit, offset, query) => {
    const result = await Role.findAndCountAll({
        where: query,
        offset,
        limit
    })
    return result
}
module.exports = {
    listRole
}