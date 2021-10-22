import React from 'react'
import {Link} from "react-router-dom";

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
        <div>
            <h1>BHP</h1>
            <h2>Cálculo de Espacio Libre de Caída</h2>
            <h5>Ingrese los datos solicitados</h5>
            <form action="">
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
                <br/>
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
                <br/>
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
                <br/>
                <Link to='/results'>
                <button
                 type="submit"
                 onClick={() => onChangeinformationELC(estrobo,height,space) }
                 >
                Continuar
                 </button>
                 </Link>
            </form>
        </div>
    )
}
export default Calculator;


                  