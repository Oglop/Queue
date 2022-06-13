const User = require('../../../../persistance/models//user')
const Role = require('../../../../persistance/models/role')


const getRoleByUserEmail = async (email) => {
    /*onst result = await User.findAll({
        include: [{
            model: Role
        }]
        //,        where: { email: email }
    })*/

    const result = await Role.findAll({
        include: [
            { model: User, where: { email: email } }
        ]
    })

    return result
}

module.exports = { getRoleByUserEmail }