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
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import entrenador from "../../assets/entrenador.png";
import pokebola from "../../assets/pokebola.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import { docsURL } from "../../urls";
import SelectTipoPokemon from "../Select/SelectTipoPokemon";
import { FormContext, resetForm } from "../../context/ContextoFormulario";
import useHealthcareRequest from "../../hooks/useHealthcareRequest";
import FormAlert from "../Alert/FormAlert";
import SelectEspeciePokemon from "../Select/SelectEspeciePokemon";
import Layout from "../Layout/Layout";

const Formulario = () => {

    const initalState = {
        nombre: "",
        apellido: "",
        email: "",
        nombrePokemon: "",
        especiePokemon: "",
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

    useEffect(() => {
        resetFormulario()
    }, [])

    const handleSuccess = () => {
        doShowAlert()
        resetFormulario()
    }

    const handleError = (e) => {
        console.log("Ha ocurrido un error: " + e)
    }


    const formMutation = useHealthcareRequest(handleSuccess, handleError)

    const onSubmit = (e) => {
        e.preventDefault()
        formMutation.mutate(state)
        e.target.reset()
    }

    return (
        <>
            <section className={styles.formcontainer}>
                <h2>Solicitud de atención</h2>
                <p className={styles.formdescription}>
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
                            <SelectEspeciePokemon onChange={onChange} value={formState.especiePokemon} />
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
