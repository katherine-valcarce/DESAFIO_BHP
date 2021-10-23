import React from 'react'
import Pregunta1 from "../asset/checklist/Pregunta1.png"
import Pregunta2 from "../asset/checklist/Pregunta2.png"
import Pregunta3 from "../asset/checklist/Pregunta3.png"
import Pregunta4 from "../asset/checklist/Pregunta4.png"
import monitoescalada from "../asset/monitoescalada.png"

const Doc = (props) => {
    const {user, position} = props;
    return (
        <div>           
            <h1> Nombre de usuario : {user} </h1>
            <h1> Nombre de cargo : {position} </h1>
            <h1> Fecha y hora de emisión :  </h1>
            <hr />
            <h1> CHECKLIST ARNÉS DE SEGURIDAD Y PUNTOS DE ANCLAJE</h1>
            <img src= {Pregunta1} alt= "pregunta1"></img>
            <img src= {Pregunta2} alt= "pregunta2"></img>
            <img src= {Pregunta3} alt= "pregunta3"></img>
            <img src= {Pregunta4} alt= "pregunta4"></img>
        <div>
            <h1>CALCULO DE ESPACIO LIBRE DE CAÍDA</h1>
            <div>
                <div>
                    <h2>LE = </h2>
                    <h2>EA = </h2>
                    <h2>ET =</h2>
                    <h2> MS =</h2>
                </div>
                <div>
                    <h2>El resultado del ELC permite realizar el trabajo en altura, de acuerdo al estándar</h2>
                </div>

                <img src= {monitoescalada} alt= "monitoEscalada"></img>
            </div>
            <div>
            <hr width= "300" size = "5"/>
            <h1>Firma y Timbre </h1>
            <h1> {user} </h1>
            <h1> {position} </h1>
            </div>
        </div>
        </div>
        
    )
}
export default Doc