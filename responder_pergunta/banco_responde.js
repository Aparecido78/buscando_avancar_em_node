const { Sequelize }= require("sequelize")
const connectar = require("../database/database")
const Responder = connectar.define("Responder",{
    id_pergunta:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    resposta:{
        type:Sequelize.STRING,
        allowNull: false
    }
})

Responder.sync({alter:true})

module.exports = Responder


