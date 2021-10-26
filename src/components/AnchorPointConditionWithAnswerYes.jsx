import React from 'react'
import {Link} from "react-router-dom";

const AnchorPointConditionWithAnswerYes = ({condition,estadoDelPuntoDeAnclaje,additionOfAnchorPointConditions }) => {
    return (
        <div>
            <div className="container">
          <div className="row">
            <div className="col">
              {/*  Modal centrado de forma vertical */}
              <button
                className="btn btn-primary"
                onClick={() => additionOfAnchorPointConditions(condition.id, estadoDelPuntoDeAnclaje)}
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
                <div class="modal-dialog modal-dialog-centered">
                  {" "}
                  {/* modal-dialog-centered:centra verticalmente */}
                  {/* Contenido de la caja */}
                  <div class="modal-content">
                    {/* Encabezado de la caja */}
                    <div class="modal-header">
                      <h5 class="modal-title">Título del modal</h5>
                      <Link to='/menu'>
                      <button
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="cerrar"
                        
                      ></button>
                      </Link>
                    </div>
                    {/* Cuerpo de la caja */}
                    <div class="modal-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sed delectus esse fugiat quam culpa asperiores quo
                        deleniti numquam quas laboriosam.
                      </p>
                    </div>
                    
                    <div class="modal-footer">
                    <Link to='/menu'>
                      <button
                        type="button"
                        class="btn btn-light"
                        data-bs-dismiss="modal"
                       
                      >
                        De acuerdo
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default AnchorPointConditionWithAnswerYes
