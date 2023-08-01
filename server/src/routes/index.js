const { Router } = require("express");
const routesUsers = require("./routesUsers");
const routesProducts = require("./routesProducts");
//comentario
const router = Router();
router.use("/users", routesUsers)
router.use("/products", routesProducts)

module.exports = router;
