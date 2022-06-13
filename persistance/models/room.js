const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database')
class Room extends Model {

}

Room.init({
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'room'
})

module.exports = Room