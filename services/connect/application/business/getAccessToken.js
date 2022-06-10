var jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../../../config')
const { getAccessTokenQuery } = require('../../infrastructure/queries/accessTokenQuery')

const getAccessToken = async (clientId, clientSecret) => {
    const id = await getAccessTokenQuery(clientId, clientSecret)
    const token = jwt.sign({
        aud: id.audience,
        iss: id.issuer,
        scopes: id.allowedScopes
        }, SECRET_KEY, { expiresIn: 60 * 60 });
        return token
}

module.exports = {
    getAccessToken
}