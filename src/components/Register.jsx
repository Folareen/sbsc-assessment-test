import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaEyeSlash, FaEye} from 'react-icons/fa'

const Register = () => {

    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [validName, setValidName] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true)

    const submit = (e) =>{
        e.preventDefault();
        if(isPasswordValid() && isEmailValid() && isNameValid()){
            // console.log([name,email,password])
            setName("")
            setEmail("")
            setPassword("")
            alert("registered")
            window.location.href = "./home";         
        }else{
            isNameValid();
            isEmailValid();
            isPasswordValid();
        }

    }

    const togglePassword = (e) =>{
        e.preventDefault()
        setPasswordVisibility(!passwordVisibility)
    }

    const isPasswordValid = () =>{
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        if(regex.test(password)){
            setValidPassword(true)
            return true
        }else{
            setValidPassword(false)
            return false
        }
    }
    const isEmailValid = () =>{
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if(regex.test(email)){
            setValidEmail(true)
            return true
        }else{
            setValidEmail(false)
            return false
        }
    }
    const isNameValid = () =>{
        if(name.length > 0){
            setValidName(true)
            return true
        }else{
            setValidName(false)
            return false
        }
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
    <div className='forms'>
        <h1>
            SBSC
        </h1>
        <form action="" method='post' className="form">
            <h3>
                Register
            </h3>
            <div className="form-name">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
                {
                    validName?
                    ""
                    :
                    <p className='form-warning'>
                        Invalid Name
                    </p>
                }            
            <div className="form-email">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
                {
                    validEmail ?
                    ""
                    :
                    <p className='form-warning'>
                        Invalid Email Address
                    </p>
                } 
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
                {
                    validPassword?
                    ""
                    :
                    <p className='form-warning'>
                        Password should be 8 characters long,contain atleast 1 alphanumeric character and special character
                    </p>
                }
            <button className="form-submit" type="submit" onClick={submit}>
                Register
            </button>
            <p className='dont'>
                Don't have an account? <Link to="/login">Login</Link>
            </p>
        </form>

    </div>
  )
}

export default Register