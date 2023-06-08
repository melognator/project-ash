import React from 'react'
import styles from './SolicitudCard.module.css'
import { getPokemonImage } from '../../utils/pokemonUtils'

const SolicitudCard = ({ id, entrenador, pokemon }) => {
    return (
        <article className={styles.card}>
            <div className={styles.pokemonImage}>
                <img src={getPokemonImage(pokemon.pokemonId)} alt={pokemon.especie} />
                <div>
                    <h3>{pokemon.nombre}</h3>
                    <p>({pokemon.especie})</p>
                </div>
            </div>
            <div className={styles.pokemonInfo}>
                <p><b>Nombre:</b> {pokemon.nombre}</p>
                <p><b>Especie:</b> {pokemon.especie}</p>
                <p><b>Tipo:</b> {pokemon.tipo}</p>
                <p><b>Edad:</b> {pokemon.edad}</p>
                <p><b>Altura:</b> {pokemon.altura}</p>
            </div>
            <hr />
            <p>Solicitado por <b>{entrenador.nombre} {entrenador.apellido}</b></p>
        </article>
    )
}

export default SolicitudCard