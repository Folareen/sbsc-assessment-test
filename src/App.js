import { useEffect, useState } from 'react';
import './css/index.css';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Home from './components/Home'
import MyAccount from './components/MyAccount'
import Users from './components/Users'
import Error from './components/Error'

function App() {

  const [isLogged, setIsLogged] = useState(true)
  // const [loading, setLoading] = useState(true);
  // const [value, setValue] = useState("");

  // useEffect(
  //   () => {
  //     callApi()
  //   }, []
  // )

  // async function callApi(){
  //   const data = await fetch ("https://reqres.in/api/users/1", {
  //     method : 'POST',
  //     headers : {
  //       'Accept' : 'application/json, text/plain, */*',
  //       'Content-type' : 'application/json'
  //     },
  //     body : JSON.stringify(
  //       {
  //         name: "morpheus",
  //         job: "lead"
  //       }
  //     )
  //   });
  //   const res = await data.json()
  //   // setValue(res)
  //   console.log(res)
  //   setLoading(false)
  // }


  return (
    isLogged ?
    <Router>
        <Routes>
          <Route exact path="/" element={<Welcome/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/my-account" element={<MyAccount/>} />
          <Route exact path="/users" element={<Users/>} />
          <Route path="*" element={<Error/>}/>
        </Routes>
    </Router>
    :  
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App;
