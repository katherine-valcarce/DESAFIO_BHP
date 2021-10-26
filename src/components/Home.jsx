import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../asset/bhp-logo 2.png"
import warning from "../asset/warning.png"

const Home = () => {
    return (
        <div className="containerDiv">
            <img className= "logo" src={logo} alt="logo"/> 
            <div className = "bodyContainer">
            <h1 className='titleHome'>Guía de cumplimiento de Estándar Detección de Caídas</h1>
            <img src={warning} alt='warning'></img> <br/>
            <Link to="/identification"><button className=" btn btn-primary">
            INGRESAR</button></Link>
            </div>
        </div>
    )
}
export default Home; 