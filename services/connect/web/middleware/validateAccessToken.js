const { SECRET_KEY, HOST, CONNECT_PORT } = require('../../../../config')
const validateAccessToken = async (req, res, next) => {
    const authorizationHeader = req.headers.authorization
    if (authorizationHeader.contains('Bearer')) {
        const token = authorizationHeader.split(' ')[1]
        try {
            var decoded = jwt.verify(token, SECRET_KEY, { iss: `${HOST}:${CONNECT_PORT}`});
          } catch(err) {
            res.status(401).end()
          }
    } else {
        res.status(401).end()
    }

    
    next()
}

module.exports = {
    validateAccessToken
}