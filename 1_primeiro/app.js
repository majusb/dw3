//@ Importaasbibliotecas
const express=require("express")
require("dotenv").config();

//@ Configuraoservidor
const app=express();
const port=process.env.PORT;

//@ Criaumarota parao endereoraiz.
app.get("/", (req,res) =>{
 res.send("Hello DW3!")
})

//@ Iniciaoservidor
app.listen(port, ()=> {
 console.log("Executando aaplicaªo:" ,process.env.APP_NAME);
 console.log("Example applistening onport:", port);
})
