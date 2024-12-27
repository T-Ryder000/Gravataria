const Sequelize = require('sequelize')

const connection = new Sequelize('gravatariaking','root','98654321Thiago', {
  host: 'localhost',
  dialect:'mysql'
})

module.exports = connection;