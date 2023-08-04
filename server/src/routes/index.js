const { Router } = require("express");
const routesUsers = require("./routesUsers");
const routesProducts = require("./routesProducts");
const routesMercadoPago = require("./routesMercadoPago")
const router = Router();
router.use("/users", routesUsers)
router.use("/products", routesProducts)
router.use("/", routesMercadoPago)
module.exports = router;
