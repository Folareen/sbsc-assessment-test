import React from 'react'
import Header from './Header'

const MyAccount = () => {
  return (
    <div>
        <Header active={"my-account"}/>
        <div className="my-account-details">
          <h2 className="my-account-name">
            Name
          </h2>
          <p className="my-account-email">
            sakawahab@gmail.com
          </p>
          <img src="" alt="" className="my-account-avatar" />
          <p className="my-current-location"></p>
          <p className="my-account-summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure tenetur cum dolorum accusantium eligendi est doloribus libero deleniti repudiandae.
          </p>
        </div>
    </div>
  )
}

export default MyAccount