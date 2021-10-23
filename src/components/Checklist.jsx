import React from 'react'
import {Link} from "react-router-dom";
import ArnesCondition from './ArnesCondition';

const CheckList = ({arnesCondition, additionOfhArnesConditions}) => {
    
    return (
        <div>
            <h2>Verifica si el punto de anclaje cuenta con los siguientes requisitos:</h2>
            <br />
            <h4>Estado del Arnés</h4>
            <br/>
            <ol>
                 { 
                 
                    arnesCondition.map((condition) => {
                    return(
                       <ArnesCondition 
                       key={condition.id}
                       condition={condition}
                       additionOfhArnesConditions={additionOfhArnesConditions}
                        />
                    )
                    })
                }
                    <Link to='/checklist2'><button>Continuar</button></Link>
                      
                
            </ol>
            
          
         </div>
    )
}
export default CheckList;
