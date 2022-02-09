import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
// import { Button } from 'reactbulma'
import './Signup.css'

function Signup() {
    const history= useHistory()

    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <div className="signup">
            
            <div className="signup__container">
                <h1>Sign up</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Username</h5>
                    <input type='text' value={userName} onChange={e => setUserName(e.target.value)}/>

                    <h5>Mobile Number</h5>
                    <input type='text' value={mobileNumber} onChange={e => setMobileNumber(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <h5>Confirm Password</h5>
                    <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>

                    <button type='submit' className="signup__signUpButton">Sign Up</button>
                </form>
                <div className="signup__moveToLogin">

                    <p>
                        Already a user?
                    </p>
                    
                    <Link className="link" to="/">
                        <button className="signup__loginButton">
                                Log In
                        </button>
                    </Link>
                  
                    
                    
                    
                </div>
                {/* <Button info>Log in</Button> */}
           </div>
        </div>
    )
}

export default Signup
