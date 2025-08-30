const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const port = 40000
const connectar = require("./database/database")

const rota_pergunta = require("./perguntas/fazer_pergunta")

const rota_responder = require("./responder_pergunta/responder")

connectar.authenticate()
   .then(()=>{
    console.log("autenticação ok")


}).catch(()=>{
    console.log(" deu algum erro na coneção!")
    
})

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static("public"))
app.use("/",rota_responder)
app.use("/",rota_pergunta)

app.get("/",(req,res)=>{
    res.render("fazer_pergunta")
})

app.listen(port, ()=>{
    console.log(`porta aberta http://localhost:${port}`)
})
