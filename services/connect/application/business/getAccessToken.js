var jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../../../config')
const { getAccessTokenQuery } = require('../../infrastructure/queries/accessTokenQuery')
const { getRoleByUserEmail } = require('../../infrastructure/queries/roleByUserQuery')

const getAccessToken = async (clientId, clientSecret, email) => {
    const id = await getAccessTokenQuery(clientId, clientSecret)
    const role = await getRoleByUserEmail(email)
    const token = jwt.sign({
        aud: id.audience,
        iss: id.issuer,
        scopes: id.scope
        }, SECRET_KEY, { expiresIn: 60 * 60 });
        
        return {
            token,
            role
        }
}

module.exports = {
    getAccessToken
}