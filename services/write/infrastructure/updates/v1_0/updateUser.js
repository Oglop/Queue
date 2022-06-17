const User = require('../../../../../persistance/models/user')
const updateUser = async (user) => {
    const result = await User.update({ email: user.email })
    return result[0]
}

module.exports = { updateUser }