import React from 'react'
import KindOfAnswer from './KindOfAnswer';
import CompleteCheckList from './CompleteCheckList';
import { Link } from "react-router-dom";
import logo from "../asset/bhp-logo 2.png"

const CheckList = ({arnesCondition, addingQuestions}) => {
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
        <div className="containerDiv">
        <img className= "logo" src={logo} alt="logo"></img>
        <div className= "checklistDiv">
            <h2 className= "h2Verif">VERIFICA SI EL PUNTO DE ANCLAJE CUENTA CON LOS SIGUIENTES REQUISITOS:</h2>
           <div className="boxDivChecklist">
            <h2 className= "h2Verif">ESTADO DEL ARNÉS</h2>
            <ol> { arnesCondition.length < 8 ?
                arnesCondition.map((condition) => {
                    return(
                        
                          <KindOfAnswer
                           key={condition.id}
                           condition={condition}
                           state={arnesCondition}
                           addingQuestions={addingQuestions}
                           data={estadoDelArnes}
                            />
                    )
                    }
                    )
                    :
                <div>
                    <CompleteCheckList
                    data={estadoDelArnes}
                    />
                    <div className="continueBtnDiv">
                                <Link to="/checklist2">
                                  <button className="continueBtn">CONTINUAR</button>
                                </Link>
                              </div>
                </div>
                }
            </ol>
        </div>
        </div>
        </div>
    )
}
export default CheckList;
