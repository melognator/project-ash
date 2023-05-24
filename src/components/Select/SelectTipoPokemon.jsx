/**
 * ## Componente SelectTipoPokemon
 * Este componente renderiza un Select de los tipos de pokemon disponibles.  
 * Utiliza el custom hook `usePokemonTypes`.  
 * 
 * En caso de no encontrar tipos de pokemon disponibles, se reemplaza por un simple Input.
 * @module SelectTipoPokemon
 * @example
 * <SelectTipoPokemon />
 * 
 */
import React from 'react'
import Select from './Select'
import Input from '../Input/Input'
import usePokemonTypes from '../../hooks/usePokemonTypes'

const SelectTipoPokemon = ({required}) => {

    const { isLoading, isError, error, data } = usePokemonTypes()
    
    return (
        isError ? (
            <Input required={required} name="tipoPokemon"
            label="Tipo" />
        ) : (
            <Select
                required={required}
                name="tipoPokemon"
                label="Tipo" options={data?.results}
                isLoading={isLoading} placeholderText="Seleccione tipo..." />
        )
    )
}

export default SelectTipoPokemon