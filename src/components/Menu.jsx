import React from 'react'
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <img></img>
            <Link to='/calculator'> <button>Calculadora de Espacio Libre de Caída</button> </Link>
            <Link to='/checklist'><button>Verificación de Arnés y Punto de Anclaje</button> </Link>
        </div>
    )
}
export default Menu;