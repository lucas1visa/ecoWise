const { Router } = require("express");
const {getProducts, postProducts, putProducts} = require("../handlers/handlersProducts")
const  routesProducts = Router();
routesProducts.get("/" ,getProducts)
routesProducts.post("/", postProducts)
routesProducts.put("/update", putProducts)

module.exports = routesProducts;
