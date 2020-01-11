const Sequelize = require('sequelize');

const sequelize = new Sequelize('quotedb', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().then(
    function() {
        console.log('You are connected to the database')
    },
    function(err){
        console.log(err)
    }
)

module.exports = sequelize;