/**
 * ## Componente Input
 * Componente para renderizar un contenedor con un texto descriptivo y un input. 
 * 
 * Se necesita pasarle el estado y una función onChange para que maneje el estado.
 * @module Input
 * @example
 * <Input value={value} onChange={onChange} name="nombre" label="Nombre: " />
 * 
 */

import { useContext, useEffect, useState } from "react";
import { FormContext, updateEntrenador, updatePokemon } from "../../context/ContextoFormulario";
import PropTypes from 'prop-types';
import "./InputStyles.css";


/**
 * 
 * @param {object} props
 * @param {string} props.value Valor del input
 * @param {function} props.onChange Función onChange del input, para manejar el estado
 * @param {string} props.name `name` del input, también define el `id`
 * @param {string=} props.label Texto descriptivo del input
 * @param {string=} props.type Tipo del input, por defecto `text`
 * @param {boolean=} props.required
 * 
 */
const Input = ({ value, onChange, name, label, type = "text", required, readOnly, onClick, children, disableOnBlur }) => {
    const { dispatch } = useContext(FormContext)

    const onBlur = (e) => {
        e.preventDefault();
        if(!disableOnBlur) {
            if(e.target.name.includes("Pokemon")) {
                dispatch(updatePokemon(e.target.name, e.target.value))
            } else {
                dispatch(updateEntrenador(e.target.name, e.target.value))
            }
        }
    };

    return (
        <div className="input-contenedor">
            <label htmlFor={name}>{label}</label>
            <div className="input">
                <input
                    onClick={onClick}
                    readOnly={readOnly}
                    required={required}
                    autoComplete="off"
                    type={type}
                    value={value}
                    name={name}
                    id={name}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {children}
            </div>
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    type: PropTypes.string,
}

export default Input;
