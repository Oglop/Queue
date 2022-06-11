const Ajv = require("ajv")
const ajv = new Ajv()

const jsonSchemaRequestValidation = schema => {
    return (req, res, next) => {
        const valid = ajv.validate(schema, req.body)
        if (!valid) {
            const errors = []
            ajv.errors.forEach(e => {
                errors.push(e.message)
            })
            res.status(400).send({
                message: errors
            })
            return
        }
        next();
    }
}

module.exports = { jsonSchemaRequestValidation }
