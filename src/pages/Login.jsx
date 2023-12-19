import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../components/UserContext';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    };
  return (
    <form action="">
        <h2>Login:</h2>
        <p>Username:</p>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
        <p>Password</p>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <button onClick={handleSubmit} type="submit">Submit</button>
    </form>
  )
}

export default Login