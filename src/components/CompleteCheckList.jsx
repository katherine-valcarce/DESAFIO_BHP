import React from 'react'
import {Link} from "react-router-dom";
import ArnesCondition from './ArnesCondition';

const CompleteCheckList = ({arnesCondition, additionOfArnesConditions}) => {
  
    const estadoDelArnesAux = [
        {id:1, pregunta:'¿Pregunta N°1?', respuesta:'si'},
        {id:2, pregunta:'¿Pregunta N°2?', respuesta:'no'},
        {id:3, pregunta:'¿Pregunta N°3?', respuesta:'no'},
        {id:4, pregunta:'¿Pregunta N°4?', respuesta:'si'}, 
        {id:5, pregunta:'¿Pregunta N°5?', respuesta:'si'},
        {id:6, pregunta:'¿Pregunta N°6?', respuesta:'no'},
        {id:7, pregunta:'¿Pregunta N°7?', respuesta:'si'}
       ];

    return (
        <div>

<ol>          {
                estadoDelArnesAux.map((condition) => {
                    return(
                          <ArnesCondition
                           key={condition.id}
                           condition={condition}
                           additionOfArnesConditions={additionOfArnesConditions}
                           estadoDelArnes={estadoDelArnesAux}
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

export default CompleteCheckList
