import React from 'react'
import {Link} from "react-router-dom";
import logo from "../asset/logo.png"

const Menu = ({setArnesCondition}) => {
    return (
        <div>
            <img src={logo} alt="logo"></img> <br/>
               <Link to='/calculator'>
                <div><button>Calculadora de ELC</button></div>
            </Link>
            <Link to='/verification'>
                <div><button  
                onClick={() => setArnesCondition([{id:1, pregunta:'¿Pregunta N°1?', respuesta:'si'}])}>
                Verificación de Arnés y punto de Anclaje</button>
                </div>
            </Link>
        </div>
    )
}
export default Menu;