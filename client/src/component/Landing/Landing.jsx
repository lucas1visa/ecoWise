import React from 'react'
import styles from './Landing.module.css'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
      <main className="container-fluid">
        <section className="row my-6">
          <div className="col-md-6">
            <div className="mb-4">
              <h1 className="display-4">EcoWise</h1>
              <h2>EcoWise</h2>
            </div>
            <div>
              <p>
                Esta app nace con el propósito de fomentar el cuidado del medio ambiente. Nuestro objetivo es lograr reemplazar la utilización del plástico de un solo uso comercializando productos con materiales alternativos sustentables. Desde EcoWise consideramos que cambiar hábitos cotidianos, es generar cambios para un futuro sostenible, logrando “contagiar” a otras personas para impulsar un movimiento mayor.
              </p>
              <Link to="/home" class="btn btn-outline-success">Log in</Link>
              <Link to="/home" class="btn btn-outline-success">Invitado</Link>
              <div>
              <Link to="/account/register/" class="btn btn-success">Sing in</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://economiasustentable.com/wp-content/uploads/2021/06/sustentabilidad-1000x562.jpg"
              alt=""
            />
          </div>
        </section>
      </main>
    );
  };

export default Landing