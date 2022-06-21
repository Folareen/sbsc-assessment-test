import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FaEyeSlash, FaEye} from 'react-icons/fa';

const Login = () => {
    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisibility, setPasswordVisibility] = useState(false)

    const submit = (e) =>{
        e.preventDefault();
        console.log([name,email,password])
        setName("")
        setEmail("")
        setPassword("")
    }

    const togglePassword = (e) =>{
        e.preventDefault()
        setPasswordVisibility(!passwordVisibility)
    }

    // useEffect(
    //     () => {
    //     callApi()
    //     }, []
    // )

    // async function callApi(){
    //     const data = await fetch ("https://reqres.in/api/users/1", {
    //     method : 'POST',
    //     headers : {
    //         'Accept' : 'application/json, text/plain, */*',
    //         'Content-type' : 'application/json'
    //     },
    //     body : JSON.stringify(
    //         {
    //         name: "morpheus",
    //         job: "lead"
    //         }
    //     )
    //     });
    //     const res = await data.json()
    //     // setValue(res)
    //     console.log(res)
    // }


  return (
    <div className='forms'>
        <h1>
            SBSC
        </h1>
        <form action="" method='post' className="form">               <h3>
                Login
            </h3>
            <div className="form-email">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-password">

                <label htmlFor="password">Password:</label>
                <div className="password-container">
                    <input type={passwordVisibility ? "text" : "password"} name="password" id="" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button className="eye" onClick={togglePassword}>
                        {
                            passwordVisibility ?
                            <FaEyeSlash/>
                            :
                            <FaEye />
                        }
                    </button>
                </div>
            </div>
            <button className="form-submit" type="submit" onClick={submit}>
                Login
            </button>
            <p className='dont'>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </form>
    </div>
  )
}

export default Login