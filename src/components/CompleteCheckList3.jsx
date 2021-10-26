import React from 'react'
import {Link} from "react-router-dom";
import LifeRopeCondition from './LifeRopeCondition';

const CompleteCheckList3 = ({additionOfLifeRopeConditions, lifeRopeCondition}) => {
  
    const estadoDelArnesAux = [
        {id:1, pregunta:'¿Se encuentran libres de grasa, pintura, etc?', respuesta:'si'},
        {id:2, pregunta:'¿Están los ganchos en buen estado?', respuesta:'si'},
        {id:3, pregunta:'¿Presenta cortes en sus hebras?', respuesta:'no'},
        {id:4, pregunta:'¿Presenta costuras deshilachadas?', respuesta:'no'}, 

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
            <div className="continueBtnDiv">
            <Link to='/checklist4'><button className= "continueBtn">CONTINUAR</button></Link>
        </div>
        </div>
    )
}

export default CompleteCheckList3
