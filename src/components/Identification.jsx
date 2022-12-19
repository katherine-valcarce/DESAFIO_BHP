import React from 'react'
import casco from "../asset/casco.png"
import logo from "../asset/bhp-logo 2.png"

const Identification = ({ user, setUser, rut, setRut, terms, setTerms, setFieldValidation}) => {
    
    const validation = () => {
        if (user !== '' & rut !== '' & terms !=='' & terms !== false) {
            setFieldValidation(true);
        }
    }
 return(
<>
        
               <div className="containerDiv">
                <img className="logo" src={logo} alt="logo"></img>
                <div className="bodyContainer">
                    <h1 className='titleHome'> Identificación de Usuario </h1>
                    <img src={casco} alt="casco"></img>
                    <form className = "formIdentification" >
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
                            <input
                            class="form-check-input position-static"
                            type="checkbox" id="blankCheckbox"
                            checked={terms} 
                            onChange={(e) => setTerms(e.target.value)}
                            aria-label="..."
                            required
                            />
                            <h2>Acepto términos y condiciones</h2>
                        </div>
                       <button
                        type="submit"
                         className="btn-primary btn"
                         onClick={() => validation()}
                        >
                        INGRESAR
                        </button>
                       </form>
                       </div>
                       </div>
           
</>
)
}
export default Identification;
