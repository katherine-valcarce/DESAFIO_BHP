import React from 'react'
import {Link} from "react-router-dom";

const identification = (props) => {
    const {user, setUser, position, setPosition} = props;
    // const saveData = (e) => {
    //     e.preventDefault()
    // }
    // const changeUser = (e) => { 
    //     setUser(e.target.event)
    // }

    return (
        <div>
            <h1>IDENTIFICACIÓN DE USUARIO</h1>
            <img></img>
                    <div>
                    <input 
                     type="text"
                     name="name"
                     id="name"
                     value={user}
                     onChange= {(e) => setUser(e.target.value)}
                     placeholder='Nombre'
                    />
                     <input 
                     type="text"
                     name="position"
                     id="position"
                     value={position}
                     onChange= {(e) => setPosition(e.target.value)}
                     placeholder='Cargo'
                    />
                </div>
                
                <br/>
                <Link to='/Menu'><button>Ingresar</button> </Link>
        </div>
    )
}
export default identification;