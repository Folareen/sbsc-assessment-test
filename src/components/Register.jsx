import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaEyeSlash, FaEye} from 'react-icons/fa'

const Register = () => {

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
        console.log("change")
    }


    // useEffect(
    //     () => {
    //     callApi()
    //     }, []
    // )

    async function callApi(){
        const data = await fetch ("https://reqres.in/api/register", {
        method : 'POST',
        headers : {
            'Accept' : 'application/json, text/plain, */*',
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(
            {
            name: name,
            email: email,
            password: password,
            }
        )
        });
        const res = await data.json()
        // setValue(res)
        console.log(res)
    }
  return (
    <div>
        <h1>
            SBSC
        </h1>
        <form action="" className="form">
            <div className="form-name">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
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
                Register
            </button>
        </form>
        <p className='dont'>
            Don't have an account? <Link to="/login">Login</Link>
        </p>
    </div>
  )
}

export default Register