import React from 'react'
import {Link} from "react-router-dom";
import ResultsELC from './ResultsELC'
import ResultsCheckList from './ResultsCheckList'

const Results = ({estrobo, height, space, informationELC, onChangeinformationELC,checkList}) => {
    return (
        <div>
            {informationELC === 'Estarás a salvo' && checkList === true ?
            <div>
                <ResultsELC
                   estrobo={estrobo}
                   height={height}
                   space={space}
                   informationELC={informationELC}
                   onChangeinformationELC={onChangeinformationELC}
                 />
                 <ResultsCheckList/>
                 <Link to='/Doc'><button type='submit'> Previsualizar PDF </button> </Link>
            </div>
             :
             informationELC === 'Estarás a salvo' && checkList === false ?
             <div>
                 <ResultsELC
                 estrobo={estrobo}
                 height={height}
                 space={space}
                 informationELC={informationELC}
                 onChangeinformationELC={onChangeinformationELC}
                />
                 <Link to='/checklist'>
                 <button>Llena el formulario</button>
                 </Link>
             </div>
             :
             informationELC === 'Estarás en peligro' ?
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
             :
             checkList === true && informationELC === '' ?
             <div>
                 <ResultsCheckList/>
                 <Link to='/calculator'>
                 <button>Realiza los calculos</button>
                 </Link>
             </div>
             :
             null
        }
        
        </div>
    )
}

export default Results
