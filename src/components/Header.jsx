import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <ul>
        <li className="home-nav ">
          <Link to="/home" >Home</Link> 
        </li>
        <li className="my-account-nav ">
          <Link to="/my-account" >My Account</Link>
        </li>
        <li className="users-nav ">
          <Link to="/users" >Users</Link>
        </li>
        <li className="logout-nav">
          <Link to="logout" >Logout</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header