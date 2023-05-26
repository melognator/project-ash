/**
 * ## usePokemonSpecies
 * Este custom Hook devuelve una query de React Query.  
 * 
 * Puedes pasarle los parámetros onSuccess y onError para que ejecuten funciones al dar una respuesta positiva o negativa.
 * @module usePokemonSpecies
 * @example
 * const { isLoading, isError, data, error, refetch } = usePokemonSpecies()
 * console.log(data.results)
 */

import { useQuery } from "@tanstack/react-query"
import { pokemonSpeciesURL } from "../urls"
import { useState } from "react"

const usePokemonSpecies = (onSuccess, onError) => {

    // const [nextURL, setNextURL] = useState(null)
    // const [prevURL, setPrevURL] = useState(null)
    const [actualURL, setActualURL] = useState(pokemonSpeciesURL)

    const getPokemonSpecies = () => (
        fetch(actualURL)
            .then(res => res.json())
    )


    const query = useQuery(["getPokemonSpecies", actualURL], getPokemonSpecies, {
        onSuccess,
        onError,
    })

    const prev = () => {
        if(query.data?.previous) {
            setActualURL(query.data.previous)
        }
    }
    const next = () => {
        if(query.data?.next) {
            setActualURL(query.data.next)
        }
    }


    return {query, prev, next}
}

export default usePokemonSpecies