import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
        <h1>
            Welcome to SBSC
        </h1>
        <div className="forms">
            <Link to="/login" className="form-submit">Login</Link>
            <Link to="/register" className="form-submit">Register</Link>
        </div>
    </div>
  )
}

export default Welcome