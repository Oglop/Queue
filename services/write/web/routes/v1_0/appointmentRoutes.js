const express = require('express');
const router = express.Router();
const { copyObject, generateId } = require('../../../../../lib')
const commandSuccessfulBody = require('../../responses/commandSuccessfulBody')
const { validateAccessToken } = require('../../middleware/validateAccessToken')
const { jsonSchemaRequestValidation } = require('../../middleware/jsonSchemaValidation')
const { error } = require('../../../../../logger')
const { appointmentSchema } = require('../../schemas').v1_0
const { executeCommand } = require('../../../application/commands/commandsHandler')
const { CREATE_APPOINTMENT } = require('../../../common/enums').COMMANDS
// const createAppointmentCommand = require('../../../application/commands/v1_0/createAppointmentCommand')

// const EventEmitter = require('events')
// const eventEmitter = new EventEmitter()


eventEmitter.on(CREATE_APPOINTMENT, async (data, id) => {
    await executeCommand({
        command: CREATE_APPOINTMENT, 
        data, 
        id
    })
})

module.exports = router.post('/', jsonSchemaRequestValidation(appointmentSchema),  validateAccessToken, async (req, res, next) => {
    try {
        // const result = await createAppointmentCommand.execute(req.body)
        const id = generateId()
        const result = await executeCommand({
            command: CREATE_APPOINTMENT, 
            data: req.body, 
            id
        })
        const success = copyObject(commandSuccessfulBody)
        success.id = id
        success.message = 'created'
        success.time = new Date().toISOString()
        res.status(201).send(success)
    } catch (e) {
        error(`message: ${e.message}`, __filename, 'post/', 'create')
        res.status(500).end()
    }
});
