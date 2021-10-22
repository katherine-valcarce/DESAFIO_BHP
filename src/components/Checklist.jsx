import React from 'react'
import {Link} from "react-router-dom";

const Checklist = ({setCheckList}) => {
    return (
        <div>
            <h1>Estás en CheckList</h1>
            <Link to='/results'>
            <button
            onClick={() => setCheckList(true) }
            >
                Enviar
                </button>
            </Link>
        </div>
    )
}
export default Checklist;
