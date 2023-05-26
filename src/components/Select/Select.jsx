/**
 * ## Componente Select
 * Componente para renderizar un contenedor con un texto descriptivo y un select.
 * 
 * Le tienes que pasar opciones.
 * @module Select
 */

import { useContext } from "react"
import { FormContext, updatePokemon } from "../../context/ContextoFormulario"

export const capitalize = (text) => {
    try {
        return text[0].toUpperCase() + text.substring(1)
    } catch (e) {
        return text
    }
}

/**
 * @param {object} props
 * @param {array} props.options Las opciones que va a renderizar el select
 * @param {string=} props.placeholderText `placeholde` del select
 * @param {string} props.name `name` del input, también define el `id`
 * @param {string=} props.label Texto descriptivo del select
 * @param {boolean=} props.isLoading
 */
const Select = ({ options, placeholderText, label, name, isLoading, required, value, onChange }) => {

    const LOADING_MSG = "Cargando..."

    const { dispatch } = useContext(FormContext)

    const handleChange = (e) => {
        onChange(e)
        dispatch(updatePokemon(e.target.name, e.target.value))
    }


    return (
        <div className="input-contenedor">
            <label htmlFor={name}>{label}</label>
            <select value={value} required={required} onChange={handleChange} name={name} disabled={isLoading}>
            { isLoading || !options ? 
                    <option value={""} disabled>{LOADING_MSG}</option>
                :
                <>
                    <option value={""} disabled>{placeholderText}</option>
                    {options.map(option => (
                        <option key={option.name} value={capitalize(option.name)}>{capitalize(option.name)}</option>
                    ))} 
                </>
            }
            </select>
        </div>
    )
}

export default Select