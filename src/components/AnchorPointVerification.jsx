import React from 'react'
import {Link} from "react-router-dom";
import logo from "../asset/bhp-logo 2.png"

const AnchorPointVerification = ({additionOfhArnessConditions}) => {
    return (
        <div className = "containerDiv">
            <img className = "logo" src={logo} alt="logo"></img> 
            <div className= "bodyContainerMenu">
            <h1 className= "titleVerif">Verificación de Arnés y Punto de Anclaje</h1>
            <div className="boxDiv">
            <h2 className= "h2Verif">¿EXISTE PUNTO DE ANCLAJE VERIFICADO?</h2>
            <div>
            <Link to='/checklist'><button className= "btn-primary btnPointVerif">Sí</button></Link>
            <Link to='/menu'><button className= "btn-primary btnPointVerif" >No</button></Link>
            </div>
            </div>
        </div>
        </div>
    )
}

export default AnchorPointVerification
