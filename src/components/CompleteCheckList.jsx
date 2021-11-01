import React from "react";

/* import ArnesCondition from './ArnesCondition'; */
import CompleteCheckListItem from "./CompleteCheckListItem";

const CompleteCheckList = ({data}) => {
  data.pop();
  const listOfQuestions = data;
 
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
      
    </div>
  );
};

export default CompleteCheckList;
