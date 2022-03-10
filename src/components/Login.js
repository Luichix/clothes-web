import '../css/Login.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import loginService from '../services/login'
import Alert from './Alert'
import imageService from '../services/image'



function Login ({ handleAuth }){
  let navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      imageService.setToken(user.token)
    }
  }, [])
  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedAppUser', JSON.stringify(user)
      )
      imageService.setToken(user.token)

      setUsername('')
      setPassword('')
      navigate('/image')
      handleAuth()
    } catch(exception){
      console.error('AHHHHHHHHHHHHHHHHHHH!!!')
      setErrMsg('Credenciales Incorrectas!')
      setTimeout(() => {
        setErrMsg(null)
      }, 5000)
    }
  }


  return(
    <>
      <Alert msg={errMsg} type="danger" />
      <div className='login'>
        <div className='login_container'>
          <h1>Ingreso</h1>
          <form onSubmit={handleLogin}>
            <h5>Usuario</h5>
            <input type='text' value={username} name='Username'
              onChange={({ target }) => setUsername(target.value)} autoComplete="off" />

            <h5>Contraseña</h5>
            <input type='password' value={password} name='Password'
              onChange={({ target }) => setPassword(target.value)} />

            <button type='submit' className='login_signInButton' >Login</button>
          </form>
        </div>
      </div>
    </>
  )
}


export default Login