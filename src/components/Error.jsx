import React from 'react'
import { Link } from 'react-router-dom';
import { FaHouseUser } from 'react-icons/fa';

const Error = () => {
  return (
    <div className='error'>
        <p>
          404 error..Seems you're lost.
        </p>
        <Link to="/" className='error-nav'><span>Go Home</span>
        < FaHouseUser/>
        </Link>
    </div>
  )
}

export default Error