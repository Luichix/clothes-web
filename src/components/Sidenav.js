import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn, faSignOut, faStore } from '@fortawesome/free-solid-svg-icons'


function Sidenav ({ refNav, handleAuth, auth }) {


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