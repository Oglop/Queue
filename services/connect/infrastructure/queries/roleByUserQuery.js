const User = require('../../../../persistance/models//user')
const Role = require('../../../../persistance/models/role')
const RoleUser = require('../../../../persistance/models/role')


const getRoleByUserEmail = async (email) => {
    const user = await User.findAll({where: { email: email }})
    const role = await Role.findByPk(user.dataValues.roleId)

    return role
}

module.exports = { getRoleByUserEmail }