const mercadopago = require("mercadopago");
require("dotenv").config
mercadopago.configure({
  access_token: "PROD_ACCESS_TOKEN",
});


module.exports= {
    mercadopago
}


