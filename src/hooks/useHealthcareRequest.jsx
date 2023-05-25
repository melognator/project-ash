/**
 * ## useHealthcareRequest
 * Este custom Hook devuelve una mutación de React Query a la que podemos llamar usando `mutate` para ejecutar el POST request de una solicitud de atención.
 * 
 * @module useHealthcareRequest
 * @example
 * const { isLoading, isError, isSuccess, mutate } = useHealthcareRequest()
 * <button onClick={mutate({ entrenador: "Ash", pokemon: "Pikachu" })}>Clickeame!</button>
 */

import { useMutation } from "@tanstack/react-query"
import { postHealthcareRequestURL } from "../urls"

const useHealthcareRequest = (onSuccess, onError) => {

    const mutation = useMutation(data => fetch(postHealthcareRequestURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(res => {
            if(res.ok) {
                return res.json()
            } else {
                throw new Error("Error " + res.status + " " + res.statusText)
            }
        })
        , {
            onSuccess: onSuccess,
            onError: onError,
        })

    return { ...mutation }
}

export default useHealthcareRequest