/**
 * ## Componente Formulario
 * En este componente el usuario puede ingresar tanto sus datos como los de su Pokemon para poder realizar una solicitud.
 * 
 * Utiliza FormContext para guardar los datos en un estado global.
 * @module Formulario
 * @example
 * <Formulario />
 */

import styles from "./Formulario.module.css"
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import { docsURL } from "../../urls";
import SelectTipoPokemon from "../Select/SelectTipoPokemon";
import { FormContext, resetForm } from "../../context/ContextoFormulario";
import useHealthcareRequest from "../../hooks/useHealthcareRequest";

const Formulario = () => {

    const { state, dispatch } = useContext(FormContext)

    const handleSuccess = (response) => {
        dispatch(resetForm())
    }

    const handleError = (response) => {
        console.log(response)
    }

    const formMutation = useHealthcareRequest(handleSuccess, handleError)

    const onSubmit = (e) => {
        e.preventDefault()
        formMutation.mutate(state)
    }

    



    return (
        <>
            <header className={styles.header}>
                <Link to="/" className={styles.brand}>
                    <img src={pokebola} alt="pokebola" />
                    <h1>Centro Pokemon de Ash</h1>
                </Link>
                {/* <Link className="volver" to="/">
          Home
        </Link> */}
                <Link target="_blank" className={styles.link} to={docsURL}>
                    Documentación
                </Link>
            </header>
            <section className={styles.formcontainer}>
                <h2>Solicitud de atención</h2>
                <p>
                    ¡Bienvenido! Rellena los campos para que podamos <br />encargarnos de tu querido compañero de viaje
                </p>
                <form onSubmit={onSubmit} className={styles.formbody}>
                    <div className={styles.inputs}>
                        <div className={styles.group}>
                            <h4>
                                <img src={entrenador} alt="entrenador" />
                                <span>Entrenador</span>
                            </h4>
                            <Input required={true} name="nombre" label="Nombre" />
                            <Input required={true} name="apellido" label="Apellido" />
                            <Input required={true} name="email" label="Email" type="email" />
                        </div>
                        <div className={styles.group}>
                            <h4>
                                <img src={pikachu} alt="pikachu" />
                                <span>Pokemon</span>
                            </h4>
                            <Input required={true} name="nombrePokemon" label="Nombre" />
                            {/* <Input name="tipoPokemon" label="Tipo" /> */}
                            <SelectTipoPokemon required={true} />
                            {/* <Input name="elementoPokemon" label="Elemento" /> */}
                            <Input name="alturaPokemon" label="Altura" />
                            <Input name="edadPokemon" label="Edad" />
                        </div>
                    </div>
                    <Detalle {...formMutation} />
                </form>
            </section>
        </>
    );
};

export default Formulario;
