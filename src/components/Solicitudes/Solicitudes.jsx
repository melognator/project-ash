import React from 'react'
import styles from './Solicitudes.module.css'
import getHealthcareRequests from '../../hooks/getHealthcareRequests'
import SolicitudCard from '../SolicitudCard/SolicitudCard'

const Solicitudes = () => {

    const { isLoading, isError, data, error } = getHealthcareRequests()

    console.log(data)

    return (
        <section className={styles.section}>
            <h2>Solicitudes de atención</h2>
            {
                isLoading || !data ? 
                <p>Cargando...</p>
                :
                <section className={styles.container}>
                    {data.map(solicitud => (
                        <SolicitudCard key={solicitud.id} {...solicitud} />
                    ))}
                </section>
            }
            
        </section>
    )
}

export default Solicitudes