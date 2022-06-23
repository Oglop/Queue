const User = require('./models/user')
const Client = require('./models/client')
const Role = require('./models/role')
const Scope = require('./models/scope')
const Audience = require('./models/audience')
const Licence = require('./models/licence')
const UserLicence = require('./models/userLicence')
const { generateId } = require('../lib')
const { LICENCE_TYPE, LICENCE_STATUS } = require('../services/connect/common/enums')
const { 
    HOST, 
    CONNECT_PORT, 
    READ_PORT, 
    WRITE_PORT,
    ADMIN_USER_NAME,
    ADMIN_USER_EMAIL,
    ADMIN_USER_PASSWORD,
    ADMIN_ROLE_NAME,
    ADMIN_SCOPE,
    OWNER_ROLE_NAME,
    USER_ROLE_NAME

} = require('../config')

const migrate = async () => {
    const userId = generateId()
    try {
        const adminExists = await Role.findAll({ where: { name: ADMIN_ROLE_NAME } })
        if (!adminExists.length) {
            const adminClientId = generateId({ length: 10, numeric: true })
            await Client.create({
                id: adminClientId,
                secret: generateId(),
                issuer: `${HOST}:${CONNECT_PORT}`
            })
            const adminRoleId = generateId()
            await Role.create({
                id: adminRoleId,
                clientId: adminClientId,
                name: ADMIN_ROLE_NAME
            })
            console.log(`${ADMIN_ROLE_NAME} role was created`)
            await User.create({
                id: userId,
                roleId: adminRoleId,
                name: ADMIN_USER_NAME,
                email: ADMIN_USER_EMAIL,
                password: ADMIN_USER_PASSWORD
            })
            const licenceId = generateId()
            await Licence.create({
                id: licenceId,
                owner: userId,
                key: generateId({ length: 16, numeric: true }),
                status: LICENCE_STATUS.ACTIVE,
                type: LICENCE_TYPE.FULL,
                expiry: '2099-09-09',
                maxUsers: 100
            })
            await UserLicence.create({
                userId,
                licenceId
            })
            await Scope.create({
                id: generateId(),
                clientId: adminClientId,
                name: ADMIN_SCOPE
            })
            console.log(`${ADMIN_SCOPE} scopes was created`)
            await Audience.create({
                id: generateId(),
                clientId: adminClientId,
                name: `${HOST}:${READ_PORT}`
            })
            await Audience.create({
                id: generateId(),
                clientId: adminClientId,
                name: `${HOST}:${WRITE_PORT}`
            })
            await Audience.create({
                id: generateId(),
                clientId: adminClientId,
                name: `${HOST}:${CONNECT_PORT}`
            })
            console.log('migration done')
        }
        const ownerExists = await Role.findAll({ where: { name: OWNER_ROLE_NAME } })
        if(!ownerExists.length) {
            const ownerClientId = generateId({ length: 10, numeric: true })
            await Client.create({
                id: ownerClientId,
                secret: generateId(),
                issuer: `${HOST}:${CONNECT_PORT}`
            })
            const ownerRoleId = generateId()
            await Role.create({
                id: ownerRoleId,
                clientId: ownerClientId,
                name: OWNER_ROLE_NAME
            })

        }
        const userExists = await Role.findAll({ where: { name: USER_ROLE_NAME } })
        if(!userExists.length) {
            const userClientId = generateId({ length: 10, numeric: true })
            await Client.create({
                id: userClientId,
                secret: generateId(),
                issuer: `${HOST}:${CONNECT_PORT}`
            })
            const userRoleId = generateId()
            await Role.create({
                id: userRoleId,
                clientId: userClientId,
                name: USER_ROLE_NAME
            })
        }
    } catch(e) {
        console.log(e.message)
    }
}



module.exports = {
    migrate
}

