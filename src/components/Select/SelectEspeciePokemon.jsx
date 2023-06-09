/**
 * ## Componente SelectEspeciePokemon
 * Este componente renderiza un popup para seleccionar una especie de pokemon.  
 * Utiliza el custom hook `usePokemonSpecies`.  
 * 
 * @module SelectEspeciePokemon
 * @example
 * <SelectEspeciePokemon value={value} onChange={onChange} />
 */

import React, { useContext, useState } from 'react'
import styles from "./SelectEspeciePokemon.module.css"
import Input from '../Input/Input'
import usePokemonSpecies from '../../hooks/usePokemonSpecies'
import { capitalize } from './Select'
import { FormContext, updatePokemon } from '../../context/ContextoFormulario'
import { getPokemonIdFromUrl, getPokemonImageFromUrl } from '../../utils/pokemonUtils'

const SelectEspeciePokemon = ({ required, value, onChange }) => {
    const { dispatch } = useContext(FormContext)
    const [show, setShow] = useState(false)

    const closeSelect = () => {
        setShow(false)
    }

    const openSelect = (e) => {
        setShow(true)
    }

    const selectPokemon = (pokemon, pokemonId) => {
        const fakeEvent = { target: { name: 'especiePokemon', value: pokemon } }
        onChange(fakeEvent)
        dispatch(updatePokemon(fakeEvent.target.name, fakeEvent.target.value))
        dispatch(updatePokemon('pokemonId', pokemonId))
        closeSelect()
    }

    const inputOnChange = (e) => {
        e.preventDefault()
    }

    const { query, prev, next } = usePokemonSpecies()

    return (
        <>
            <Input className={styles.input} disableOnBlur={true} onClick={openSelect} name='especiePokemon' onChange={inputOnChange} value={value} label='Especie:' required={true} >
                <div className={`${styles.popup} ${!show ? styles.hidePopup : ""}`}>
                    <h4>Selecciona la especie...</h4>
                    {
                        query.data?.results ?
                            <section className={styles.pokemonList}>
                                {query.data?.results?.map(pokemon => (
                                    <article key={pokemon.name}>
                                        <button title={pokemon.name} onClick={() => selectPokemon(capitalize(pokemon.name), getPokemonIdFromUrl(pokemon.url))} type='button'>
                                            <img src={getPokemonImageFromUrl(pokemon.url)} alt="" />
                                        </button>
                                    </article>
                                ))}
                            </section>
                            :
                            <section className={styles.loading}>
                                <p>Cargando...</p>
                            </section>
                    }
                    <span className={styles.pageButtons}>
                        <button disabled={query.data?.previous == null} onClick={prev} type='button' className='button primary-button'>{"<"}</button>
                        {/* <button className='button primary-button'>{"Confirmar"}</button> */}
                        <button disabled={query.data?.next == null} onClick={next} type='button' className='button primary-button'>{">"}</button>
                    </span>
                </div>
            </Input>
            <div onClick={closeSelect} className={`${styles.overlay} ${!show ? styles.hideOverlay : ""}`}></div>
        </>
    )
}

export default SelectEspeciePokemon