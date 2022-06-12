const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../infrastructure/persistance/database')

class Scope extends Model {}
Scope.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    clientId: {
        type: DataTypes.STRING,
        references: 'client',
        referencesKey: 'id'
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'scope'
})

module.exports = Scope