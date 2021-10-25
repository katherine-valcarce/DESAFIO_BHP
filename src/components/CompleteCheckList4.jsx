import React from 'react'
import {Link} from "react-router-dom";
import LifeRopeCondition from './LifeRopeCondition';

const CompleteCheckList4 = ({additionOfLifeRopeConditions, lifeRopeCondition}) => {
  
    const estadoDelArnesAux = [
        {id:1, pregunta:'¿Pregunta N°1?', respuesta:'no'},
        {id:2, pregunta:'¿Pregunta N°2?', respuesta:'si'},
        {id:3, pregunta:'¿Pregunta N°3?', respuesta:'si'},
        {id:4, pregunta:'¿Pregunta N°4?', respuesta:'no'}, 
        {id:5, pregunta:'¿Pregunta N°5?', respuesta:'si'},
        {id:6, pregunta:'¿Pregunta N°6?', respuesta:'no'},
        {id:7, pregunta:'¿Pregunta N°7?', respuesta:'si'},
       ];

    return (
        <div>

<ol>          {
                estadoDelArnesAux.map((condition) => {
                    return(
                          <LifeRopeCondition
                           key={condition.id}
                           condition={condition}
                           additionOfLifeRopeConditions={additionOfLifeRopeConditions}
                           lifeRopeCondition={lifeRopeCondition}
                            />
                    )
                    }
                    )
                    
                }
            </ol>
            <Link to='/checklist2'><button>Continuar</button></Link>
        </div>
    )
}

export default CompleteCheckList4
