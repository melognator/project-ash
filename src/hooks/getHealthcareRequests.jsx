/**
 * ## getHealthcareRequests
 * Este custom Hook devuelve los datos de todas las solicitudes
 * 
 * Puedes pasarle los parámetros onSuccess y onError para que ejecuten funciones al dar una respuesta positiva o negativa.
 * @module getHealthcareRequests
 * @example
 * const { isLoading, isError, data, error, refetch } = getHealthcareRequests()
 * console.log(data.results)
 */

import { useQuery } from "@tanstack/react-query"
import { getHealthcareRequestURL } from "../urls"

const getHealthcareRequests = (onSuccess, onError) => {

    const fetchHealthcareRequests = () => (
        fetch(getHealthcareRequestURL)
            .then(res => res.json())
    )

    const query = useQuery(["getHealthcareRequests"], fetchHealthcareRequests, {
        onSuccess,
        onError,
        retry: false,
    })

    return query
}

export default getHealthcareRequests