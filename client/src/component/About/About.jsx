import React from 'react';
import {  Navbar } from '../Navbar/Navbar';

 const About = () => {
    return (
        <>
            <Navbar />
            <section >
                <h1>Acerca de mi y el proyecto</h1>
            </section>

            <section >
                <div >
                    <h2>Sobre Nosotros</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nisi animi adipisci quam non rerum magni quos repudiandae error dolores dolore neque nesciunt, itaque minima quia, qui ducimus sequi distinctio.
                    </p>
                </div>
            </section>

            <section>
                <div>
                    <h2>Sobre la App</h2>
                    <p>
                        En el bootcamp de Soy Henry, hice el proyecto
                        individual que consistía en crear una aplicación
                        fullstack usando la API de paises de manera local. La
                        aplicación está hecha con el stack React, Redux,
                        Express.js, postgreSQL y Sequelize. En las
                        funcionalidades esta crear actividades de todo tipo, filtrar
                        por poblacion, continente, orden alfabetico.
                    </p>
                </div>
            </section>
        </>
    );
};
export default About;