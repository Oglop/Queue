const Licence = require('../../../../../persistance/models/licence')
const User = require('../../../../../persistance/models/user')
const UserLicence = require('../../../../../persistance/models/userLicence')
const { error } = require('../../../../../logger')
const { LICENCE_STATUS } = require('../../../common/enums')

const createUserValidator = async (data, id) => {
    try {
        let step = 'licence already exists'
        const licenceExists = await Licence.findOne({
            where : {
                [Op.and]: [
                    { key: user.licenceKey },
                    { status: LICENCE_STATUS.ACTIVE }
                ]
            }
        })
        if (!(!!licenceExists)) { return false }

        step = 'licence is full'
        const userCount = await UserLicence.count({ where: { licenceId: licenceExists.id } }) 
        if (userCount >= licenceExists.maxUsers) { return false }

        step = 'user already exists'
        const userExists = await User.findOne({
            where : {
                [Op.or]: [
                    {email: data.email},
                    {id: id}
                ]
                
            }
        })
        if (!!userExists) { return false }

        return true
    } catch (e) {
        error(`message: ${e.message}`, __filename, 'createUserValidator', 'validating')
        return false
    }
}

module.exports = { createUserValidator }