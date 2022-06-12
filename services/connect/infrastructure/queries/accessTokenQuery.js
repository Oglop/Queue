
const Client = require('../../application/models/client')
const Role = require('../../application/models/role')
const RoleUser = require('../../application/models/roleUser')
const Audience = require('../../application/models/audience')
const Scope = require('../../application/models/scope')

const getAccessTokenQuery = async (clientId, clientSecret) => {
    try {
        const client = await Client.findByPk(clientId)
        if(client != undefined && client.secret == clientSecret) {
            const audienceResult = await Audience.findAll({
                where: {
                    'clientId': client.dataValues.id
                }
            })
            const audience = []
            audienceResult.forEach(a => audience.push(a.name))
            const scopeResult = await Scope.findAll({
                where: {
                    'clientId': client.dataValues.id
                }
            })
            const scope = []
            scopeResult.forEach(s => scope.push(s.name))
            const claims = {
                issuer: client.issuer,
                audience,
                scope
            }
            return claims
        }

        throw 'unathorized'
    } catch (e) {
        throw e.message
    }
}

module.exports = {
    getAccessTokenQuery
}