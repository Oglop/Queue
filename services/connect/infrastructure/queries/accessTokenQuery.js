const Client = require('../../../../persistance/models/client')
const Audience = require('../../../../persistance/models/audience')
const Scope = require('../../../../persistance/models/scope')

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
            return {
                issuer: client.issuer,
                audience,
                scope
            }
        }

        throw 'unathorized'
    } catch (e) {
        throw e.message
    }
}

module.exports = {
    getAccessTokenQuery
}
