import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FaEyeSlash, FaEye} from 'react-icons/fa'

const Login = () => {

    const [value, setValue] = useState("");

    // useEffect(
    //     () => {
    //     callApi()
    //     }, []
    // )

    async function callApi(){
        const data = await fetch ("https://reqres.in/api/users/1", {
        method : 'POST',
        headers : {
            'Accept' : 'application/json, text/plain, */*',
            'Content-type' : 'application/json'
        },
        body : JSON.stringify(
            {
            name: "morpheus",
            job: "lead"
            }
        )
        });
        const res = await data.json()
        // setValue(res)
        console.log(res)
        // setLoading(false)
    }





  return (
    <div>
        <h1>
            SBSC
        </h1>
        <form action="" className="form">
            <div className="form-email">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="" placeholder="Enter your email"/>
            </div>
            <div className="form-password">
                <label htmlFor="password">Password:</label>
                <div className="password-container">
                    <input type="text" name="password" id="" placeholder="Enter your password"/>
                    <button className="eye">
                        <FaEye />
                    </button>
                </div>
            </div>
            <button className="form-submit" type="submit">
                Login
            </button>
        </form>
        <p className='dont'>
            Don't have an account? <Link to="/register">Register</Link>
        </p>
    </div>
  )
}

export default Login