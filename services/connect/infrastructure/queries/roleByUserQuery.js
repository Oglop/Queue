const User = require('../../../../persistance/models//user')
const Role = require('../../../../persistance/models/role')
const RoleUser = require('../../../../persistance/models/role')


const getRoleByUserEmail = async (email) => {
    const user = await User.findOne({where: { email: email }})
    const role = await Role.findByPk(user.roleId)

    return {
        role: role.name,
        roleId: role.id,
        user: user.name,
        userId: user.id
    }
}

module.exports = { getRoleByUserEmail }