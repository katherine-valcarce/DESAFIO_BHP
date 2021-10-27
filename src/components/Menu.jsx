import React from 'react'
import {Link} from "react-router-dom";
import logo from "../asset/bhp-logo 2.png"

const Menu = ({setArnesCondition,setAccessoriesCondition,setLifeRopeCondition,setAnchorPointCondition}) => {

    const stateReset = () => {
        setArnesCondition([{id:1, pregunta:'¿Se encuentra libre grasa, pinturas, etc?', respuesta:'si'}]);
        setAccessoriesCondition([{id:1, pregunta:'¿Los anillos en D presentan deformaciones?', respuesta:'no'}]);
        setLifeRopeCondition([{id:1, pregunta:'¿Se encuentran libres de grasa, pintura, etc?', respuesta:'si'}]);
        setAnchorPointCondition([{id:1, pregunta:'¿Se visualiza alguna modificación del Punto de Anclaje?', respuesta:'no'}]);
    }
    return (
        <div className = "containerDiv">
            <img className = "logo" src={logo} alt="logo"></img> 
            <div className= "bodyContainerMenu">
               <Link to='/calculator'>
                <div>
                    <button className= "btn-primary btnMenu">Calculadora de ELC</button></div>              
            </Link>
          
            <Link to='/verification'>
                <div><button className= "btn-primary btnMenu" 
                onClick={() => stateReset()}>
                Verificación de Arnés y punto de Anclaje</button>
                </div>
            </Link>
            </div>
            </div>
    )
}
export default Menu;