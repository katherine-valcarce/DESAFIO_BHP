import React from 'react'
import {Link} from "react-router-dom";
import logo from "../asset/logo.png"

const Menu = () => {
    return (
        <div>
            <img src={logo} alt="logo"></img> <br/>
            <Link to='/calculator'><button>Calculadora de Espacio Libre de Caída</button></Link> <br/>
            <Link to='/checklist'><button>Verificación de Arnés y Punto de Anclaje</button></Link>
        </div>
    )
}
export default Menu;