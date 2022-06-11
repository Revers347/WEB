import userAPI from '../api/userAPI'
import { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        userAPI.login({ username: username, password: password })
            .then(res => {
                localStorage.setItem('token', 'Bearer ' + res.data)
                navigate('/')
            })
    }

    return (
    <div class="main-inner">
        <div class="input-form">
            <h1>Login</h1>

            <input onChange={(e) => setUsername(e.target.value)} type="text" name="u" placeholder="Username" required="required" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="p" placeholder="Password" required="required" />
            <button onClick={login} class="btn btn-primary btn-block btn-large">Login</button>
        </div>
    </div>
)}

export default Login