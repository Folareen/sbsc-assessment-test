import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FaEyeSlash, FaEye} from 'react-icons/fa';

const Login = () => {

    const [value, setValue] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true)

    const submit = (e) =>{
        e.preventDefault();
        if(isPasswordValid() && isEmailValid()){
            console.log([email,password])
            setEmail("")
            setPassword("")
            alert("registered")
            window.location.href = "./home";         
        }else{
            setValidEmail(false)
            setValidPassword(false)
            window.location.href = "./home"; 
        }

    }

    const togglePassword = (e) =>{
        e.preventDefault()
        setPasswordVisibility(!passwordVisibility)
    }

    const isPasswordValid = () =>{
        // const regex = new RegExp("^[A-Za-z0-9? ,_-]+$");
        const regex = /^[A-Za-z0-9_@./#&+-]*$/;
        if(password.length >= 8 && regex.test(password)){
            alert("yeah")
            setValidPassword(true)
            return true
        }else{
            setValidPassword(false)
            return false
        }
    }
    const isEmailValid = () =>{
        const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
        if(regex.test(email)){
            setValidEmail(true)
            return true
        }else{
            setValidEmail(false)
            return false
        }
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
        <form action="" method='post' className="form">               
            <h3>
                Login
            </h3>
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
                    validEmail ?
                    ""
                    :
                    <p className='form-warning'>
                        Incorrect Password
                    </p>
                }  
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