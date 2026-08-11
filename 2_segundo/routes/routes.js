//-- arquivo:routes/routes.js
//@ Importaasbibliotecasearquivos

const express = require("express");
const routerApp = express.Router();
const appHello = require("../controller/ctlHello");

//@ Configuraasrotas
routerApp.get("/", appHello.hello);
routerApp.get("/helloUserGet/:nome", appHello.helloUserGet);
routerApp.post("/helloUserPost", appHello.helloUserPost);

//@ ExportaavariÆvelcomas rotas
module.exports =routerApp;
