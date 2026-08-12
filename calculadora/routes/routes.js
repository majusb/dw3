const express = require("express");
const routerApp = express.Router();
const appCalculo = require("../controller/ctCalculadora");

routerApp.post("/soma", appCalculo.soma);
routerApp.post("/sub", appCalculo.sub);
routerApp.post("/mult", appCalculo.mult);
routerApp.post("/div", appCalculo.div);

module.exports = routerApp;

