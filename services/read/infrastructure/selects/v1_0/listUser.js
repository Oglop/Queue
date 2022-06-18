const User = require('../../../../../persistance/models/user')

const listUser = async (limit, offset, query) => {
    const result = await User.findAndCountAll({
        attributes: ['id', 'roleId', 'name', 'email'],
        where: query,
        offset,
        limit
    })
    return result
}

module.exports = {
    listUser
}
