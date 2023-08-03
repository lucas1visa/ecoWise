const { Router } = require("express");
const routesUsers = require("./routesUsers");
const routesProducts = require("./routesProducts");
const routesMercadoPago = require("./routesMercadoPago")
//comentario
const router = Router();
router.use("/users", routesUsers)
router.use("/products", routesProducts)
router.use("/api", routesMercadoPago)
module.exports = router;
