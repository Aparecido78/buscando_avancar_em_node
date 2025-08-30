const express = require("express")

const Perguntar = require("./peguntas")

const rota = express.Router()


rota.get("/pagina/pergunta", (req,res)=>{
   res.render("fazer_pergunta")

})

rota.get("/perguntas", (req,res)=>{
    Perguntar.findAll().then(usu=>{

            res.render("perguntas/perguntar",{usuarios:usu})
            console.log(" sucesso! ")

        }).catch(()=>{
            res.redirect("/pagina/pergunta")
            console.log("algo deu errado!")
        })
})

rota.post("/pergunta", (req,res)=>{
    var titulo = req.body.titulo
    var texto = req.body.texto
    Perguntar.create({
        titulo:titulo,
        texto:texto
    }).then(()=>{
        Perguntar.findAll().then(usu=>{

            res.render("perguntas/perguntar",{usuarios:usu})
            console.log(" sucesso! ")

        }).catch(()=>{
            res.redirect("/pagina/pergunta")
            console.log("algo deu errado!")
        })

       

    }).catch(()=>{

        res.redirect("/pagina/pergunta")

    })
})



module.exports = rota






