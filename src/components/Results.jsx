import React from "react";
import { Link } from "react-router-dom";
import Check from "../asset/check.png";
import Logo from "../asset/bhp-logo 2.png";
import Draw from "../asset/grafic.png";
import Remove from "../asset/remove.png";

const Results = ({
  estrobo,
  height,
  space,
  informationELC,
  onChangeinformationELC,
  checklist,
  setChecklist,
}) => {
  return (
    <>
    {checklist === true && informationELC === "Estarás a salvo" ? (
        <div className="containerDivResult" >
            <img className="remove" src={Check} alt="check" />
        <h1 className="text-center checkResult">
              CUMPLE CON LAS VERIFICACIONES DE SEGURIDAD
            </h1>
        <div>

            <div className="botonm">
            <Link to="/doc">
              <button className="btn btn-primary">Ver PDF</button>
            </Link>
          </div>
          <Link to="/">
            <div>
              <button className="btn btn-primary">Inicio</button>
            </div>
          </Link>
          </div>
        </div>
      ) : checklist === false && informationELC === "Estarás a salvo" ? (
        <>
          <img className="logoDoc" src={Logo} alt="logo" />
          <div className="containerResult">
            <h1 className="titleDoc3">Resultado</h1>
            <div className="containerImg"></div>
            <img className="resultGrapic" src={Draw} alt="Draw"></img>
            <input
              className="inputResult"
              type="text"
              value={onChangeinformationELC(estrobo, height, space)}
            />
            <div className="checkResult">
              <img className="checkIcon" src={Check} alt="check" />
              <p className="textResult">
                {" "}
                El resultado permite realizar el trabajo en altura. Para cumplir con el estándar de seguridad realice la <u> Verificación de Arnés y Punto de Anclaje</u>
               
              </p>
            </div>
            <Link to="/verification">
              <button className="btn verification btn-primary">OK</button>
            </Link>
          </div>
        </>
      ) : checklist === false && informationELC === "Estarás en peligro" ? (
        <>
        <img className="logoDoc" src={Logo} alt="logo" />
          <div className="containerResult">
            <h1 className="titleDoc3">Resultado</h1>
            <div className="containerImg"></div>
            <img className="resultGrapic" src={Draw} alt="Draw"></img>
          <input
            className="inputResult"
            type="text"
            value={onChangeinformationELC(estrobo, height, space)}
          />
          <div className="checkResult">
          <img className="checkIcon" src={Remove} alt="remove" />
          
          <p className="textResult">
            <strong>Contacte con su supervisor de faena. </strong> Revise nuevamente la seguridad
            de su equipamiento o realice los cálculos nuevamente.
          </p>
          
          </div>
          
          <Link to="/calculator">
          <button className="btn verification btn-primary">OK</button>
          </Link>
          </div>
        </>

      ) : checklist === true &&
        (informationELC === "" || informationELC === "Estarás en peligro") ? (
        <div className="containerDivResult">
          <div className="resultContainer">
            <img className="remove" src={Check} alt="check" />
            <div className="textModaldivBox">
            <b className="textModal">
              ¡CUMPLE CON LAS VERIFICACIONES DE SEGURIDAD!
            </b>
            <p className="textModal">
              Para cumplir con el estándar de seguridad realice el cálculo de
              Espacio de Libre Caída
            </p>
            </div>
          </div>
          <Link to="/calculator">
            <button className="btn btn-primary">OK</button>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Results;
