import React from 'react'
import Header from './Header'

const MyAccount = () => {
  return (
    <div className='my-account'>
        <Header active={"my-account"}/>
        <div className="my-account-details">
          <h2 className="my-account-name">
            Name
          </h2>
          <p className="my-account-email">
            sakawahab@gmail.com
          </p>
          <img src="https://reqres.in/img/faces/2-image.jpg" alt="" className="my-account-avatar" />
          <p className="job">
            Developer
          </p>
          <button className='my-account-edit'>
            Edit Account Details
          </button>
        </div>
    </div>
  )
}

export default MyAccount