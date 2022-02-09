import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    return (
        <div className="login">
            
        <div className="login__container">
            <h1>Login</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' className="login__loginButton">Login</button>
            </form>
            <div className="login__moveToSignup">

                <p>
                    New user?
                </p>
                
                <Link className="link" to="/signup">
                    <button className="login__signupButton">
                            Sign up
                    </button>
                </Link>
              
                
                
                
            </div>
            {/* <Button info>Log in</Button> */}
       </div>
    </div>
        

    )
}

export default Login
