import React, { useState, useTransition } from 'react'
import Header from './Header';
import UpdateModal from './UpdateModal';

const MyAccount = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    showModal?

    <UpdateModal/>
    
    :
    <div className='my-account'>
        <Header active={"my-account"}/>
        <div className="my-account-details">
          <h2 className="my-account-name">
            Name
          </h2>
          <p className="my-account-email">
            name@gmail.com
          </p>
          <img src="https://reqres.in/img/faces/2-image.jpg" alt="" className="my-account-avatar" />
          <p className="job">
            Developer
          </p>
          <button className='my-account-edit' onClick={() => {setShowModal(!showModal)}}>
            Edit Account Details
          </button>
        </div>
    </div>
  )
}

export default MyAccount