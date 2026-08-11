//-- arquivo:app.js
//@ Importaasbibliotecasearquivos
const express=require("express");
const router=require("./routes/routes");

//@ Configuraoservidor
const app=express();
const port=40000;
app.use(express.json());
app.use(router);

//@ Iniciaoservidor
app.listen(port, ()=> {
 console.log("App listeningat port${port}")

//--$
})
