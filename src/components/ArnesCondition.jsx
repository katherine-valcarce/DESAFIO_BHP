import React from 'react'
import ArnesConditionWithAnswerYes from './ArnesConditionWithAnswerYes';
import ArnesConditionWithAnswerNo from './ArnesConditionWithAnswerNo';

const ArnesCondition = ({condition, additionOfArnesConditions, estadoDelArnes}) => {
    

  return (
    <div>
      <li>
        {condition.pregunta}
        {condition.respuesta ==='si' ?
        <ArnesConditionWithAnswerYes 
        condition={condition}
        additionOfArnesConditions={additionOfArnesConditions}
        estadoDelArnes={estadoDelArnes}
        />
        :
        <ArnesConditionWithAnswerNo
        condition={condition}
        additionOfArnesConditions={additionOfArnesConditions}
        estadoDelArnes={estadoDelArnes}
        />
         }
        
      </li>
    </div>
  );
};

export default ArnesCondition
