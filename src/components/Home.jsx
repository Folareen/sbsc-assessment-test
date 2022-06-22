import React, {useState, useEffect, useContext} from 'react'
import Header from './Header';
import { UserContext } from '../context/UserContext';

const Homepage = () => {
  const [location, setLocation] = useState("");
  const {user, setUser} = useContext(UserContext)


  // useEffect (
  //   () => {

  //   }, []
  // )

  // const getLocation = () => {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     const { latitude, longitude } = position.coords;
  //   });
  // }



  return (
    <div className='home'>
        <Header active={"home"}/>
        <div className="account-details">
          <h2 className="account-name">
            Welcome,<span>{user}</span>
          </h2>
          <p className="account-email">
            name@gmail.com
          </p>
          <img src="https://reqres.in/img/faces/2-image.jpg" alt="" className="account-avatar" />
          <p className="current-location">
            Lagos,Nigeria.
          </p>
          <p className="account-summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, cumque. Sequi odit doloremque itaque tempore veniam officiis corrupti fugit ipsam aut optio temporibus quisquam architecto, sed iure modi velit nemo esse fugiat iste. Ducimus, maxime ab? Quis, quasi quisquam? Consequuntur, consequatur rerum eaque a quas placeat. Praesentium, minima et odio inventore cupiditate autem quasi, facilis, consequatur eius aliquid iure error?
          </p>
        </div>
    </div>
  )
}

export default Homepage