import React, { useEffect, useState } from 'react'
import Header from './Header';
import Loading from './Loading'

const Users = () => {
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(true)
  
  useEffect(
    () => {
      getUsers()
    }, []
  )

  const getUsers = async () =>{
    const res = await fetch("https://reqres.in/api/users?page=1")
    const data = await res.json()
    setValue(data.data)
    setLoading(false)
  }


  return (
    loading ?
    <div className='users'>
      <Loading/>
    </div>

    : 
    <div className='users'>
    <Header active={"users"}/>
    {value.map(
      (user) => {
        const {email, first_name, avatar, id} = user;
        return(
        <div className="user" key={id}>
          <h2 className='user-name'>
          {first_name}
          </h2>
          <p className="user-email">
            {email}
          </p>
          <img src={avatar} alt="" className="user-avatar" />
      </div>
        )
    }
    )
      }

    </div>
  )
}

export default Users