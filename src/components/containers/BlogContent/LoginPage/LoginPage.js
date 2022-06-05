import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  './LoginPage.css'

const LoginPage = ({setIsLoggedIn, setUserName}) => {
    const navigate = useNavigate()
    
   

    const handleLogIn = (e) => {
        e.preventDefault()

        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem('userName', login)
        
        setUserName(login)
        setIsLoggedIn(true)
        
        navigate('/')
    }

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginChange = (e) => {
        setLogin(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

  return (
    <form className='loginForm' onSubmit={handleLogIn}>
        <h2>Авторизация</h2>

        <div><input onChange={handleLoginChange} type="text" placeholder='login' required /></div>

        <div><input onChange={handlePasswordChange} type="password" placeholder='password' required /></div>

        <div><button className='blackBtn' type='submit'>Войти</button></div>
    </form>
  )
}

export default LoginPage