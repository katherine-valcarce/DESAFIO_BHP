import React from 'react'
import CompleteCheckList3 from './CompleteCheckList3';
import LifeRopeCondition from './LifeRopeCondition';

const CheckList3 = ({lifeRopeCondition, additionOfLifeRopeConditions}) => {
    const estadoDeCuerdaDeVida = [
        {id:1, pregunta:'¿Se encuentran libres de grasa, pintura, etc?', respuesta:'si'},
        {id:2, pregunta:'¿Están los ganchos en buen estado?', respuesta:'si'},
        {id:3, pregunta:'¿Presenta cortes en sus hebras?', respuesta:'no'},
        {id:4, pregunta:'¿Presenta costuras deshilachadas?', respuesta:'no'}, 
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

