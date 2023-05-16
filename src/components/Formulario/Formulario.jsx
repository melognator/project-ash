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
import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";
import entrenador from "../../assets/entrenador.png";
import pikachu from "../../assets/pikachu.png";
import Input from "../Input/Input";
import Detalle from "./Detalle";
import "./FormularioStyles.css"
import { docsURL } from "../../urls";

const Formulario = () => {
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
        <div className={styles.formbody}>
          <div className={styles.inputs}>
            <div>
              <h4>
                <img src={entrenador} alt="entrenador" />
                <span>Entrenador</span>
              </h4>
              <Input name="nombre" label="Nombre" />
              <Input name="apellido" label="Apellido" />
              <Input name="email" label="Email" type="email" />
            </div>
            <div>
              <h4>
                <img src={pikachu} alt="pikachu" />
                <span>Pokemon</span>
              </h4>
              <Input name="nombrePokemon" label="Nombre" />
              <Input name="tipoPokemon" label="Tipo" />
              <Input name="elementoPokemon" label="Elemento" />
              <Input name="alturaPokemon" label="Altura" />
              <Input name="edadPokemon" label="Edad" />
            </div>
          </div>
          <Detalle />
        </div>
      </section>
    </>
  );
};

export default Formulario;
