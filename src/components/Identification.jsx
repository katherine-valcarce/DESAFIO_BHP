import React from 'react'
import {Link} from "react-router-dom";
import casco from "../asset/casco.png"
import logo from "../asset/logo.png"

const identification = (props) => {
    const {user, setUser, position, setPosition} = props;
    // const saveData = (e) => {
    //     e.preventDefault()
    // }
    // const changeUser = (e) => { 
    //     setUser(e.target.event)
    // }

    return (
        <div>
            <img src={logo} alt="logo"></img> <br/>
            <img src={casco} alt="casco"></img>
            <h3>IDENTIFICACIÓN DE USUARIO</h3>
                    <div>
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    value={user}
                    onChange= {(e) => setUser(e.target.value)}
                    placeholder='Nombre'
                    />
                    <br/>
                    <input 
                    type="text"
                    name="position"
                    id="position"
                    value={position}
                    onChange= {(e) => setPosition(e.target.value)}
                    placeholder='Cargo'
                    />
                </div>
                
                <br/>
                <Link to='/Menu'><button>Ingresar</button> </Link>
        </div>
    )
}
export default identification;