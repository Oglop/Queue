const express = require('express');
const router = express.Router();
const { refreshAccessToken } = require('../../application/business/refreshAccessToken')
const { HOST, READ_PORT, WRITE_PORT } = require('../../../../config')
const { jsonSchemaRequestValidation } = require('../middleware/jsonSchemaValidation')
const { validateRefreshToken } = require('../middleware/validateRefreshToken')
const { refreshTokenSchema } = require('../schemas')

/**
 * [] body must have clientId
 * [] body must have clientSecret
 */
module.exports = router.post('/', jsonSchemaRequestValidation(refreshTokenSchema), validateRefreshToken, async (req, res, next) => {
    try {
        const { accessToken, refreshToken, role, user } = await refreshAccessToken(req.body.accessToken, req.body.refreshToken)

        res.status(200).send({
            readUri: `${HOST}:${READ_PORT}`,
            writeUri: `${HOST}:${WRITE_PORT}`,
            accessToken,
            refreshToken,
            role,
            user
        })
    } catch (e) {
        console.log(e.message)
        res.status(401).end()
    }
});