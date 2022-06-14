const User = require('../../../../persistance/models/user')
const Role = require('../../../../persistance/models/role')
const Client = require('../../../../persistance/models/client')

const clientByUserId = async (userId) => {

    const user = await User.findByPk(userId)
    const role = await Role.findByPk(user.roleId)
    const client = await Client.findByPk(role.clientId)

    return {
        role: role.name,
        roleId: role.id,
        user: user.name,
        userId: user.id,
        client: client.dataValues
    }
}

modyle.exports = { clientByUserId }