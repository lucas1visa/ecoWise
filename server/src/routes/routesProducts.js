const { Router } = require("express");
const {getProducts, postProducts} = require("../handlers/handlersProducts")
const  routesProducts = Router();
routesProducts.get("/" ,getProducts)
routesProducts.post("/", postProducts)

module.exports = routesProducts;
