const { Router } = require("express");
const routesUsers = require("./routesUsers");
const routesProducts = require("./routesProducts");
const routesMercadoPago = require("./routesMercadoPago")
const routesCart = require("./routesCart")
const router = Router();
router.use("/users", routesUsers)
router.use("/products", routesProducts)
router.use("/", routesMercadoPago)
router.use("/cart",routesCart)
module.exports = router;
