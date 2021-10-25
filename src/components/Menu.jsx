import React from 'react'
import {Link} from "react-router-dom";
import logo from "../asset/bhp-logo 2.png"

const Menu = () => {
    return (
        <div className= "container">
            <img className= "logo" src={logo} alt="logo"></img> 
            <div className= "bodyContainerMenu">
               <Link to='/calculator'>
                <div>
                    <button className= "btn-primary btnMenu">Calculadora de ELC</button></div>
            </Link>
            <Link to='/verification'>
                <div><button className= "btn-primary btnMenu">Verificación de Arnés y punto de Anclaje</button></div>
            </Link>
            </div>
        </div>
    )
}
export default Menu;