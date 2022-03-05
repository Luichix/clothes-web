import React from 'react'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
function Footer () {
  return(
    <footer className="footer-container">
      <Link to='/image' className='store-name'>Elina closet</Link>

      <div className="icon-footer">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faWhatsapp} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <hr className="line-footer"></hr>
      <div className="credits">
        <p>Created © 2022</p>
        <p>Diseñado por: <a href="https://luichix.github.io/portafolio/" target="_blank" rel="noreferrer"><code>Luichix Rex</code></a></p>
      </div>
    </footer>
  )
}

export default Footer