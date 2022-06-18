const express = require('express');
const router = express.Router();
const { copyObject } = require('../../../../../lib')
const commandSuccessfulBody = require('../../responses/commandSuccessfulBody')
const { validateAccessToken } = require('../../middleware/validateAccessToken')
const { jsonSchemaRequestValidation } = require('../../middleware/jsonSchemaValidation')
const { generateId } = require('../../../../../lib')
const { appointmentSchema } = require('../../schemas').v1_0
const { executeCommand } = require('../../../application/commands/commandsHandler')
const { CREATE_APPOINTMENT } = require('../../../common/enums').COMMANDS
const EventEmitter = require('events')
const eventEmitter = new EventEmitter()


eventEmitter.on(CREATE_APPOINTMENT, async (data, id) => {
    await executeCommand({
        command: CREATE_APPOINTMENT, 
        data, 
        id
    })
})

module.exports = router.post('/',  validateAccessToken, async (req, res, next) => {
    const id = generateId()
    eventEmitter.emit(CREATE_APPOINTMENT, req.body, id)
    const success = copyObject(commandSuccessfulBody)
    success.id = id
    success.message = 'created'
    success.time = new Date().toISOString()
    res.status(201).send(success)
});
