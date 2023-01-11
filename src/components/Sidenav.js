import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignIn,
  faSignOut,
  faStore,
  faUpload,
  faDashboard,
} from '@fortawesome/free-solid-svg-icons';
import UserContext from '../context/AuthContext';

function Sidenav({ refNav, handleNav }) {
  const { auth, handleAuth } = useContext(UserContext);

  const handleLogin = () => {
    handleAuth();
    handleNav();
  };

  return (
    <div id="mySidenav" className="sidenav" ref={refNav}>
      <Link to="/" className="item-sidenav" onClick={handleNav}>
        <h4>Home</h4>
        <FontAwesomeIcon icon={faStore} />
      </Link>
      <hr className="linea-sidenav"></hr>

      {auth ? (
        <>
          <Link to="/dashboard" className="item-sidenav" onClick={handleNav}>
            <h4>Dashboard</h4>
            <FontAwesomeIcon icon={faDashboard} />
          </Link>
          <Link to="/upload" className="item-sidenav" onClick={handleNav}>
            <h4>Upload</h4>
            <FontAwesomeIcon icon={faUpload} />
          </Link>
          <Link to="/" className="item-sidenav" onClick={handleLogin}>
            <h4>Logout</h4>
            <FontAwesomeIcon icon={faSignOut} />
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="item-sidenav" onClick={handleLogin}>
            <h4>Login</h4>
            <FontAwesomeIcon icon={faSignIn} />
          </Link>
          <Link to="/signup" className="item-sidenav" onClick={handleLogin}>
            <h4>Signup</h4>
            <FontAwesomeIcon icon={faSignIn} />
          </Link>
        </>
      )}
    </div>
  );
}

export default Sidenav;
