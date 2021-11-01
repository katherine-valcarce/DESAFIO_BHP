import React from 'react'
import CorrectAnswerWithYes from './CorrectAnswerWithYes'
import CorrectAnswerWithNo from './CorrectAnswerWithNo'

const KindOfAnswer = ({condition,state, addingQuestions, data}) => {
    return (
            <div className= "btnAnswer">
      <li>
        {condition.pregunta}
        {condition.respuesta ==='si' ?
        <CorrectAnswerWithYes 
        condition={condition}
        state={state}
        addingQuestions={addingQuestions}
        data={data}
        />
        :
        <CorrectAnswerWithNo
        condition={condition}
        state={state}
        addingQuestions={addingQuestions}
        data={data}
        />
         }
        
      </li>
    </div>
  );
}

export default KindOfAnswer
