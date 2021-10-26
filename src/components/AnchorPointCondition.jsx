import React from 'react'
import AnchorPointConditionWithAnswerYes from './AnchorPointConditionWithAnswerYes';
import AnchorPointConditionWithAnswerNo from './AnchorPointConditionWithAnswerNo';

const AnchorPointCondition = ({condition, additionOfAnchorPointConditions, estadoDelPuntoDeAnclaje}) => {
    

  return (
    <div>
      <li>
        {condition.pregunta}
        {condition.respuesta ==='si' ?
        <AnchorPointConditionWithAnswerYes 
        condition={condition}
        additionOfAnchorPointConditions={additionOfAnchorPointConditions}
        estadoDelPuntoDeAnclaje={estadoDelPuntoDeAnclaje}
        />
        :
        <AnchorPointConditionWithAnswerNo
        condition={condition}
        additionOfAnchorPointConditions={additionOfAnchorPointConditions}
        estadoDelPuntoDeAnclaje={estadoDelPuntoDeAnclaje}
        />
         }
        
      </li>
    </div>
  );
};

export default AnchorPointCondition
