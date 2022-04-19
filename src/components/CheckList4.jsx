import React from 'react'
import KindOfAnswer from './KindOfAnswer';
import CompleteCheckList from './CompleteCheckList';
import { Link } from "react-router-dom";
import logo from "../asset/bhp-logo 2.png";

const CheckList4 = ({anchorPointCondition, addingQuestions, setChecklist}) => {
    const estadoDelPuntoDeAnclaje = [
        {id:1, pregunta:'¿Se visualiza alguna modificación del Punto de Anclaje?', respuesta:'no'},
        {id:2, pregunta:'¿El Punto de Anclaje a utilizar está identificado de color amarillo?', respuesta:'si'},
        {id:3, pregunta:'¿Se encuentra accesible el Punto de Anclaje a utilizar?', respuesta:'si'},
        {id:4, pregunta:'¿Existe deformación en alguno de los componentes (argolla, placa, perno, etc)?', respuesta:'no'},
        {id:5, pregunta:'¿Se encuentra instalada la Placa Identificadora que muestra el código, capacidad y estado de aprobación?', respuesta:'si'},
        {id:6, pregunta:'¿Esta placa cuenta con la fecha de validación, tipo y fijación del anclaje?', respuesta:'si'},
        {id:7, pregunta:'¿Se aprecian fisuras o golpes en el Punto de Anclaje?', respuesta:'no'},
        {}
       ];
    return (
        <div className="containerDiv">
        <img className= "logo" src={logo} alt="logo"></img>
        <div className= "checklistDiv">
        <h2 className= "h2Verif">VERIFICA SI EL PUNTO DE ANCLAJE CUENTA CON LOS SIGUIENTES REQUISITOS:</h2>
        <div className="boxDivChecklist">
            <h2 className= "h2Verif">ESTADO DEL PUNTO DE ANCLAJE</h2>
            <br/>
            <ol> { anchorPointCondition.length < 8 ?
                anchorPointCondition.map((condition) => {
                    return(
                        <KindOfAnswer
                        key={condition.id}
                        condition={condition}
                        state={anchorPointCondition}
                        addingQuestions={addingQuestions}
                        data={estadoDelPuntoDeAnclaje}
                         />
                    )
                    }
                    )
                    :
                <div>
                    <CompleteCheckList
                    data={estadoDelPuntoDeAnclaje}
                    />
                    <div className="continueBtnDiv">
                            <Link to="/results">
                              <button className="continueBtn" onClick={() => setChecklist(true)}>
                                FINALIZAR
                              </button>
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
export default CheckList4;