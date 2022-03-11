import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn, faSignOut, faStore, faUpload } from '@fortawesome/free-solid-svg-icons'
import UserContext from '../context/AuthContext'


function Sidenav ({ refNav }) {
  const { auth, handleAuth } = useContext(UserContext)

  const handleNav = () => {
    refNav.current.style.width = '0'
  }



  return (
    <div id='mySidenav' className='sidenav' ref={refNav} >
      <button className="closebtn" onClick={handleNav}>&times;</button>
      <Link to='/' className='item-sidenav'>
        <h4>Todo</h4>
        <FontAwesomeIcon icon={faStore} />
      </Link>
      <hr className='linea-sidenav'></hr>

      {
        auth &&
       <Link to='/dashboard' className='item-sidenav'>
         <h4>Upload</h4>
         <FontAwesomeIcon icon={faUpload} />
       </Link>

      }

      <Link to='/login' className='item-sidenav' onClick={handleAuth}>
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