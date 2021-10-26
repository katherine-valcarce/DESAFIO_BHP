import React from 'react'
import {Link} from "react-router-dom";
import AccessoriesCondition from './AccessoriesCondition';

const CompleteCheckList2 = ({additionOfAccessoriesConditions, accessoriesCondition}) => {
  
    const estadoDelArnesAux = [
        {id:1, pregunta:'¿Los anillos en D presentan deformaciones?', respuesta:'no'},
        {id:2, pregunta:'¿Están las hebillas en buen estado?', respuesta:'si'},
        {id:3, pregunta:'¿Mantiene los elementos plásticos?', respuesta:'si'},
        {id:4, pregunta:'¿Los elementos plásticos están en buen estado?', respuesta:'si'}, 

       ];

    return (
        <div>

<ol>          {
                estadoDelArnesAux.map((condition) => {
                    return(
                          <AccessoriesCondition
                           key={condition.id}
                           condition={condition}
                           additionOfAccessoriesConditions={additionOfAccessoriesConditions}
                           accessoriesCondition={accessoriesCondition}
                            />
                    )
                    }
                    )
                    
                }
            </ol>
            <Link to='/checklist3'><button>Continuar</button></Link>
        </div>
    )
}

export default CompleteCheckList2
