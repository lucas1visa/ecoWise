import React from 'react';
import ecoWise from '../Footer/EcoWise.jpg'


const Footer = () => {
  return (
    <footer className=" bg-dark text-white text-center py-0" >
      <div className="container-fluid">
        <div className='row p-3 bg-dark text-white'>

          <div className="col-xs-12 col-md-6 col-lg-3">
          <p></p>
          <p></p>
          <p></p>
            
          <img src={ecoWise} alt="ecoWise" className="w-50 h-30 rounded"/>
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
            <a className='text-secondary text-decoration-none' href="">Terminos y condiciones / Devoluciones </a>
          
        </div>
        <div>
            </div>
           
      </div>
      
    </footer>
  );
};

export default Footer;
