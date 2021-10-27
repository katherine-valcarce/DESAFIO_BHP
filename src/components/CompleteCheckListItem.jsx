import React from 'react'
import CompleteCheckListItemWithAnswerYes from './CompleteCheckListItemWithAnswerYes';
import CompleteCheckListItemWithAnswerNo from './CompleteCheckListItemWithAnswerNo';


const CompleteCheckListItem = ({condition}) => {
    return (
       
            <div className= "btnAnswer">
              <li>
                {condition.pregunta}
                {condition.respuesta ==='si' ?
                <CompleteCheckListItemWithAnswerYes
                condition={condition}
               />
                :
                <CompleteCheckListItemWithAnswerNo
                condition={condition}
                />
                 }
                </li>
            </div>
         
    )
}

export default CompleteCheckListItem
