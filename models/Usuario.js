const { DataTypes } = require('sequelize')
const db = require('../database/db')


const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
       
    },
    password: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.DECIMAL
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

module.exports = Usuario