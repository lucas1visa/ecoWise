const { Router } = require("express");
const {getProducts, postProducts, putProducts, deleteProduct} = require("../handlers/handlersProducts")
const  routesProducts = Router();
routesProducts.get("/" ,getProducts)
routesProducts.post("/", postProducts)
routesProducts.put("/update", putProducts)
routesProducts.delete("/delete/:id", deleteProduct)

module.exports = routesProducts;
