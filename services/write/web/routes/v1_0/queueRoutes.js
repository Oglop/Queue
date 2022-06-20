const express = require('express');
const router = express.Router();
const { copyObject } = require('../../../../../lib')
const commandSuccessfulBody = require('../../responses/commandSuccessfulBody')
const { validateAccessToken } = require('../../middleware/validateAccessToken')
const { jsonSchemaRequestValidation } = require('../../middleware/jsonSchemaValidation')
const { executeCommand } = require('../../../application/commands/commandsHandler')
const { queueSchema } = require('../../schemas').v1_0
const { QUEUE_WRITE } = require('../../../../../config').SCOPES
const { CREATE_QUEUE_v1_0 } = require('../../../common/enums').COMMANDS
const { scopeValidation } = require('../../middleware/scopeValidation')
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on(CREATE_QUEUE_v1_0, async (data, id) => {
    await executeCommand({
        command: CREATE_QUEUE_v1_0, 
        data, 
        id
    })
})

module.exports = router.post('/', jsonSchemaRequestValidation(queueSchema), validateAccessToken, scopeValidation([QUEUE_WRITE]), async (req, res, next) => {
    const id = generateId()
    eventEmitter.emit(CREATE_QUEUE_v1_0, req.body, id)
    const success = copyObject(commandSuccessfulBody)
    success.id = id
    success.message = 'created'
    success.time = new Date().toISOString()
    res.status(201).send(success)
});