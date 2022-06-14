var jwt = require('jsonwebtoken');
const { createRefreshToken } = require('./createRefreshToken')
const { createAccessToken } = require('./createAccessToken')
const { clientByUserId } = require('../../infrastructure/queries/clientByUserId')
const { getAccessTokenQuery } = require('../../infrastructure/queries/accessTokenQuery')

const refreshAccessToken = async (accessToken, refreshToken) => {
    const decodedAccessToken = jwt.decode(accessToken)
    const decodedRefreshToken = jwt.decode(refreshToken)
    if (decodedAccessToken.user != decodedRefreshToken.user) { throw Error('incompatable tokens') }
    if (decodedAccessToken.iss != decodedRefreshToken.iss) { throw Error('incompatable tokens') }
    const refreshData = await clientByUserId(decodedRefreshToken.user)
    const acceessData = await getAccessTokenQuery(refreshData.client.id, refreshData.client.secret)
    const newAccessToken = createAccessToken(refreshData.roleId, refreshData.userId, acceessData.audience, acceessData.issuer, acceessData.scope)
    const newRefreshjToken = createRefreshToken(refreshData.userId, acceessData.issuer)
    
    return { 
        accessToken: newAccessToken, 
        refreshToken: newRefreshjToken, 
        role: refreshData.role, 
        user: refreshData.user 
    }
}

module.exports = { refreshAccessToken }