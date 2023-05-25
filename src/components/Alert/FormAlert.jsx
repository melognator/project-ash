/**
 * ## Componente FormAlert
 * Este componente sirve para decile al usuario que su petición fue exitosa.  
 * 
 * Tiene un par de botones, uno para volver al home y otro para cerrar la alerta. De todas formas al apretar fuera de la alerta la misma se cierra.
 * 
 * @example
 * <FormAlert show={show} backHome={() => navigate('/')} closeAlert={() => setShow(false)} />
 * @module FormAlert
*/


import React from 'react'
import styles from "./FormAlert.module.css"

const FormAlert = ({ show, backHome, closeAlert }) => {

    // Esto sirve para que no se cierre la alerta al apretar dentro de la misma.
    const alertOnClick = (e) => {
        e.stopPropagation()
    }

    return (
        <div onClick={closeAlert} className={`${styles.container} ${!show ? styles.hide : ""}`}>
            <div onClick={alertOnClick} className={styles.alert}>
                <h4>Enviado!</h4>
                <p>Pronto procesaremos su solicitud :)</p>
                <div className={styles.buttons}>
                    <button onClick={backHome} className="button primary-button">
                        Volver al Home
                    </button>
                    <button onClick={closeAlert} className="button outlined-button">
                        Nueva solicitud
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FormAlert