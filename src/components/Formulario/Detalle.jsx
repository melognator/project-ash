/**
 * ## Componente Detalle
 * En este componente se muestran los datos del entrenador y pokemon ingresados en el formulario.
 * 
 * Este componente utiliza FormContext para obtener los datos del formulario.
 * @example
 * <Detalle />
 * @module Detalle
*/

import { useContext } from "react";
import { FormContext } from "../../context/ContextoFormulario";
import styles from "./Detalle.module.css"

const Detalle = () => {
    const { state } = useContext(FormContext)

    return (
        <div className={styles.formdetails}>
            <div className={styles.header}>
                <h3>Vista Previa de la Solicitud</h3>
            </div>
            <section className="datos-cliente">
                <h4>Datos del Entrenador</h4>
                <div className="fila">
                    <p>Nombre: {state.entrenador.nombre}</p>
                    <p>Apellido: {state.entrenador.apellido}</p>
                    <p>Email: {state.entrenador.email}</p>
                </div>
            </section>
            <section className="datos-cliente">
                <h4>Datos del Pokémon</h4>
                <div className="fila">
                    <p>Nombre: {state.pokemon.nombre}</p>
                    <p>Tipo: {state.pokemon.tipo}</p>
                    <p>Elemento: {state.pokemon.elemento}</p>
                    <p>Altura: {state.pokemon.altura}</p>
                    <p>Edad: {state.pokemon.edad}</p>
                </div>
            </section>
            <button
                className="boton-enviar"
                onClick={() => alert("Solicitud enviada :)")}
            >
                Enviar Solicitud
            </button>
        </div>
    );
};

export default Detalle;
