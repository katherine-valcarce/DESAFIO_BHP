import React from 'react'
import logo from "../asset/bhp-logo 2.png"
import { Link } from 'react-router-dom';

const Calculator = ({ estrobo, setEstrobo, height, setHeight, space, setSpace, onChangeinformationELC }) => {



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
        <div className="containerDiv">
            <img className="logo" src={logo} alt="logo"></img>
            <div className="checklistDiv">
                <h2 ><strong>Cálculo de Espacio Libre de Caída</strong></h2>
                <h2>Ingrese los datos solicitados</h2>

                <form className="boxDivCalculator" >
                    <div class="container">
                        <div class="row align-items-start">
                            <div class="col-7">
                                <label className="calculatorFont" htmlFor="estrobo"><strong>Longitud del Estrobo:</strong></label>
                            </div>
                            <div class="col">
                                <select
                                    className="inputCalculator"
                                    name="estrobo"
                                    id="estrobo"
                                    value={estrobo}
                                    onChange={onChangeEstrobo}

                                    required>
                                    <option >1.2</option>
                                    <option >1.5</option>
                                    <option >1.8</option>
                                </select>
                            </div>
                            <div class="col">
                                <div className="calculatorFont" >
                                    <strong>m  </strong>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-7">
                                <label className="calculatorFont" htmlFor="estatura"><strong>Estatura del trabajador:</strong></label>
                            </div>
                            <div class="col">
                                <input
                                    className="inputCalculator"
                                    type="text"
                                    name="estatura"
                                    id="estatura"
                                    value={height}
                                    onChange={onChangeHeight}
                                    required />
                            </div>
                            <div class="col">
                                <div className="calculatorFont" >
                                    <strong>m  </strong>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-7">
                                <div className="calculatorFont">
                                    <strong>Elongación del Amortiguador de Impacto</strong> <p><small>(según NCh 1258/2; para Tipo 1:1.2m)</small></p>
                                </div>
                            </div>
                            <div class="col">
                                <div className="inputCalculatorWithoutBorder">
                                    <strong>1.2</strong>
                                </div>
                            </div>
                            <div class="col">
                                <div className="calculatorFont" >
                                    <strong>m  </strong>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-7">
                                <div className="calculatorFont" >
                                    <strong>Márgen de Seguridad</strong> <p><small>(según NCh 1258/6 mayor o igual a 1 m)</small></p>
                                </div>
                            </div>
                            <div class="col">
                                <div className="inputCalculatorWithoutBorder">
                                    <strong>1</strong>
                                </div>
                            </div>
                            <div class="col">
                                <div className="calculatorFont" >
                                    <strong>m  </strong>
                                </div>
                            </div>
                        </div>
                        <div class="row align-items-end">
                            <div class="col-7">
                                <label className="calculatorFont" htmlFor="espacioReal"><strong>Espacio real de terreno:</strong></label>
                            </div>
                            <div class="col">
                                <input
                                    className="inputCalculator"
                                    type="text"
                                    name="espacioReal"
                                    id="espacioReal"
                                    value={space}
                                    onChange={onChangeSpace}
                                    required />
                            </div>
                            <div class="col">
                                <div className="calculatorFont" >
                                    <strong>m  </strong>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="divBtnCalculator">
                        <Link to='/results'>
                            <button
                                className="btn-primary calculatorbtn"
                                type="submit"
                                onClick={() => onChangeinformationELC(estrobo, height, space)}
                            >
                                Continuar
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Calculator;