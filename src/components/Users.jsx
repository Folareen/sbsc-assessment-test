import React from 'react'
import Header from './Header'

const Users = () => {
  return (
    <div className='users'>
      <Header active={"users"}/>
      <div className="user">
          <h2 className='user-name'>
          Wahab
          </h2>
          <p className="user-email">
            sakawahab@gmail.com
          </p>
          <img src="https://reqres.in/img/faces/2-image.jpg" alt="" className="user-avatar" />
      </div>
    </div>
  )
}

export default Users