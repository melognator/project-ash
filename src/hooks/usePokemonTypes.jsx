/**
 * ## usePokemonTypes
 * Este custom Hook devuelve una query de React Query.  
 * 
 * Puedes pasarle los parámetros onSuccess y onError para que ejecuten funciones al dar una respuesta positiva o negativa.
 * @module usePokemonTypes
 * @example
 * const { isLoading, isError, data, error, refetch } = usePokemonTypes()
 * console.log(data.results)
 */

import { useQuery } from "@tanstack/react-query"
import { pokemonTypesURL } from "../urls"

const usePokemonTypes = (onSuccess, onError) => {

    const getPokemonTypes = () => (
        fetch(pokemonTypesURL)
            .then(res => res.json())
    )

    const query = useQuery(["getPokemonTypes"], getPokemonTypes, {
        onSuccess,
        onError,
        retry: false,
    })

    return query
}

export default usePokemonTypes