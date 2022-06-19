const User = require('../../../../../persistance/models/user')

const createUser = async (user) => {
    const result = await User.create(user)
    return (result) ? result.dataValues.id : null
}


module.exports = {
    createUser
}