import React from 'react'
import AccessoriesConditionWithAnswerYes from './AccessoriesConditionWithAnswerYes';
import AccessoriesConditionWithAnswerNo from './AccessoriesConditionWithAnswerNo';

const AccessoriesCondition = ({condition, additionOfAccessoriesConditions, estadoDeAccesorios}) => {
    

  return (
    <div>
      <li>
        {condition.pregunta}
        {condition.respuesta ==='si' ?
        <AccessoriesConditionWithAnswerYes 
        condition={condition}
        additionOfAccessoriesConditions={additionOfAccessoriesConditions}
        estadoDeAccesorios={estadoDeAccesorios}
        />
        :
        <AccessoriesConditionWithAnswerNo
        condition={condition}
        additionOfAccessoriesConditions={additionOfAccessoriesConditions}
        estadoDeAccesorios={estadoDeAccesorios}
        />
         }
        
      </li>
    </div>
  );
};

export default AccessoriesCondition
