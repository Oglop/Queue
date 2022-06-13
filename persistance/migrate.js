const sequalize = require('./database')
const User = require('./models/user')
const Client = require('./models/client')
const Role = require('./models/role')
//const RoleUser = require('./models/roleUser')
const Scope = require('./models/scope')
const Audience = require('./models/audience')
const { generateId } = require('../lib')
const { 
    HOST, 
    CONNECT_PORT, 
    READ_PORT, 
    WRITE_PORT,
    ADMIN_USER_NAME,
    ADMIN_USER_EMAIL,
    ADMIN_USER_PASSWORD,
    ADMIN_ROLE_NAME,
    ADMIN_SCOPE

} = require('../config')

const migrate = async () => {
    const userId = generateId()
    try {
        result = await User.findOrCreate({
            where: {
                name: ADMIN_USER_NAME
            },
            defaults: {
                id: userId,
                name: ADMIN_USER_NAME,
                email: ADMIN_USER_EMAIL,
                password: ADMIN_USER_PASSWORD
            }
        })
        const created = result[1]
        if (created) {
            console.log(`${ADMIN_USER_NAME} user was created`)
            const clientId = generateId({ length: 10, numeric: true })
            await Client.create({
                id: clientId,
                secret: generateId(),
                issuer: `${HOST}:${CONNECT_PORT}`
            })
            const roleId = generateId()
            await Role.create({
                id: roleId,
                clientId,
                name: ADMIN_ROLE_NAME
            })
            console.log(`${ADMIN_ROLE_NAME} role was created`)
            await RoleUser.create({
                id: generateId(),
                userId,
                roleId
            })
            await Scope.create({
                id: generateId(),
                clientId,
                name: ADMIN_SCOPE
            })
            console.log(`${ADMIN_SCOPE} scope was created`)
            await Audience.create({
                id: generateId(),
                clientId,
                name: `${HOST}:${READ_PORT}`
            })
            await Audience.create({
                id: generateId(),
                clientId,
                name: `${HOST}:${WRITE_PORT}`
            })
            await Audience.create({
                id: generateId(),
                clientId,
                name: `${HOST}:${CONNECT_PORT}`
            })
            console.log('migration done')
        }
    } catch(e) {
        console.log(e.message)
    }
}



module.exports = {
    migrate
}

