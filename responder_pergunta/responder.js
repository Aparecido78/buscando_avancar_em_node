const Responder = require("./banco_responde")
const express = require("express")
const rota = express.Router()
const  Perguntar = require("../perguntas/peguntas")

rota.get("/pagina/respostas/:id", (req,res)=>{

    var id = req.params.id
    Perguntar.findOne({
        where:{id:id}
    }).then(pergu=>{
        Responder.findAll({
            where:{id_pergunta:pergu.id}
          
        }).then(per =>{
                 res.render("respostas/responder",{pergun:pergu, respostas:per})
            

        })
    })
})


rota.get("/pagina/perguntas",(req,res)=>{
    Perguntar.findAll().then(usu=>{
         res.render("perguntas/perguntar",{usuarios:usu})

    })
   
})
rota.post("/respondendo/pergunta", (req,res)=>{
    var texto = req.body.texto
    var id = req.body.id
   
    
        Responder.create({
        resposta:texto,
        id_pergunta:id
    }).then(()=>{
        Perguntar.findAll().then(usuarios=>{

            res.render("perguntas/perguntar",{usuarios:usuarios})

        })

    }).catch(()=>{
        res.redirect("/responder")
    })  
})
module.exports = rota

