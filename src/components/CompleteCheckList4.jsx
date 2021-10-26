import React from 'react'
import {Link} from "react-router-dom";
import AnchorPointCondition from './AnchorPointCondition';

const CompleteCheckList4 = ({additionOfAnchorPointConditions, anchorPointCondition}) => {
  
    const estadoDelArnesAux = [
        {id:1, pregunta:'¿Se visualiza alguna modificación del Punto de Anclaje?', respuesta:'no'},
        {id:2, pregunta:'¿El Punto de Anclaje a utilizar está identificado de color amarillo?', respuesta:'si'},
        {id:3, pregunta:'¿Se encuentra accesible el Punto de Anclaje a utilizar?', respuesta:'si'},
        {id:4, pregunta:'¿Existe deformación en alguno de los componentes (argolla, placa, perno, etc)?', respuesta:'no'}, 
        {id:5, pregunta:'¿Se encuentra instalada la Placa Identificadora que muestra el código, capacidad y estado de aprobación?', respuesta:'si'},
        {id:6, pregunta:'¿Esta placa cuenta con la fecha de validación, tipo y fijación del anclaje?', respuesta:'si'},
        {id:7, pregunta:'¿Se aprecian fisuras o golpes en el Punto de Anclaje?', respuesta:'no'},
       ];


    return (
        <div>

<ol>          {
                estadoDelArnesAux.map((condition) => {
                    return(
                          <AnchorPointCondition
                           key={condition.id}
                           condition={condition}
                           additionOfAnchorPointConditions={additionOfAnchorPointConditions}
                           anchorPointCondition={anchorPointCondition}
                            />
                    )
                    }
                    )
                    
                }
            </ol>
            <Link to='/results'><button>Finalizar</button></Link>
        </div>
    )
}

export default CompleteCheckList4
