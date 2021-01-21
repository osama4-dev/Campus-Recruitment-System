import React,{useState} from 'react'

import InputFields from '../FieldAndButton/InputField'
import ButtonG from '../FieldAndButton/ButtonG'

import './Login.css'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="header1">
            <h1>Login</h1>
             <form className="login__form">
             <InputFields type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

<InputFields type="password" label="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    <ButtonG text="Login" />

             </form>


        </div>
    )
}

export default Login
