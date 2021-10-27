import React from "react";
import { Link } from "react-router-dom";
import CompleteCheckListItem from "./CompleteCheckListItem";

const CompleteCheckList2 = ({ estadoDeAccesorios }) => {
  estadoDeAccesorios.pop();
  const listOfQuestions = estadoDeAccesorios;

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
        <Link to="/checklist3">
          <button className="continueBtn">CONTINUAR</button>
        </Link>
      </div>
    </div>
  );
};

export default CompleteCheckList2;
