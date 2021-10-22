import React from 'react'

const Doc = (props) => {
    const {user, position} = props;
    return (
        <div>
            <h2> Nombre de usuario : {user} </h2>
            <h2> Nombre de cargo : {position} </h2>
        </div>
    )
}
export default Doc