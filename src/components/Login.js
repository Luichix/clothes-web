import '../css/Login.css'
// import PropTypes from 'prop-types'
import React from 'react'

function Login (props){

  return(
    <div className='login'>
      <div className='login_container'>
        <h1>Sign-in</h1>
        <form onSubmit={props.handleLogin}>
          <h5>username</h5>
          <input type='text' value={props.username} name='Username'
            onChange={props.targetUsername} />

          <h5>Password</h5>
          <input type='password' value={props.password} name='Password'
            onChange={props.targetPassword} />

          <button type='submit' className='login_signInButton' >login</button>
        </form>
      </div>
    </div>
  )
}

// Login.propTypes = {
//   handleLogin: PropTypes.func.isRequired,
//   username: PropTypes.string.isRequired,
//   targetUsername: PropTypes.func.isRequired,
//   password: PropTypes.string.isRequired,
//   targetPassword: PropTypes.func.isRequired
// }


export default Login