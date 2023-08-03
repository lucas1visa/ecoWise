import React, { useEffect,  } from 'react';
import axios from 'axios';

const MPButton = ({product, user})=> {

  useEffect(() => {
    // La función async es necesaria ya que no podemos hacer operaciones asíncronas directamente en el nivel superior de useEffect
    const fetchCheckout = async () => {
      try {
        // Realizamos la solicitud HTTP a través de Axios
        const response = await axios.post('/api/checkout', {
          user,
          product,
        });

        const data = response.data;

        // data.global es el ID que Mercado Pago devuelve en su respuesta y que viene de nuestra ruta backend
        if (data.global) {
          const script = document.createElement('script'); // Aquí creamos la etiqueta de script vacía
          script.type = 'text/javascript'; // El tipo de script
          script.src = 'https://sdk.mercadopago.com/js/v2'; // El enlace donde está alojado el script
          script.setAttribute('data-preference-id', data.global); // Aquí configuramos el atributo data-preference-id con el ID que nos da la API de Mercado Pago
          document.body.appendChild(script); // Aquí lo agregamos al cuerpo de nuestra página

          const mp = new window.MercadoPago(import.meta.env.NEXT_PUBLIC_MP_PUBLIC_KEY, {
            locale: 'es-AR',
          });

          // La función ".checkout" crea la conexión entre el botón y la plataforma de Mercado Pago
          mp.checkout({
            preference: {
              id: data.global,
            },
            render: {
              container: '.cho-container',
              label: 'Pagar',
            },
          });
        }
      } catch (error) {
        console.error('Error al realizar la solicitud HTTP:', error);
      }
    };

    // Aquí simplemente ejecutamos la función fetchCheckout
    fetchCheckout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="cho-container"></div>;
}
export default MPButton;