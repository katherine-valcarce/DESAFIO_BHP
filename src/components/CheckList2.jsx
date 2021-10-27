import React from 'react'
import CompleteCheckList2 from './CompleteCheckList2';
import AccessoriesCondition from './AccessoriesCondition';
import logo from "../asset/bhp-logo 2.png"

const CheckList2 = ({accessoriesCondition, additionOfAccessoriesConditions}) => {
    const estadoDeAccesorios = [
        {id:1, pregunta:'¿Los anillos en D presentan deformaciones?', respuesta:'no'},
        {id:2, pregunta:'¿Están las hebillas en buen estado?', respuesta:'si'},
        {id:3, pregunta:'¿Mantiene los elementos plásticos?', respuesta:'si'},
        {id:4, pregunta:'¿Los elementos plásticos están en buen estado?', respuesta:'si'}, 
        {}
       ];
    
    
    return (
        <div className="containerDiv">
            <img className= "logo" src={logo} alt="logo"></img>
            <div className= "checklistDiv">
            <h2 className= "h2Verif">VERIFICA SI EL PUNTO DE ANCLAJE CUENTA CON LOS SIGUIENTES REQUISITOS:</h2>
            <div className="boxDivChecklist">
            <h2 className= "h2Verif">ESTADO DE LOS ACCESORIOS</h2>
            <ol> { accessoriesCondition.length < 5 ?
                accessoriesCondition.map((condition) => {
                    return(
                          <AccessoriesCondition
                           key={condition.id}
                           condition={condition}
                           additionOfAccessoriesConditions={additionOfAccessoriesConditions}
                           estadoDeAccesorios={estadoDeAccesorios}
                            />
                    )
                    }
                    )
                    :
                <CompleteCheckList2
                accessoriesCondition={accessoriesCondition}
                additionOfAccessoriesConditions={additionOfAccessoriesConditions}
                />
                }
            </ol>
        </div>
        </div>
        </div>
    )
}
export default CheckList2;

