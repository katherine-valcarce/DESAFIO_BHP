import React from "react";
import { Link } from "react-router-dom";
import Remove from "../asset/remove.png";


const AnchorPointConditionWithAnswerYes = ({
  condition,
  estadoDelPuntoDeAnclaje,
  additionOfAnchorPointConditions,
}) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {/*  Modal centrado de forma vertical */}
            <button
              className="btn btn-primary"
              onClick={() =>
                additionOfAnchorPointConditions(
                  condition.id,
                  estadoDelPuntoDeAnclaje
                )
              }
            >
              SI
            </button>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#mi-modal-2"
            >
              NO
            </button>
            <div
              class="modal fade"
              id="mi-modal-2"
              tabindex="-1"
              aria-hidden="true"
              aria-labelledby="label-modal-2"
              data-bs-backdrop="static"
            >
              {/* Obs. Con el atributo 'data-bs-backdrop="static"' obligamos a que sólo podamos cerrar el modal cliceando dentro de él */}
              {/* Caja de diálogo */}
              <div className="modal-dialog modal-dialog-centered">
                {" "}
                {/* modal-dialog-centered:centra verticalmente */}
                {/* Contenido de la caja */}
                <div className="modal-content">
                  {/* Encabezado de la caja */}
                  <div className="closedTag">
                    <Link to="/menu">
                      <button
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="cerrar"
                      ></button>
                    </Link>
                  </div>
                  <div className="modal-header">
                    <img className="remove" src={Remove} alt="remove" />
                  </div>
                  {/* Cuerpo de la caja */}
                  <b className="modal-title text-center">¡ADVERTENCIA!</b>
                  <div className="modal-body text-center">
                    <b className="textModal">
                      NO CUMPLE CON LOS ESTÁNDARES DE SEGURIDAD.
                    </b>
                    <br />
                    <p className="textModal">
                      <u>Contacte con supervisor de faena </u> y revise
                      nuevamente la seguridad de su equipamiento.
                    </p>
                  </div>
                  <div className="modal-footer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AnchorPointConditionWithAnswerYes;
