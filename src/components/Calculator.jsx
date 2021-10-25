import React from 'react'
import {Link} from "react-router-dom";
import logo from "../asset/bhp-logo 2.png"

const Calculator = ({estrobo, setEstrobo, height, setHeight, space, setSpace, onChangeinformationELC}) => {

    

    const onChangeHeight = (event) => {
        setHeight(event.target.value);
    }

    const onChangeSpace = (event) => {
        setSpace(event.target.value);
    }

    const onChangeEstrobo = (event) => {
        setEstrobo(event.target.value);
    }

    return (
        <div className="container">
            <img className = "logo" src={logo} alt="logo" />
            <div className= "bodyContainerCalculator">
                <div className = "calculatorTitle">
            <h1>Cálculo de Espacio Libre de Caída</h1>
            <h2>Ingrese los datos solicitados</h2>
            </div>
            <form className ="calculatorForm" action="">
                <div>
                    <label htmlFor="estrobo">Longitud del Estrobo:</label>
                    <select 
                    name="estrobo" 
                    id="estrobo"
                    value={estrobo}
                    onChange={onChangeEstrobo}

                    >
                        <option>1.2</option>
                        <option>1.5</option>
                        <option>1.8</option>
                    </select>
                    
                </div>
                <div>
                    <label htmlFor="estatura">Estatura del trabajador:</label>
                    <input 
                    type="text"
                    name="estatura"
                    id="estatura"
                    value={height}
                    onChange={onChangeHeight}
                    />
                </div>
                <div> 
                    <div>
                    Elongación del Amortiguador de Impacto <p>(según NCh 1258/2; para Tipo 1:1.2m)</p>
                    </div>
                    <div>
                    Márgen de Seguridad <p>(según NCh1258/6 mayor o igual a 1m</p>
                    </div>
                    </div>
                <div>
                    <label htmlFor="espacioReal">Espacio real de terreno:</label>
                    <input 
                    type="text"
                    name="espacioReal"
                    id="espacioReal"
                    value={space} 
                    onChange={onChangeSpace}
                    
                    />
                </div>
              
            </form>
            <div>
            <Link to='/results'>
                <button
                className= "btn-primary btn"
                type="submit"
                onClick={() => onChangeinformationELC(estrobo,height,space) }
                >
                RESULTADO
                </button>
                </Link>
            </div>
        </div>
        </div>
    )
}
export default Calculator;
