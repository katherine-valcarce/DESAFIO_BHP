import React from 'react'
import ArnesCondition from './ArnesCondition';
import CompleteCheckList from './CompleteCheckList';
import logo from "../asset/bhp-logo 2.png"

const CheckList = ({arnesCondition, additionOfArnesConditions}) => {
    const estadoDelArnes = [
        {id:1, pregunta:'¿Pregunta N°1?', respuesta:'si'},
        {id:2, pregunta:'¿Pregunta N°2?', respuesta:'no'},
        {id:3, pregunta:'¿Pregunta N°3?', respuesta:'no'},
        {id:4, pregunta:'¿Pregunta N°4?', respuesta:'si'}, 
        {id:5, pregunta:'¿Pregunta N°5?', respuesta:'si'},
        {id:6, pregunta:'¿Pregunta N°6?', respuesta:'no'},
        {id:7, pregunta:'¿Pregunta N°7?', respuesta:'si'},
        {}
       ];
    
    
    return (
        <div className="containerDiv">
        <img className= "logo" src={logo} alt="logo"></img>
        <div className= "checklistDiv">
            <h2 className= "h2Verif">VERIFICA SI EL PUNTO DE ANCLAJE CUENTA CON LOS SIGUIENTES REQUISITOS:</h2>
           <div className="boxDivChecklist">
            <h2 className= "h2Verif">ESTADO DEL ARNÉS</h2>
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
        </div>
        </div>
    )
}
export default CheckList;
