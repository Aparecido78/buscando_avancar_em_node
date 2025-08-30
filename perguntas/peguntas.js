const { Sequelize } = require("sequelize")
const connectar = require("../database/database")
const Perguntar = connectar.define("Perguntar",{

    titulo:{
        type:Sequelize.STRING,
        allowNull:false
    },

    texto:{

        type:Sequelize.TEXT,
        allowNull: false
    }
})


Perguntar.sync({alter:true})
module.exports = Perguntar
