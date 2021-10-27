import React from "react";
import { Link } from "react-router-dom";
import CompleteCheckListItem from "./CompleteCheckListItem";

const CompleteCheckList4 = ({ estadoDelPuntoDeAnclaje, setChecklist }) => {
  estadoDelPuntoDeAnclaje.pop();
  const listOfQuestions = estadoDelPuntoDeAnclaje;

  return (
    <div>
      <ol>
        {listOfQuestions.map((condition) => {
          return (
            <CompleteCheckListItem key={condition.id} condition={condition} />
          );
        })}
      </ol>
      <div className="continueBtnDiv">
        <Link to="/results">
          <button className="continueBtn" onClick={() => setChecklist(true)}>
            FINALIZAR
          </button>
        </Link>
      </div>
    </div>
  );
};
export default CompleteCheckList4;
