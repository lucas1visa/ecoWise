// Importamos el paquete de Mercado Pago instalado vía npm o yarn
const mercadopago = require("mercadopago");
// Función de componente de React
const handlerMercadopago=(req, res)=> {
  // Configuramos nuestra sesión de Mercado Pago, estableciendo el access token proporcionado por MP
  mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN,
  });

  // Obtenemos los datos necesarios de la solicitud (req)
  const { user, turno } = req.body; // o cualquier otra información necesaria

  // Creamos la "Preference" (Preferencia), esta es la configuración para el pago
  const preference = {
    // Esto siempre es true * REQUERIDO
    binary_mode: true,
    // Los datos del artículo por el cual el usuario debe pagar * REQUERIDO
    items: [
      {
        title: `${turno.service} - Nombre de la marca`,
        description: `Descripción del producto`,
        picture_url: "url de imagen",
        quantity: 1,
        currency_id: "currency needed (ARS, USD, etc)",
        unit_price: turno.price,
      }
    ],
    // Datos del usuario * REQUERIDO
    payer: {
      name: user.name,
      surname: user.name.split(" ")[1] || "TGB",
      email: user.email,
    },
    // Cuando el usuario finaliza el pago, dependiendo del estado del pago, será redirigido a diferentes URLs personalizadas
    back_urls: {
      success: "https://success.com",
      failure: "https://failure.com",
      pending: "https://pending.com",
    },
    // Esto siempre es "approved"
    auto_return: "approved",
  };
      
  // Configuramos la preferencia, es como enviarla a MP y luego su API devuelve un objeto de respuesta.
  // Solo necesitamos el ID de la preferencia, así que establecemos la respuesta a { global: response.body.id }.
  // Esto enviará un objeto literal donde podemos acceder al ID para nuestro botón en el frontend.
  mercadopago.preferences.create(preference)
    .then(function (response) {
      res.status(200).json({global: response.body.id});
    })
    .catch((error) => {
      // Si aparece un error, lo enviaremos en la respuesta.
      res.status(500).json({global: error});
    });
}
module.exports = {handlerMercadopago}
// IMPORTANTE
/*
  Este es el único código necesario, pero puedes guardar en tu base de datos todos los datos que necesites.
  Si esto no funciona, verifica tus claves de MP, tu archivo .env o las variables de entorno en tu implementación.
  En caso de no encontrar una solución a un supuesto error, abre un issue en este repositorio para que lo corrija en el futuro.
*/
