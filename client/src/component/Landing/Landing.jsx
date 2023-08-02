import React from 'react'
import styles from './Landing.module.css'

const Landing = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={styles.title}>
                    <h1>EcoWise</h1>
                    <h2>EcoWise</h2>
                </div>
                <div className={styles.summary}>
                    <div>
                        <p>
                        Esta app nace con el propósito de fomentar el cuidado del medio ambiente. Nuestro objetivo es lograr reemplazar la utilización del plástico de un solo uso comercializando productos con materiales alternativos sustentables.

Desde EcoWise consideramos que cambiar hábitos cotidianos, es generar cambios para un futuro sostenible, logrando “contagiar” a otras personas para impulsar un movimiento mayor.
                        </p>
                        <Link to="/home">Log in</Link> <Link to="/">Sign in</Link>
                    </div>
                </div>
            </section>
            <section className={styles.sectionImg}>
                <img
                    className={styles.img}
                    src="https://economiasustentable.com/wp-content/uploads/2021/06/sustentabilidad-1000x562.jpg"
                    alt=""
                />
            </section>
        </main>
    );
}

export default Landing