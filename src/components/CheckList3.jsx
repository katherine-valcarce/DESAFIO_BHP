import React from 'react'
import CompleteCheckList3 from './CompleteCheckList3';
import LifeRopeCondition from './LifeRopeCondition';

const CheckList3 = ({lifeRopeCondition, additionOfLifeRopeConditions}) => {
    const estadoDeCuerdaDeVida = [
        {id:1, pregunta:'¿Pregunta N°1?', respuesta:'si'},
        {id:2, pregunta:'¿Pregunta N°2?', respuesta:'si'},
        {id:3, pregunta:'¿Pregunta N°3?', respuesta:'no'},
        {id:4, pregunta:'¿Pregunta N°4?', respuesta:'no'}, 
        {}
       ];
    
    
    return (
        <div>
            <h2>Verifica si el punto de anclaje cuenta con los siguientes requisitos:</h2>
            <br />
            <h4>Estado de la cuerda de vida</h4>
            <br/>
            <ol> { lifeRopeCondition.length < 5 ?
                lifeRopeCondition.map((condition) => {
                    return(
                          <LifeRopeCondition
                           key={condition.id}
                           condition={condition}
                           additionOfLifeRopeConditions={additionOfLifeRopeConditions}
                           estadoDeCuerdaDeVida={estadoDeCuerdaDeVida}
                            />
                    )
                    }
                    )
                    :
                <CompleteCheckList3
                lifeRopeCondition={lifeRopeCondition}
                additionOfLifeRopeConditions={additionOfLifeRopeConditions}
                />
                }
            </ol>
        </div>
    )
}
export default CheckList3;

