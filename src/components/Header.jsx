import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home" className="home-nav">Home</Link> 
        </li>
        <li>
          <Link to="/my-account" className="my-account-nav">My Account</Link>
        </li>
        <li>
          <Link to="/users" className="users-nav">Users</Link>
        </li>
        <li>
          <Link to="/" className="logout-nav">Logout</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header