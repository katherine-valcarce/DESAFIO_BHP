import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../asset/logo.png"
import warning from "../asset/warning.png"

const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className ="col">
            <img src={logo} alt="logo"/> 
            <h1 className='titleHome'>Guía de cumplimiento de Estándar SDDC</h1>
            <img src={warning}></img> <br/>
            <Link to="/identification"><button className=" btn btn-primary">
            Ingresar</button></Link>
            </div>
            </div>
        </div>
    )
}
export default Home; 
