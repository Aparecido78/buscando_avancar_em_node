const { Sequelize } = require("sequelize")
const connectar = new Sequelize("fazer_perguntar","root","478432",{
    host:"localhost",
    dialect:"mysql"
})


module.exports = connectar



