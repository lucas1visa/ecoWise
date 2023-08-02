const { Router } = require("express");
const {getProducts, postProducts, putProducts, deleteProduct,getProductByName,getProductById} = require("../handlers/handlersProducts")
const  routesProducts = Router();
routesProducts.get("/" ,getProducts)
routesProducts.get("/:id" ,getProductById)
routesProducts.get("/search", getProductByName);
routesProducts.post("/", postProducts)
routesProducts.put("/update", putProducts)
routesProducts.delete("/delete/:id", deleteProduct)


module.exports = routesProducts;
