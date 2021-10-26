import React from 'react'
import {Link} from "react-router-dom";
import Check from "../asset/check.png";
import Logo from "../asset/bhp-logo 2.png"
import Draw from "../asset/grafic.png";




const Results = ({estrobo, height, space, informationELC, onChangeinformationELC,checklist, setChecklist}) => {
    return (
        <>
            {checklist === true && informationELC === 'Estarás a salvo' ?
               <div>
                   <h2>¡CUMPLE CON LAS VERIFICACIONES DE SEGURIDAD!</h2>
                   <div>
                       <Link to='/doc'>
                           <button className="btn btn-primary">
                            Imprimir PDF
                           </button>
                       </Link>
                   </div>
                   <Link to='/'>
                       <div>
                           <button className="btn btn-primary">
                            Inicio
                           </button>
                       </div>
                   </Link>
               </div>
               :
                  checklist === false && informationELC === 'Estarás a salvo' ?
                   <>
                   <img className="logoDoc" src= {Logo} alt="logo" />
                   <div className="containerResult">

<h1 className="titleDoc3">
        Resultado
      </h1>
      <div className="containerImg"></div>
      <img className="resultGrapic"src={Draw} alt="Draw"></img>
                   <input className="inputResult"
                   type="text"
                   value={onChangeinformationELC(estrobo,height,space)}
                   />
                   <div className="checkResult">
                   <img className="checkIcon" src={Check} alt="check" /> 
                   <p className="textResult"> <u>
                   El resultado cumple con el estándar de seguridad </u> 
                    para terminar con el cumplimiento realice:
                   </p>
                   </div>
                   <Link to="/verification">
                   <button className="btn verification btn-primary">Verificación de arnés y punto de anclaje</button>
                   </Link>
                   </div>
               </>
               :
               checklist === false && informationELC === 'Estarás en peligro' ?
               <>
                   <input
                   type="text"
                   value={onChangeinformationELC(estrobo,height,space)}
                   />
                   <p>Contacte con su supervisor de faena y revise nuevamente la
                    seguridad de su equipamiento o realice los cálculos nuevamente.
                    </p>
                    <Link to='/calculator'>
                    <button>Calculadora</button>
                    </Link>
                   </>
                   :
                   checklist === true && (informationELC === '' || informationELC === 'Estarás en peligro') ?

                   <div className="containerDivResult">
                   <div className="resultContainer">
                    
                    <img className="remove" src={Check} alt="check" /> 
                    
                       <b className= "textModal">¡CUMPLE CON LAS VERIFICACIONES DE SEGURIDAD!</b>
                       <p className="textModal">Para cumplir con el estándar de seguridad realice el
                       cálculo de Espacio de Libre Caída
                        </p>
    
                   </div>
                   <Link to='/calculator'>
                    <button className="btn btn-primary">Calculadora</button>
                    </Link>
                   </div>
                   :
                   null
                

            }
        
        </>
    )
}

export default Results
