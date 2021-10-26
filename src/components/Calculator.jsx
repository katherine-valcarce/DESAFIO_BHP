import React from 'react'
import logo from "../asset/logo.png"

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
            <img src={logo} alt="logo" />
            <h2>Cálculo de Espacio Libre de Caída</h2>
            <h5>Ingrese los datos solicitados</h5>
            <form action='/results' >
                <div>
                    <label htmlFor="estrobo">Longitud del Estrobo:</label>
                    <select 
                    name="estrobo" 
                    id="estrobo"
                    value={estrobo}
                    onChange={onChangeEstrobo}
                    required
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="1">1.2</option>
                        <option value="2">1.5</option>
                        <option value="3">1.8</option>
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
                    required
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
                    required
                    />
                </div>
                <br/>
                
                <input type="submit" value="Continuar" onClick={() => onChangeinformationELC(estrobo,height,space)}></input>
            </form>
        </div>
    )
}
export default Calculator;
