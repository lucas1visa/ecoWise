const { Router } = require("express");

const routesCart = Router();


routesCart.get("/",handlersGetCart)
routesCart.post("/",handlersGetCart)
routesCart.put("/",handlersGetCart)


module.exports = routesCart