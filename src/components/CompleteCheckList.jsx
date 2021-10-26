import React from 'react'
import {Link} from "react-router-dom";
import ArnesCondition from './ArnesCondition';

const CompleteCheckList = ({arnesCondition, additionOfArnesConditions}) => {
  
    const estadoDelArnesAux = [
        {id:1, pregunta:'¿Se encuentra libre grasa, pinturas, etc?', respuesta:'si'},
        {id:2, pregunta:'¿Tiene hebras cortadas o dañadas?', respuesta:'no'},
        {id:3, pregunta:'¿Presenta costuras deshilachadas?', respuesta:'no'},
        {id:4, pregunta:'¿Posee la placa de identificación?', respuesta:'si'}, 
        {id:5, pregunta:'¿Se encontraba correctamente almacenado?', respuesta:'si'},
        {id:6, pregunta:'¿Presenta cortes o desgarros?', respuesta:'no'},
        {id:7, pregunta:'¿Posee el tag de inspección CESMEC?', respuesta:'si'},
       ];

    return (
        <div>
            <div></div>

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
            <div className="continueBtnDiv">
            <Link to='/checklist2'><button className= "continueBtn">Continuar</button></Link>
            </div>
        </div>
    )
}

export default CompleteCheckList
