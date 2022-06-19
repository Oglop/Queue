const express = require('express');
const router = express.Router();
const { copyObject } = require('../../../../../lib')
const commandSuccessfulBody = require('../../responses/commandSuccessfulBody')
const { validateAccessToken } = require('../../middleware/validateAccessToken')
const { jsonSchemaRequestValidation } = require('../../middleware/jsonSchemaValidation')
const addQueueCommand = require('../../../application/commands/v1_0/addQueueCommand')
const { queueSchema } = require('../../schemas').v1_0

module.exports = router.post('/', jsonSchemaRequestValidation(queueSchema), validateAccessToken, async (req, res, next) => {
    const result = await addQueueCommand.execute(req)
    const success = copyObject(commandSuccessfulBody)
    success.id = result.id
    success.message = result.message
    success.time = new Date().toISOString()
    res.status(201).send(success)
});