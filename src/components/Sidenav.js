import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn, faSignOut, faStore, faUpload, faDashboard } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../context/AuthContext'


function Sidenav ({ refNav, handleNav }) {
  const { auth, handleAuth } = useContext(UserContext)

  const handleLogin = () => {
    handleAuth()
    handleNav()
  }

  return (
    <div id='mySidenav' className='sidenav' ref={refNav}>
      <Link to='/' className='item-sidenav'  onClick={handleNav}>
        <h4>Todo</h4>
        <FontAwesomeIcon icon={faStore} />
      </Link>
      <hr className='linea-sidenav'></hr>

      {
        auth &&
        <>
          <Link to='/dashboard' className='item-sidenav'  onClick={handleNav} >
            <h4>Dashboard</h4>
            <FontAwesomeIcon icon={faDashboard} />
          </Link>
          <Link to='/upload' className='item-sidenav'  onClick={handleNav}>
            <h4>Upload</h4>
            <FontAwesomeIcon icon={faUpload} />
          </Link>
        </>
      }

      <Link to='/login' className='item-sidenav' onClick={handleLogin}>
        {auth ?
          <><h4>Exit</h4><FontAwesomeIcon icon={faSignOut} /></>
          :
          <><h4>Login</h4><FontAwesomeIcon icon={faSignIn} /></>
        }
      </Link>


    </div>
  )
}

export default Sidenav