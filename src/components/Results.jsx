import React from 'react'
import {Link} from "react-router-dom";



const Results = ({estrobo, height, space, informationELC, onChangeinformationELC,checklist, setChecklist}) => {
    return (
        <div>
            {checklist === true && informationELC === 'Estarás a salvo' ?
               <div>
                   <h2>¡Cumple con la verificación de seguridad!</h2>
                   <div>
                       <Link to='/doc'>
                           <button>
                            Imprimir PDF
                           </button>
                       </Link>
                   </div>
                   <Link to='/'>
                       <div>
                           <button>
                            Inicio
                           </button>
                       </div>
                   </Link>
               </div>
               :
                  checklist === false && informationELC === 'Estarás a salvo' ?
                   <div>
                   <input
                   type="text"
                   value={onChangeinformationELC(estrobo,height,space)}
                   />
                   <p>Para cumplir con el estándar de seguridad
                    realice la verificación de arnés y punto de anclaje:
                   </p>
                   <Link to="/verification">
                   <button>verificación de arnés y punto de anclaje</button>
                   </Link>
               </div>
               :
               informationELC === 'Estarás en peligro' ?
               <div>
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
                   </div>
                   :
                   checklist === true && informationELC === '' ?
                   <div>
                       <h2>Cumple con las verificaciones de seguridad</h2>
                       <p>Para cumplir con el estándar de seguridad realice el
                       cálculo de Espacio de Libre Caída
                        </p>
                        <Link to='/calculator'>
                    <button>Calculadora</button>
                    </Link>
                   </div>
                   :
                   null
                

            }
        
        </div>
    )
}

export default Results


/* 
<div>
            {informationELC === 'Estarás a salvo' ?
            <div>
                <ResultsELC
                   estrobo={estrobo}
                   height={height}
                   space={space}
                   informationELC={informationELC}
                   onChangeinformationELC={onChangeinformationELC}
                 />
               </div>
             :
             <div>
                 <ResultsELC
                 estrobo={estrobo}
                 height={height}
                 space={space}
                 informationELC={informationELC}
                 onChangeinformationELC={onChangeinformationELC}
                />
                 <Link to='/calculator'>
                 <button>Realiza los calculos nuevamente</button>
                 </Link>
             </div>
            
        }
        
        </div> */