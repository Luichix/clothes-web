import React, { useRef } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sidenav from '../components/Sidenav'

function Header ({ handleAuth, auth }){
  let refNav = useRef()

  const openNav = () => {
    refNav.current.style.width='250px'
  }

  return (
    <>
      <header className="header-container">
        <a id="button-bar" onClick={openNav} className='icon-header'><FontAwesomeIcon icon={faBars} size="lg"/></a>
        <h1 className='store-name'>ELINA CLOSET</h1>
      </header>
      <Sidenav refNav={refNav} handleAuth={handleAuth} auth={auth} />
    </>)
}

export default Header