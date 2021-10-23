import React from 'react'
import {Link} from "react-router-dom";

const AnchorPointVerification = ({additionOfhArnessConditions}) => {
    return (
        <div>
            <h1>Verificación de Arnés y punto de anclaje</h1>
            <h2>¿Existe punto de anclaje verificado?</h2>
            <Link to='/checklist'><button>Sí</button></Link>
            <Link to='/menu'><button>No</button></Link>
        </div>
    )
}

export default AnchorPointVerification
