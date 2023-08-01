const { Router } = require("express");
const routesUsers = require("./routesUsers")
//comentario
const router = Router();
router.use("/users", routesUsers)

module.exports = router;
