import React from 'react'
import {Link} from "react-router-dom";
import LifeRopeCondition from './LifeRopeCondition';

const CompleteCheckList3 = ({additionOfLifeRopeConditions, lifeRopeCondition}) => {
  
    const estadoDelArnesAux = [
        {id:1, pregunta:'¿Pregunta N°1?', respuesta:'si'},
        {id:2, pregunta:'¿Pregunta N°2?', respuesta:'si'},
        {id:3, pregunta:'¿Pregunta N°3?', respuesta:'no'},
        {id:4, pregunta:'¿Pregunta N°4?', respuesta:'no'}, 

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

export default CompleteCheckList3
