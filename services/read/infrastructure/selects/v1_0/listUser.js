const User = require('../../../../../persistance/models/user')

const listUser = async (limit, offset, query) => {
    const { count, rows } = await User.findAndCountAll({
        attributes: ['id', 'roleId', 'name', 'email'],
        where: {
            name: args.name
        },
        offset,
        limit
    })
}

module.exports = {
    listUser
}
