import React from "react";
import { Link } from "react-router-dom";
/* import ArnesCondition from './ArnesCondition'; */
import CompleteCheckListItem from "./CompleteCheckListItem";

const CompleteCheckList = ({estadoDelArnes}) => {
  estadoDelArnes.pop();
  const listOfQuestions = estadoDelArnes;
 
  return (
    <div>
     <ol>
        {listOfQuestions.map((condition) => {
          return (
            <CompleteCheckListItem
              key={condition.id}
              condition={condition}
            />
          );
        })}
      </ol>
      <div className="continueBtnDiv">
        <Link to="/checklist2">
          <button className="continueBtn">CONTINUAR</button>
        </Link>
      </div>
    </div>
  );
};

export default CompleteCheckList;
