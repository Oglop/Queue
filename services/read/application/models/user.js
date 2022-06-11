const { Model, DataTypes } = require('sequelize')
const sequelize = require('../../infrastructure/persistance/database')

class User extends Model { }
User.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'user'
})

module.exports = User