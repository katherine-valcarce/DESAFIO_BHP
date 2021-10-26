import React from 'react'
import ArnesCondition from './ArnesCondition';
import CompleteCheckList from './CompleteCheckList';

const CheckList = ({arnesCondition, additionOfArnesConditions}) => {
    const estadoDelArnes = [
        {id:1, pregunta:'¿Se encuentra libre grasa, pinturas, etc?', respuesta:'si'},
        {id:2, pregunta:'¿Tiene hebras cortadas o dañadas?', respuesta:'no'},
        {id:3, pregunta:'¿Presenta costuras deshilachadas?', respuesta:'no'},
        {id:4, pregunta:'¿Posee la placa de identificación?', respuesta:'si'}, 
        {id:5, pregunta:'¿Se encontraba correctamente almacenado?', respuesta:'si'},
        {id:6, pregunta:'¿Presenta cortes o desgarros?', respuesta:'no'},
        {id:7, pregunta:'¿Posee el tag de inspección CESMEC?', respuesta:'si'},
        {}
       ];
    
    
    return (
        <div>
            <h2>Verifica si el punto de anclaje cuenta con los siguientes requisitos:</h2>
            <br />
            <h4>Estado del Arnés</h4>
            <br/>
            <ol> { arnesCondition.length < 8 ?
                arnesCondition.map((condition) => {
                    return(
                          <ArnesCondition
                           key={condition.id}
                           condition={condition}
                           additionOfArnesConditions={additionOfArnesConditions}
                           estadoDelArnes={estadoDelArnes}
                            />
                    )
                    }
                    )
                    :
                <CompleteCheckList
                arnesCondition={arnesCondition}
                additionOfArnesConditions={additionOfArnesConditions}
                />
                }
            </ol>
        </div>
    )
}
export default CheckList;
