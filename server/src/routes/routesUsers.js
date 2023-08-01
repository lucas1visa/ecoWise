const { Router } = require("express");
const {getUsers,postUsers,putUsers} = require("../handlers/handlersUsers")
const  routesUsers = Router();
routesUsers.get("/" ,getUsers)
routesUsers.post("/" ,postUsers)
routesUsers.put("/update",putUsers)
module.exports = routesUsers;
