import React, { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Header (){
  const [button, setbutton] = useState('')

  const buttonNavBar = () => {
    if(button === 'none'){
      setbutton('')
      document.getElementById('navBar').style.display='flex'
    } else {
      setbutton('none')
      document.getElementById('navBar').style.display='none'
    }
  }

  return (
    <header className="header-container">
      <h1 className='store-name'>Elina closet</h1>
      <nav className="nav-header" id="navBar">
        <Link to='/' className="a-nav">NUEVO</Link>
        <Link to='/' className='a-nav'>DESCUENTO</Link>
        <Link to='/' className='a-nav'>ROPA</Link>
        <Link to='/' className='a-nav'>ZAPATOS</Link>
        <Link to='/Login' className='a-nav'>ACCESORIOS</Link>
        <Link to='/image' className='a-nav'>BELLEZA</Link>
      </nav>
      <a id="button-bar" onClick={buttonNavBar} className='icon-header'  ><FontAwesomeIcon icon={faBars} size="lg"/></a>
    </header>)
}

export default Header