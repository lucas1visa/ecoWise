const { Router } = require("express");
const {handlerMercadopago} = require("../handlers/handlersMercadoPago")
const  routesMercadoPago = Router();
routesMercadoPago.post("/mercadopago" , handlerMercadopago)

module.exports = routesMercadoPago

