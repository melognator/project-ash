/**
 * ## Componente Formulario
 * En este componente el usuario puede ingresar tanto sus datos como los de su Pokemon para poder realizar una solicitud.
 * 
 * Utiliza FormContext para guardar los datos en un estado global.  
 * Se encarga de manejar el estado de los inputs y selects.  
 * @module Formulario
 * @example
 * <Formulario />
 */

import styles from "./Layout.module.css"
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import { docsURL } from "../../urls";

const Layout = ({children}) => {

    return (
        <>
            <header className={styles.header}>
                <Link to="/" className={styles.brand}>
                    <img src={pokebola} alt="pokebola" />
                    <h1>Centro Pokemon de Ash</h1>
                </Link>
                <nav>
                    <Link className={styles.link} to={'/formularioIngreso'}>
                        Formulario
                    </Link>
                    <Link className={styles.link} to={'/solicitudes'}>
                        Solicitudes
                    </Link>
                    <Link target="_blank" className={styles.link} to={docsURL}>
                        Documentación
                    </Link>
                </nav>
            </header>
            <main className={styles.container}>
                {children}
            </main>
        </>
    );
};

export default Layout;
