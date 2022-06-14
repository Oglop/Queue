const jwt = require('jsonwebtoken')

const refreshAccessToken = async (accessToken, refreshToken) => {
    const decodedAccessToken = jwt.decode(accessToken)
    const decodedRefreshToken = jwt.decode(refreshToken)
    if (decodedAccessToken.user != decodedRefreshToken.user) { throw Error('incompaitble tokens') }
    if (decodedAccessToken.iss != decodedRefreshToken.iss) { throw Error('incompaitble tokens') }

    
}

module.exports = { refreshAccessToken }