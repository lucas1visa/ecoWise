import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container-fluid">
        <div className='row p-5 bg-dark text-white'>

          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className='h3'>ecoWise</p>
          </div>
          
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h5 mb-3">Contactos</p>
            <div>
            <a className='text-secondary text-decoration-none' href="">Facebook</a>
            </div>
            <div>
            <a className='text-secondary text-decoration-none' href="">Instagram</a>
            </div>
            <div>
            <a className='text-secondary text-decoration-none' href="">Gmail</a>
            </div>
            
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h5 mb-3">Tienda Online</p>
            <div>
            <a className='text-secondary text-decoration-none' href="">Quiero comprar</a>
            </div>
            <div>
            <a className='text-secondary text-decoration-none' href="">FAQ</a>
            </div>
          </div>

          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h5 mb-3">Metodos de Pago</p>
            <div>
            <a className='text-secondary text-decoration-none' href="">Mercado Pago</a>
            </div>
            <div>
            <a className='text-secondary text-decoration-none' href="">Tarjetas debito/credito</a>
            </div>
            
          </div>
          
        </div>
        <div>
            <a className='text-secondary text-decoration-none' href="">Terminos y condiciones / Devoluciones </a>
            </div>
           
      </div>
      
    </footer>
  );
};

export default Footer;
