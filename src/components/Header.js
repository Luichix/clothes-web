import React, { useRef, useState } from 'react'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Sidenav from '../components/Sidenav'

function Header (){
  const [icon, setIcon] = useState(faBars)
  const [shadow, setshadow] = useState('none')
  let refNav = useRef()

  const handleNav = () => {

    if(refNav.current.style.width=== '0px'){
      refNav.current.style.width='250px'
      setshadow('shadow')
      setIcon(faX)
    } else if(refNav.current.style.width=== '250px'){
      refNav.current.style.width='0px'
      setIcon(faBars)
      setshadow('light')
    } else {
      refNav.current.style.width='250px'
      setIcon(faX)
      setshadow('shadow')
    }
  }

  return (
    <>
      <div className={shadow}  onClick={handleNav}></div>
      <header className="header-container">
        <a id="button-bar" onClick={handleNav} className='icon-header'><FontAwesomeIcon icon={icon} size="lg"/></a>
        <h1 className='store-name'>ELINA CLOSET</h1>
      </header>
      <Sidenav refNav={refNav} handleNav={handleNav} />
    </>)
}

export default Header