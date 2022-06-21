import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='welcome'>
        <h1>
            Welcome to SBSC
        </h1>
        <div className="cta">
            <Link to="/login" className="cta-button">Login</Link>
            <Link to="/register" className="cta-button">Register</Link>
        </div>
    </div>
  )
}

export default Welcome