import React from 'react'
import casco from "../asset/casco.png"
import logo from "../asset/bhp-logo 2.png"

const identification = (props) => {
    const { user, setUser, rut, setRut } = props;

    // Funcion para el ingreso de rut

    return (
        <div className="containerDiv">
            <img className="logo" src={logo} alt="logo"></img>
            <div className="bodyContainer">
                <h1 className='titleHome'> Identificación de Usuario </h1>
                <img src={casco} alt="casco"></img>
                <form className = "formIdentification" action="/Menu">
                    <div className="inputDiv">

                        <input
                            className="IdPositionInput"
                            type="text"
                            name="name"
                            id="name"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder='Nombre'
                            required
                        />
                        <input
                            className="IdPositionInput"
                            type="text"
                            name="rut"
                            id="rut"
                            value={rut}
                            maxlength="12" max="12"
                            onChange={(e) => setRut(e.target.value)}
                            placeholder='Rut'
                            required
                        />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." required />
                        <h2>Acepto términos y condiciones</h2>
                    </div>
                    <input type="submit" value="INGRESAR" className="btn-primary btn"></input>
                </form>

            </div>
        </div>

    )
}
export default identification;
