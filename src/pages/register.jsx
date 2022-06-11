import userAPI from '../api/userAPI'
import { useState } from 'react'
import '../App.css'

const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = () => {
        userAPI.register({ username: username, password: password, email: email })
    }

    return (<div class="main-inner">
    <div class="input-form">
        <h1>Sign up</h1>

        <input onChange={(e) => setUsername(e.target.value)} type="text" name="u" placeholder="Username" required="required" />
        <input onChange={(e) => setEmail(e.target.value)} type="text" name="u" placeholder="Email" required="required" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" name="p" placeholder="Password" required="required" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" name="p" placeholder="Confirm password" required="required" />
        <button onClick={register} class="btn btn-primary btn-block btn-large">Sign up</button>
    </div>
</div>)
}

export default Register