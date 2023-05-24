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
import { useState } from "react"

const useHealthcareRequest = (onSuccess, onError) => {

    const [isError, setIsError] = useState(false)

    const handler = (response) => {
        if (response.ok) {
            setIsError(false)
            onSuccess(response)
        } else {
            onError(response)
            setIsError(true)
        }
    }

    const mutation = useMutation(data => fetch(postHealthcareRequestURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }), {
        onSuccess: handler,
        onError: handler,
    })

    return {...mutation, isError}
}

export default useHealthcareRequest