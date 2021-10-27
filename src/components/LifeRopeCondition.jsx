import React from 'react'
import AccesoryConditionWithAnswerYes from './LifeRopeConditionWithAnswerYes';
import AccesoryConditionWithAnswerNo from './LifeRopeConditionWithAnswerNo';

const lifeRopeCondition = ({condition, additionOfLifeRopeConditions, estadoDeCuerdaDeVida}) => {
    

  return (
    <div>
      <li>
        {condition.pregunta}
        {condition.respuesta ==='si' ?
        <AccesoryConditionWithAnswerYes 
        condition={condition}
        additionOfLifeRopeConditions={additionOfLifeRopeConditions}
        estadoDeCuerdaDeVida={estadoDeCuerdaDeVida}
        />
        :
        <AccesoryConditionWithAnswerNo
        condition={condition}
        additionOfLifeRopeConditions={additionOfLifeRopeConditions}
        estadoDeCuerdaDeVida={estadoDeCuerdaDeVida}
        />
         }
        
      </li>
    </div>
  );
};

export default lifeRopeCondition