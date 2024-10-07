const { Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3312,
})

try {

    sequelize.authenticate()
    console.log('Conectado ao MySQL!')

} catch(error) {
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize