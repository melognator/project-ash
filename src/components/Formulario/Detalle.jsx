/**
 * ## Componente Detalle
 * En este componente se muestran los datos del entrenador y pokemon ingresados en el formulario.
 * 
 * Este componente utiliza FormContext para obtener los datos del formulario.
 * @example
 * <Detalle />
 * @module Detalle
*/

import { useContext, useState } from "react";
import { FormContext, resetForm } from "../../context/ContextoFormulario";
import styles from "./Detalle.module.css"
import { useNavigate } from "react-router-dom";
import useHealthcareRequest from "../../hooks/useHealthcareRequest";

const Detalle = ({ isLoading, isError, isSuccess }) => {
    const { state, dispatch } = useContext(FormContext)
    const navigate = useNavigate()

    const renderMessage = () => {
        if (isError && !isLoading) {
            return <p style={{color: "red"}} className={styles.message}>Ha ocurrido un error</p>
        }
        if (isSuccess) {
            return <p style={{color: "forestgreen"}} className={styles.message}>Enviado. Pronto procesaremos su solicitud :)</p>
        }
    }

    return (
        <div className={styles.formdetails}>
            <div className={styles.header}>
                <h3>Vista Previa de la Solicitud</h3>
            </div>
            <div className={styles.body}>
                <section className="datos-cliente">
                    <h4>Datos del Entrenador</h4>
                    <div className="fila">
                        <p>Nombre: <i>{state.entrenador.nombre}</i></p>
                        <p>Apellido: <i>{state.entrenador.apellido}</i></p>
                        <p>Email: <i>{state.entrenador.email}</i></p>
                    </div>
                </section>
                <section className="datos-cliente">
                    <h4>Datos del Pokémon</h4>
                    <div className="fila">
                        <p>Nombre: <i>{state.pokemon.nombre}</i></p>
                        <p>Tipo: <i>{state.pokemon.tipo}</i></p>
                        {/* <p>Elemento: {state.pokemon.elemento}</p> */}
                        <p>Altura: <i>{state.pokemon.altura}</i></p>
                        <p>Edad: <i>{state.pokemon.edad}</i></p>
                    </div>
                </section>
                {renderMessage()}
                <button
                    className="button primary-button"
                    // onClick={handleSubmit}
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? "Enviando..." : "Enviar Solicitud"}
                </button>
            </div>
        </div>
    );
};

export default Detalle;
