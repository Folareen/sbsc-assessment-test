import React, {useState, useEffect} from 'react'
import Header from './Header'

const Homepage = () => {
  const [location, setLocation] = useState("")


  useEffect (
    () => {

    }, []
  )

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
    });
  }



  return (
    <div>
        <Header/>
        <h3 className="name">

        </h3>
        <p className="email">

        </p>
        <img src="" alt="" className="avatar" />
        <p className="location"></p>
    </div>
  )
}

export default Homepage