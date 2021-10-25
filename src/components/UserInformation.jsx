import React from 'react'
import {Link} from "react-router-dom";

const UserInformation = () => {
    return (
        <div>
            <form action="">
                <div>
                    <input 
                    type="text"
                    placeholder='Nombre'
                     />
                </div>
                <div>
                    <input 
                    type="text"
                    placeholder='Ocupación'
                     />
                </div>
                <Link to='/menu'>
                    <button
                    type='submit'
                    >
                     Ingresar
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default UserInformation
