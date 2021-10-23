import React from 'react'
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <div>
          <h1>Bienvenido</h1>
          <Link to='/user'>
          <button>Ingresar</button>
          </Link>
        </div>
    )
}
export default Home;