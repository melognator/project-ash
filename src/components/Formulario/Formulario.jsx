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

import styles from "./Formulario.module.css"
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import { docsURL } from "../../urls";
import SelectTipoPokemon from "../Select/SelectTipoPokemon";
import { FormContext, resetForm } from "../../context/ContextoFormulario";
import useHealthcareRequest from "../../hooks/useHealthcareRequest";
import FormAlert from "../Alert/FormAlert";

const Formulario = () => {

    const initalState = {
        nombre: "",
        apellido: "",
        email: "",
        nombrePokemon: "",
        tipoPokemon: "",
        alturaPokemon: "",
        edadPokemon: "",
    }

    const navigate = useNavigate()
    const { state, dispatch } = useContext(FormContext)
    const [formState, setFormState] = useState(initalState)
    const [showAlert, setShowAlert] = useState(false)

    const onChange = (e) => {
        setFormState(state => ({...state, [e.target.name]: e.target.value}))
    };

    const doShowAlert = () => {
        setShowAlert(true)
    }

    const closeAlert = () => {
        setShowAlert(false)
    }
    
    const backHome = () => {
        closeAlert()
        navigate('/')
    }

    const resetFormulario = () => {
        setFormState(initalState)
        dispatch(resetForm())
    }

    const handleSuccess = (response) => {
        doShowAlert()
        resetFormulario()
    }

    const handleError = (response) => {
        console.log(response)
    }

    const formMutation = useHealthcareRequest(handleSuccess, handleError)

    const onSubmit = (e) => {
        e.preventDefault()
        formMutation.mutate(state)
        e.target.reset()
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
                    <div>
                        <div className={styles.group}>
                            <h4>
                                <img src={entrenador} alt="entrenador" />
                                <span>Entrenador</span>
                            </h4>
                            <Input value={formState.nombre} onChange={onChange} required={true} name="nombre" label="Nombre" />
                            <Input value={formState.apellido} onChange={onChange} required={true} name="apellido" label="Apellido" />
                            <Input value={formState.email} onChange={onChange} required={true} name="email" label="Email" type="email" />
                        </div>
                        <div className={styles.group}>
                            <h4>
                                <img src={pikachu} alt="pikachu" />
                                <span>Pokemon</span>
                            </h4>
                            <Input value={formState.nombrePokemon} onChange={onChange} required={true} name="nombrePokemon" label="Nombre" />
                            {/* <Input name="tipoPokemon" label="Tipo" /> */}
                            <SelectTipoPokemon value={formState.tipoPokemon} onChange={onChange} required={true} />
                            {/* <Input name="elementoPokemon" label="Elemento" /> */}
                            <Input value={formState.alturaPokemon} onChange={onChange} name="alturaPokemon" label="Altura" />
                            <Input value={formState.edadPokemon} onChange={onChange} name="edadPokemon" label="Edad" />
                        </div>
                    </div>
                    <Detalle {...formMutation} state={state} />
                </form>
            </section>
            <FormAlert show={showAlert} backHome={backHome} closeAlert={closeAlert} />
        </>
    );
};

export default Formulario;
