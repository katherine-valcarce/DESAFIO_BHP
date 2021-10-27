import React from "react";
import { Link } from "react-router-dom";
import CompleteCheckListItem from "./CompleteCheckListItem";

const CompleteCheckList3 = ({ estadoDeCuerdaDeVida }) => {
  estadoDeCuerdaDeVida.pop();
  const listOfQuestions = estadoDeCuerdaDeVida;

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
        <Link to="/checklist4">
          <button className="continueBtn">CONTINUAR</button>
        </Link>
      </div>
    </div>
  );
};

export default CompleteCheckList3;
