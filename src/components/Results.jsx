import React from 'react'
import {Link} from "react-router-dom";
import ResultsELC from './ResultsELC'


const Results = ({estrobo, height, space, informationELC, onChangeinformationELC}) => {
    return (
        <div>
            {informationELC === 'Estarás a salvo' ?
            <div>
                <ResultsELC
                   estrobo={estrobo}
                   height={height}
                   space={space}
                   informationELC={informationELC}
                   onChangeinformationELC={onChangeinformationELC}
                 />
               </div>
             :
             <div>
                 <ResultsELC
                 estrobo={estrobo}
                 height={height}
                 space={space}
                 informationELC={informationELC}
                 onChangeinformationELC={onChangeinformationELC}
                />
                 <Link to='/calculator'>
                 <button>Realiza los calculos nuevamente</button>
                 </Link>
             </div>
            
        }
        </div>
    )
}

export default Results
