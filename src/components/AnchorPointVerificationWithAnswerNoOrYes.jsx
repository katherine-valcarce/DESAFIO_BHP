import React from "react";
import { Link } from "react-router-dom";
import Remove from "../asset/remove.png";

const AnchorPointVerificationWithAnswerNoOrYes = () => {
    return (
        <div>
        <div className="container">
          <div className="row">
            <div className="col">
            <Link to='/checklist'>
                <button className= "btn-primary btnPointVerif">
                    SÍ
                </button>
            </Link>
              <button
                className="btn-primary btnPointVerif"
                data-bs-toggle="modal"
                data-bs-target="#mi-modal-2"
              >
                NO
              </button>
              <div
                className="modal fade"
                id="mi-modal-2"
                tabindex="-1"
                aria-hidden="true"
                aria-labelledby="label-modal-2"
                data-bs-backdrop="static"
              >
              
                <div className="modal-dialog modal-dialog-centered">
                  {" "}
                 
                  <div className="modal-content">
                   
                    <div className="closedTag">
                      <Link to="/access">
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
                    <b className="modal-title text-center">¡ADVERTENCIA!</b>
                    <div className="modal-body text-center">
                      <b className="textModal">
                        NO CUMPLE CON LOS ESTÁNDARES DE SEGURIDAD.
                      </b>
                      <br/>
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
    )
}

export default AnchorPointVerificationWithAnswerNoOrYes
