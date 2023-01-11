import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import signupService from '../services/signup';
import Alert from './Alert';
import imageService from '../services/image';
import UserContext from '../context/AuthContext';

function Signup() {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const { handleAuth } = useContext(UserContext);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      imageService.setToken(user.token);
    }
  }, []);
  const handlesignup = async (event) => {
    event.preventDefault();

    try {
      const user = await signupService.signup({
        username,
        name,
        password,
      });

      window.localStorage.setItem('loggedAppUser', JSON.stringify(user));
      imageService.setToken(user.token);

      setUsername('');
      setPassword('');
      handleAuth();
      navigate('/dashboard');
    } catch (exception) {
      console.error('AHHHHHHHHHHHHHHHHHHH!!!');
      setErrMsg('Credenciales Incorrectas!');
      setTimeout(() => {
        setErrMsg(null);
      }, 5000);
    }
  };

  return (
    <>
      <Alert msg={errMsg} type="danger" />
      <div className="signup">
        <div className="signup_container">
          <h1>Ingreso</h1>
          <form onSubmit={handlesignup}>
            <h5>Nombre</h5>
            <input
              type="text"
              value={name}
              name="Name"
              onChange={({ target }) => setName(target.value)}
              autoComplete="off"
            />
            <h5>Usuario</h5>
            <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
              autoComplete="off"
            />

            <h5>Contraseña</h5>
            <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />

            <button type="submit" className="signup_signInButton">
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
