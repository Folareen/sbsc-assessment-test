import React, { useState, useContext } from 'react'
import Header from './Header';
import UpdateModal from './UpdateModal';
import { UserContext } from '../context/UserContext';


const MyAccount = () => {
  const [showModal, setShowModal] = useState(false);

  const {user, setUser} = useContext(UserContext)

  const {id, email, first_name} = user;

  return (
    showModal?

    <UpdateModal/>
    
    :
    <div className='my-account'>
        <Header active={"my-account"}/>
        <div className="my-account-details">
          <h2 className="my-account-name">
            {first_name}
          </h2>
          <p className="my-account-email">
            {email}
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