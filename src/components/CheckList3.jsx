import React from 'react'
import CompleteCheckList from './CompleteCheckList';
import { Link } from "react-router-dom";
import KindOfAnswer from './KindOfAnswer';
import logo from "../asset/bhp-logo 2.png"

const CheckList3 = ({lifeRopeCondition, addingQuestions}) => {
    const estadoDeCuerdaDeVida = [
        {id:1, pregunta:'¿Se encuentran libres de grasa, pintura, etc?', respuesta:'si'},
        {id:2, pregunta:'¿Están los ganchos en buen estado?', respuesta:'si'},
        {id:3, pregunta:'¿Presenta cortes en sus hebras?', respuesta:'no'},
        {id:4, pregunta:'¿Presenta costuras deshilachadas?', respuesta:'no'}, 
        {}
       ];
    
    
    return (
        <div className="containerDiv">
        <img className= "logo" src={logo} alt="logo"></img>
        <div className= "checklistDiv">
        <h2 className= "h2Verif">VERIFICA SI EL PUNTO DE ANCLAJE CUENTA CON LOS SIGUIENTES REQUISITOS:</h2>
        <div className="boxDivChecklist">
        <h2 className= "h2Verif">ESTADO DE LA CUERDA DE VIDA</h2>
            
            <ol> { lifeRopeCondition.length < 5 ?
                lifeRopeCondition.map((condition) => {
                    return(
                        <KindOfAnswer
                        key={condition.id}
                        condition={condition}
                        state={lifeRopeCondition}
                        addingQuestions={addingQuestions}
                        data={estadoDeCuerdaDeVida}
                         />
                    )
                    }
                    )
                    :
                    <div>
                    <CompleteCheckList
                    data={estadoDeCuerdaDeVida}
                    />
                    <div className="continueBtnDiv">
                            <Link to="/checklist4">
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
export default CheckList3;

