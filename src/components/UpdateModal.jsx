import React, { useState} from 'react';
import { FaEyeSlash, FaEye,FaRegWindowClose } from 'react-icons/fa';

const UpdateModal = () => {

    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true)

    const submit = (e) =>{
        e.preventDefault();
        if(isPasswordValid() && isEmailValid()){
            console.log([name,email,password])
            setName("")
            setEmail("")
            setPassword("")
            alert("registered")   
        }
    }

    const togglePassword = (e) =>{
        e.preventDefault()
        setPasswordVisibility(!passwordVisibility)
    }

    const isPasswordValid = () =>{
        const regex = new RegExp("^[A-Za-z0-9? ,_-]+$");
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

  return (
    <div className='update-modal'>


            <form action="" method='post' className="form">
            <button >
              <FaRegWindowClose/>
              </button>
            <h3>
                Edit Account details
            </h3>
            <div className="form-name">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-name">
                <label htmlFor="job">Job Title:</label>
                <input type="text" name="name" id="" placeholder="Enter your job title" value={job} onChange={(e) => setJob(e.target.value)}/>
            </div>
            <div className="form-email">
                {
                    validEmail ?
                    ""
                    :
                    <p className='form-warning'>
                        Invalid Email Address
                    </p>
                }
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-password">
                {
                    validPassword?
                    ""
                    :
                    <p className='form-warning'>
                        Password should be 8 characters long,contain atleast 1 alphanumeric character and special character
                    </p>
                }
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
            <div className="image-upload">
              <label htmlFor="image" className="image">Upload your image..</label>
              <input type="file" />
            </div>
            <button className="form-submit" type="submit" onClick={submit}>
                Save Changes
            </button>
        </form>
    </div>
  )
}

export default UpdateModal