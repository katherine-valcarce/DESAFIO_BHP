import React from 'react'
import {Link} from "react-router-dom";
import casco from "../asset/casco.png"
import logo from "../asset/bhp-logo 2.png"

const identification = (props) => {
    const {user, setUser, position, setPosition} = props;
    // const saveData = (e) => {
    //     e.preventDefault()
    // }
    // const changeUser = (e) => { 
    //     setUser(e.target.event)
    // }

    return (
        <div className="containerDiv">
            <img className= "logo" src={logo} alt="logo"></img> 
            <div className= "bodyContainer">
            <h1 className='titleHome'> Identificación de Usuario </h1>
            <img src={casco} alt="casco"></img>
                    <div className= "inputDiv">
                    <input
                    className="IdPositionInput"
                    type="text"
                    name="name"
                    id="name"
                    value={user}
                    onChange= {(e) => setUser(e.target.value)}
                    placeholder='Nombre'
                    />
                    <input 
                    className="IdPositionInput"
                    type="text"
                    name="position"
                    id="position"
                    value={position}
                    onChange= {(e) => setPosition(e.target.value)}
                    placeholder='Rut'
                    />
                </div>
                <div class="form-check">
  <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
  <h2>Acepto términos y condiciones</h2>
</div>
 
                <Link to='/Menu'><button className = "btn-primary btn">INGRESAR</button> </Link>
            </div>
        </div>
    )
}
export default identification;
