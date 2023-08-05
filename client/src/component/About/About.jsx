import React from 'react';
import styles from './About.module.css';

 const About = () => {
    return (
        <div>
             <section className={styles.section}>
                <h1>App</h1>
            </section>
            <section className={styles.section}>
                <div className={styles.aboutMe}>
                    <h2 className={styles.title}>Objetivos de la App</h2>
                    <p className={styles.text}>
                        Los objetivos de la app es poder ayudar y consientizar a las personas para que utilize productos de origen sustentables
                        en la app es posible comprar los productos que aparecen y crearse un usuario otras funcionalidaes son poder buscar por preferencias
                        ej filtrar productos y ordenarlos por orden alfabetico por menos e valor precios. 
                    </p>
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.aboutMe}>
                    <h2 className={styles.title}>integranes y tecnologias empleadas</h2>
                    <p className={styles.text}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor sunt quaerat nam aspernatur iusto, molestias consectetur doloribus molestiae qui. Aspernatur tempore ad necessitatibus ducimus totam cumque quas, esse pariatur laborum.
                    </p>
                </div>
            </section>
            
        </div>
         
         
    );
};
export default About;