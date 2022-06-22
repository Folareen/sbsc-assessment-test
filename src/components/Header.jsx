import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {FaRegUserCircle, FaSignOutAlt} from 'react-icons/fa'
import { UserContext } from '../context/UserContext';

const Header = ({active}) => {

  const {user, setUser} = useContext(UserContext)
  const [drop, setDrop] = useState(false)

  const dropdown = () => {
    setDrop(!drop)
  }

  return (
    <nav>
      <ul className='header-nav'>
        <li className={active == "home" ? "home-nav active" : "home-nav "}>
          <Link to="/" >
            Home
          </Link> 
        </li>
        <button className={ active == "my-account" || active == "users" ? 'account-dropdown active' : 'account-dropdown'} onClick={dropdown} >
          <FaRegUserCircle/>
        </button>
        <li className="account-nav" style={drop ? {display:"block"} : {display:"none"}}>
          <ul className='dropdown'>
            <li className="my-account-nav ">
              <Link to="/my-account" >My Account</Link>
            </li>
            <li className="users-nav ">
              <Link to="/users" >Users</Link>
            </li>
          </ul>
        </li>
        <li className="logout-nav">
          <Link to="/" onClick={() => setUser(null)} ><FaSignOutAlt/></Link>
          <p className="tooltip">
            Logout
          </p>
        </li>
      </ul>
    </nav>
  )
}

export default Header