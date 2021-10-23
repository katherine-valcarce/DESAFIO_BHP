import React from 'react'
import {Link} from "react-router-dom";

const Options = () => {
    return (
        <div>
            <Link to='/calculator'>
                <div><button>Calculadora de ELC</button></div>
            </Link>
            <Link>
                <div><button>Verificación de Arnés y punto de Anclaje</button></div>
            </Link>
        </div>
    )
}

export default Options
